import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import KalmanFilter from 'kalmanjs';

import { LocationManager } from './location-manager';
import { Rest } from './rest';
import { Settings } from './settings';

import { EventModalPage } from '../pages/event-modal/event-modal';

@Injectable()
export class BeaconDetector {
  private beacons = {};
  private beaconStatusChangedHandlers = [];
  public positioningMode;

  allRssiHistory:any = {};
  rssiHistory:any = {};
  dominatHistory:any = [];
  minorb: number = 104;
  settings:any = { notifications: true };
  firstVisit: any = {};
  dataJson: any;
  dataEvent: any;
  points: any = {};
  dataBeacon: any = {};
  x: number;
  y: number;
  historyCount:number = 5;
  listFavorites: any;

  private didRangeBeaconsInRegionHandler = (result) => {
    let minor;
    let rssi;
    let tx;
    let distance;
    let dominantBeacon;
    let beaconSignals = [];
    let rssiValues = {};
    const kalmanFilter = new KalmanFilter({R: 0.01, Q: 20});

    for (let beacon of result.beacons) {
      beacon.accuracy = this.calculateAccuracy(kalmanFilter.filter(beacon.rssi), beacon.tx);
      beacon.key = beacon.uuid + '.' + beacon.major + '.' + beacon.minor;
      beacon.timestamp = (new Date()).getTime();

      minor = beacon.minor;
      rssi = kalmanFilter.filter(beacon.rssi);
      tx = beacon.tx;
      distance = this.calculateAccuracy(beacon.rssi, beacon.tx);
      // console.log('RSSI + filter: ' + kalmanFilter.filter(beacon.rssi) + ' RSSI: ' + beacon.rssi);
      // distance = beacon.accuracy;
      let avgRssi = rssi;
        this.addRssiHistory(this.allRssiHistory, minor, rssi);
        if(rssi != 0)
          this.addRssiHistory(this.rssiHistory, minor, rssi);
        if(rssi == 0 && !this.areAllRssiZero(minor))
          avgRssi = this.getAvgRssi(minor);

        beaconSignals.push( {"minor" : minor, "rssi" : avgRssi, "origRssi": rssi, "tx" : tx, "dist" : distance });
        // console.log(beaconSignals);
        rssiValues[minor] = avgRssi;
      this.beacons[beacon.key] = beacon;
    }

    beaconSignals.sort(function(a,b) {
      if( a.rssi == 0 || b.rssi == 0) // put zeros to the end of list
        return a.rssi-b.rssi;
      else
        return b.rssi - a.rssi; // Descending order
    });

    if(beaconSignals.length > 0){
      dominantBeacon = beaconSignals[0]['minor'];
      if(this.dominatHistory.length < 3)
        this.dominatHistory.splice(0, 0, dominantBeacon);
      else{
        this.dominatHistory.splice(-1, 1); // remove the old item
        this.dominatHistory.splice(0, 0, dominantBeacon); // insert as the first item
      }
    }

    if(typeof this.getMajority(this.dominatHistory) !== "undefined")
      dominantBeacon = this.getMajority(this.dominatHistory);

    this.minorb = dominantBeacon;

    this.events.subscribe('favorites:created', (favorites) => {
        this.listFavorites = favorites;
    });
    if(this.settings.notifications && dominantBeacon!= null){
      // check the beacon has not been visited and its rssi is big enough.
      // rssiValues[dominantBeacon]>50 TO TEST ON PC rssiValues[dominantBeacon]>-75 && rssiValues[dominantBeacon]<0
      if(this.firstVisit[dominantBeacon]==1 && rssiValues[dominantBeacon]>-75 && rssiValues[dominantBeacon]<0 ){
        this.listFavorites.forEach((favorite) => {
            if (favorite == dominantBeacon) {
                this.firstVisit[dominantBeacon] = 0;
                this.getBeaconMessage(dominantBeacon);
            }
        });

      }
    }

    this.events.subscribe('navigation:changed', (new_mode) => {
        this.positioningMode = new_mode;
    });

    if(this.positioningMode == 1 && dominantBeacon != null){
      this.minorb = dominantBeacon;
      this.x = this.points[dominantBeacon]['x'];
      this.y = this.points[dominantBeacon]['y'];
    }
    else if(beaconSignals.length > 2){
        let m1 = beaconSignals[0]['minor'];
        let m2 = beaconSignals[1]['minor'];
        let m3 = beaconSignals[2]['minor'];

        this.minorb = m1;

        let x1 = this.points[m1]['x'];
        let y1 = this.points[m1]['y'];

        let x2 = this.points[m2]['x'];
        let y2 = this.points[m2]['y'];

        let x3 = this.points[m3]['x'];
        let y3 = this.points[m3]['y'];

        let d1:any = this.calculateAccuracy(beaconSignals[0]['rssi'], beaconSignals[0]['tx']);
        // let d1 = this.getDistance(beaconSignals[0]['rssi']);
        let d2:any = this.calculateAccuracy(beaconSignals[1]['rssi'], beaconSignals[1]['tx']);
        // let d2 = this.getDistance(beaconSignals[1]['rssi']);
        let d3:any = this.calculateAccuracy(beaconSignals[2]['rssi'], beaconSignals[2]['tx']);
        // let d3 = this.getDistance(beaconSignals[2]['rssi']);

        if(d1>0 && d2>0 && d3>0){
          let A = (x1*x1) + (y1*y1) - (d1*d1);
          let B = (x2*x2) + (y2*y2) - (d2*d2);
          let C = (x3*x3) + (y3*y3) - (d3*d3);

          let X32 = x3 - x2;
          let X13 = x1 - x3;
          let X21 = x2 - x1;
          let Y32 = y3 - y2;
          let Y13 = y1 - y3;
          let Y21 = y2 - y1;

          // based on the formula from http://cdn.intechweb.org/pdfs/13525.pdf
          let x = ( (A*Y32) + (B*Y13) + (C*Y21) )/(2*( (x1*Y32) + (x2*Y13) + (x3*Y21) ));
          let y = ( (A*X32) + (B*X13) + (C*X21) )/(2*( (y1*X32) + (y2*X13) + (y3*X21) ));

          x = Math.round(x);
          y = Math.round(y);

          if(x== -Infinity || isNaN(x) || y == -Infinity || isNaN(y)){
            this.x = this.points[dominantBeacon]['x'];
            this.y = this.points[dominantBeacon]['y'];
          }
          else {
            this.x = x;
            this.y = y;
          }

          console.log("x : "+x);
          console.log("y : "+y);
        }

    }
    else if(beaconSignals.length > 0){
        this.x = this.points[dominantBeacon]['x'];
        this.y = this.points[dominantBeacon]['y'];
    }

    this.events.publish('coordinates:changed', this.x, this.y);
    this.notifyBeaconStatusChanged();
  }

