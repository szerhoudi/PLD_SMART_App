import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
declare var Graph: any;

import { Settings } from '../../providers/settings';
import { Rest } from '../../providers/rest';
import { BeaconDetector } from '../../providers/beacon-detector';



/**
* Generated class for the RealMapPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
    selector: 'page-real-map',
    templateUrl: 'real-map.html',
    styles: ['real-map.scss']
})
export class RealMapPage implements OnInit, OnDestroy {

  alive: boolean = true;
  public url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
  
  public beacons = [];

  dataJson: any;
  map: any = {};
  destPoints: any;
  minorb: number;
  pointB: any;
  graph: any;
  polygone: any;
  image: string;
  x: number;
  y: number;
  imageHeight: number;
  points: any = {};

  beaconsVisibility: string;
  showBeaconsBtnTxt: string = 'eye-off';
  pathVisibility: string = 'hidden';
  platform: string = 'Unknown';
  deviceId: string = 'NA';
  pathPoints: string;
  beaconAllPoints: string;

  private handleBeaconStatusChanged = (beacons) => {
    const maxAge = 10000;
    let displayableBeacons: Array<any> = [];
    let currentTimestamp = (new Date()).getTime();
    for (let key in beacons) {
      let beacon = beacons[key];
      let isWithinRange = this.settings.accuracyThreshold === 0 || beacon.accuracy <= this.settings.accuracyThreshold;
      let age = (currentTimestamp - beacon.timestamp);
      let isWithinAgeLimit = age <= maxAge;
      if (isWithinRange && isWithinAgeLimit) {
        displayableBeacons.push(beacon);
      }
    }
    this.beacons = displayableBeacons.sort((a, b) => a.minor - b.minor);
    this.events.subscribe('coordinates:changed', (new_x, new_y) => {
        this.x = new_x;
        this.y = new_y;
    });
    // console.log(this.beacons);
    // console.log(this.x);
    // console.log(this.y);
    // this.changeDetectorRef.markForCheck();
  }

}
  ionViewCanEnter() {
      return new Promise((resolve, reject) => {    
          this.http.get(this.restProvider.apiUrl)
            .map(res => res.json())
            .subscribe(
                (res)=> {
                    this.dataJson = res;
                    resolve(res);
                },
                (err)=>{
                    reject(err);
                }
            );

      });
  }

  doRefresh(refresher) {
      console.log('Begin async operation', refresher);

      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
  }

  ngOnInit() { 
    this.destPoints = this.dataJson.point_of_interests;
    this.map = this.dataJson.map_paths;
    this.graph = new Graph(this.map, true);
    this.pointB = this.destPoints[0];
    this.image = this.dataJson.img_map;
    this.imageHeight = this.dataJson.img_height;
    this.x = this.dataJson.entry_point[0].x;
    this.y = this.dataJson.entry_point[0].y;
    this.polygone = `${this.x}-8,${this.y} ${this.x}+8,${this.y} ${this.x},${this.y}-16`;
    console.log(this.dataJson);

  }

  ngOnDestroy(){
    this.events.unsubscribe('coordinates:changed');
  }

  drawPath() {
    // draw a line path from A to B.
    this.minorb = this.beaconDetector.minorb;
    let pointA = this.minorb;
    let beaconsPoints = this.graph.findShortestPath(pointA, this.pointB.tag);
    this.pathPoints = "";
    let i;
    for(i = 0; i < beaconsPoints.length; i++){
      let b = beaconsPoints[i];
      console.log(this.points[104]);
      let y = this.points[b]['y'];
      let x = this.points[b]['x'];
      let p = x + ',' + y + ' ';
      this.pathPoints += p;

    }
  }

    ngOnDestroy(){
        this.events.unsubscribe('coordinates:changed');
    }

    drawPath() {
        // draw a line path from A to B.
        let pointA = this.minorb;
        let beaconsPoints = this.graph.findShortestPath(pointA, this.pointB.tag);
        this.pathPoints = "";
        let i;
        for(i = 0; i < beaconsPoints.length; i++){
            let b = beaconsPoints[i];
            let y = this.points[b]['y'];
            let x = this.points[b]['x'];
            let p = x + ',' + y + ' ';
            this.pathPoints += p;
        }
        this.pathVisibility = 'visible';
    }

    showBeacons() {
        if(this.beaconsVisibility == 'visible'){
            this.beaconsVisibility = 'hidden';
            this.showBeaconsBtnTxt = "eye-off";
        } else {
            this.beaconsVisibility = 'visible';
            this.showBeaconsBtnTxt = "eye";
        }

        this.beaconAllPoints = "";
        let points = this.dataJson.beacons;
        for(let i in points){
            let b = points[i];
            this.beaconAllPoints += b['x'] +',' + b['y'] + ' ';
        }
    }

    clearPath = function(){
        this.pathVisibility = 'hidden';
    }
    
  }

  clearPath = function(){
      this.pathVisibility = 'hidden';
  }

  fetchData() {
      this.restProvider.fetchData()
      .then(data => {
          this.dataJson = data;
          for (let i=0, l=Object.keys(this.dataJson.beacons).length; i<l; i++) {
              this.points[this.dataJson.beacons[i].minor] = this.dataJson.beacons[i];
          }
          for (let i=0, l=Object.keys(this.dataJson.connectors).length; i<l; i++) {
              this.points[this.dataJson.connectors[i].id] = this.dataJson.connectors[i];
          }
          console.log(data);
      });
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public changeDetectorRef: ChangeDetectorRef,
    public settings: Settings, 
    public beaconDetector: BeaconDetector, 
    public restProvider: Rest,
    public http: Http,
    public events: Events
  ) {
    beaconDetector.addBeaconStatusChangedHandler(this.handleBeaconStatusChanged);
    this.fetchData();
    this.minorb = beaconDetector.minorb;
  }

}
