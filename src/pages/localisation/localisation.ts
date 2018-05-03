import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { Settings } from '../../providers/settings';
import { Rest } from '../../providers/rest';
import { BeaconDetector } from '../../providers/beacon-detector';

/**
* Generated class for the LocalisationPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
    selector: 'page-localisation',
    templateUrl: 'localisation.html',
    styles: ['localisation.scss']
})
export class LocalisationPage {

    public beacons = [];
    dataJson: any;
    standJson: any;

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
                for(let i in this.standJson){
                    let idBeacon = this.standJson[i].minor;
                    if (idBeacon == beacon.minor) {
                        beacon.nom = this.standJson[i].nom;
                        beacon.image = this.standJson[i].image;
                        beacon.lieu = this.standJson[i].lieu;
                        beacon.heureDebut = this.standJson[i].heureDebut;
                        beacon.heureFin = this.standJson[i].heureFin;
                        beacon.description = this.standJson[i].description;
                    }
                }
                displayableBeacons.push(beacon);
            }
        }
        console.log(this.beacons);
        this.beacons = displayableBeacons.sort((a, b) => a.minor - b.minor);
        console.log(beacons);
        //TODO  this.changeDetectorRef.detectChanges();
    }

    ionViewCanEnter() {
        return new Promise((resolve, reject) => {
            this.http.get(this.restProvider.apiUrlEvent)
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

    ngOnInit() {
        this.standJson = this.dataJson.activitesBalise;
    }

    doRefresh(refresher) {
        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public changeDetectorRef: ChangeDetectorRef,
        public settings: Settings,
        public beaconDetector: BeaconDetector,
        public restProvider: Rest,
        public http: Http
    ) {
        beaconDetector.addBeaconStatusChangedHandler(this.handleBeaconStatusChanged);
        this.fetchData();
    }

    fetchData() {
        this.restProvider.fetchEvent()
        .then(data => {
            this.dataJson = data;
        });
    }


}