  getFavorites() {
      this.listFavorites = [];
      this.storage.get('favorites').then((favorites) => {
          this.dataEvent.activitesBalise.forEach((event) => {
              if(favorites!=null){
                  favorites.forEach((favorite) => {  
                    if (favorite == event.id) {
                      this.listFavorites.push(event.minor);
                    }
                  });
              }  
          });
      });

  }

  getBeaconMessage(minorVal) {
      for (let i=0, l=Object.keys(this.dataJson.notifications).length; i<l; i++) {
        this.dataBeacon[this.dataJson.notifications[i].minor] = this.dataJson.notifications[i]
    }
    this.handleBeaconMsg(this.dataBeacon[minorVal]);
  }

    handleBeaconMsg(response){
    if(response){
      let msgList = [];
      if(response['enabled']==1){
        if(response['template']=='text'){
          if(response['type']=='URL'){
            this.showConfirm(response['message'], response['url']);
          }
          else
            msgList.push(response);

        } else if (response['template']=='form'){
          //add if there is some specification
          msgList.push(response);

        } else if (response['template']=='event'){
          let date = response['date'];
          let now = this.getDate();
          if(now <= date){
            let msg = 'There will be at this place on ' + date;
            msgList.push(msg);
          }
        } else {
          msgList.push(response);
        }
      }
      // console.log(msgList);
      if(msgList.length > 0)
        this.showAlerts(msgList);
    }
  }

  getDate(){
    let currentTime= new Date();
    let hours: any = currentTime.getHours();
    if (hours<10){
      hours = '0'+hours;
    }
    let minutes: any = currentTime.getMinutes();
    if (minutes<10){
      minutes = '0'+minutes;
    }
    let seconds: any = currentTime.getSeconds();
    if (seconds<10){
      seconds = '0'+seconds;
    }
    let month: any = currentTime.getMonth() + 1;
    if(month <10)
      month = '0' + month;
    let day: any = currentTime.getDate();
    if(day < 10)
      day = '0' + day;
    let year: any = currentTime.getFullYear();
    let t1 = hours +":"+minutes+":"+seconds;
    let d = year+"-"+month+"-"+day;
    let dateTime= d+" "+t1;

    return  dateTime;
  }

