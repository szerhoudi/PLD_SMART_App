import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivitiesDetailPage } from '../activities-detail/activities-detail';
import { RealMapPage } from '../real-map/real-map';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

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
    listFavoris: any = [];
    public url = "https://s3.eu-west-3.amazonaws.com/pld-smart/rif.json";
    public oldUrl : any;
    public posts: any = null;
    

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
                        beacon.id = this.standJson[i].id;
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
    
    showDetailPage(beacon){
        this.navCtrl.push(ActivitiesDetailPage, {
            id: beacon.id
        });
    }
    
    showPath(beaconParam){
        this.navCtrl.setRoot(RealMapPage, {
            minor: beaconParam.minor
        });
    }
    
    changeFavorite(beacon){
        let ajouterFav = true;
        var favorites = [];
        this.storage.get('favorites').then((val) => {
            favorites = val;
            console.log('val :', val);
            val.forEach((idfav,index) => {
                if(idfav==beacon.id){
                    ajouterFav = false;
                    favorites.splice(index,1);
                    this.listFavoris.splice(beacon.id,1,false);
                }
            });
            if(ajouterFav==true){
                favorites.push(beacon.id);
                this.listFavoris.splice(beacon.id,1,true);
            }
            this.storage.set('favorites', favorites);
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
        public http: Http,
        public storage: Storage
    ) {
        beaconDetector.addBeaconStatusChangedHandler(this.handleBeaconStatusChanged);
        this.fetchData();
        
        this.storage.get('oldUrl').then((val) => {
            this.oldUrl = val;
            this.storage.get('url').then((val) => {
                if(val!=null){
                    this.url = val;
                }
                if(this.url!=this.oldUrl)
                {
                    var favorites = [];
                    this.storage.set('favorites', favorites);
                    this.oldUrl = this.url;
                    this.storage.set('oldUrl', this.oldUrl);
                }
                this.http.get(this.url).map(res => res.json()).subscribe(data => {
                    this.posts = data;
                    var taille = this.posts.activitesBalise.length;
                    this.storage.get('favorites').then((val) => {
                        for (var i=0; i< taille; i++){
                            this.listFavoris.push(false);
                        }
                        val.forEach((idfav) => {
                            this.listFavoris.splice(idfav,1,true);
                        });
                    });
                });
            });
        });
        
    }

    fetchData() {
        this.restProvider.fetchEvent()
        .then(data => {
            this.dataJson = data;
        });
    }


}