  showConfirm(msg, url) {
    // console.log("opening modal");
    let obj = {msg: msg, url: url};
    let eventModal = this.modalCtrl.create(EventModalPage, obj);
    eventModal.onDidDismiss(data => {
        //this.userName = data.email;
        console.log(data);
    });
    eventModal.present();

  }

  showAlerts(eventData){
    let data = {header: eventData[0].header, title: eventData[0].title, image: eventData[0].image, message: eventData[0].message, btn_txt: eventData[0].btn_txt, url: eventData[0].url, template: eventData[0].template};
    let eventModal = this.modalCtrl.create(EventModalPage, data);
    eventModal.present();

  }

  getMajority(items){ // for three items

      if(items[0] == items[1] || items[0] == items[2])
        return items[0];
      else if (items[1] == items[2])
        return items[1];
      else //there is no majority; pick the newest one.
        return items[0];
    }

  areAllRssiZero(beaconKey){
    var hist = this.allRssiHistory[beaconKey];
    var allZero = true;
    if(hist){
      for(var i = 0; i < hist.length; i++){
        if(hist[i] != 0){
          allZero = false;
          break;
        }
      }
    }
    return allZero;
  }

  getAvgRssi(beaconKey){
    var sum = 0;
    var hist = this.rssiHistory[beaconKey];
    if(hist){
      for(var i = 0; i < hist.length; i++)
        sum = sum + hist[i];
      if(hist.length != 0)
        return Math.round(sum / hist.length);
      else
        return 0;
    }
    else
      return 0;
  }

  addRssiHistory(table, beaconKey, rssi){
    var hist = table[beaconKey];

    if(!hist){
      hist = [];
      hist.push(rssi);
    }
    else{
      if(hist.length < this.historyCount){
        hist.splice(0, 0, rssi);
      }
      else{
        hist.splice(-1, 1); // remove the old item
        hist.splice(0, 0, rssi); // insert as the first item
      }

    }
    table[beaconKey] = hist;
  }

  private notifyBeaconStatusChanged(): void {
    for (let beaconStatusChangedHandler of this.beaconStatusChangedHandlers) {
      beaconStatusChangedHandler(this.beacons);
    }
  }

  public calculateAccuracy(rssi, tx): void {
    let ratio = rssi / tx;
    let accuracy;
    if (ratio < 1.0) {
      accuracy = Math.pow(ratio, 10);
    }
    else {
      accuracy = 0.89976 * Math.pow(ratio, 7.7095) + 0.111;
    }
    if (accuracy < 1) {
      accuracy = Math.round(accuracy * 100) / 100;
    }
    else if (accuracy < 10) {
      accuracy = Math.round(accuracy * 10) / 10;
    }
    else {
      accuracy = Math.round(accuracy);
    }
    return accuracy;
  }

  public addBeaconStatusChangedHandler(beaconStatusChangedHandler): void {
    this.beaconStatusChangedHandlers.push(beaconStatusChangedHandler);
  };

  public getBeacons(): any {
    return this.beacons;
  };

  public start(uuid): void {
    this.locationManager.start(uuid, this.didRangeBeaconsInRegionHandler);
  };

  fetchData() {
      this.restProvider.fetchData()
      .then(data => {
          this.dataJson = data;
          for (let i=0, l=Object.keys(this.dataJson.beacons).length; i<l; i++) {
              this.points[this.dataJson.beacons[i].minor] = this.dataJson.beacons[i];
              this.firstVisit[this.dataJson.beacons[i].minor] = 1;
          }
          for (let i=0, l=Object.keys(this.dataJson.connectors).length; i<l; i++) {
              this.points[this.dataJson.connectors[i].id] = this.dataJson.connectors[i];
          }
      });
  }

  fetchEvent() {
      this.restProvider.fetchEvent()
      .then(data => {
          this.dataEvent = data;
      });
  }

  checkPositioningMode() {
      if (typeof this.positioningMode !== "undefined") {
        this.positioningMode = this.sets.trilateration;
      } else {
        this.storage.get('trilateration').then((val) => {
            this.sets.trilateration = val === null ? this.sets.defaultTrilateration : val;
            this.positioningMode = this.sets.trilateration;
        });
      }

  }

  constructor(
    public locationManager: LocationManager,
    public restProvider: Rest,
    public http: Http,
    public modalCtrl: ModalController,
    public events: Events,
    public sets: Settings,
    public storage: Storage
  ) {
    this.fetchData();
    this.fetchEvent();
    this.getFavorites();
    this.checkPositioningMode();
  }
}
