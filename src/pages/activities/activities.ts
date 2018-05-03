import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivitiesDetailPage} from '../activities-detail/activities-detail';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { Rest } from '../../providers/rest';

/**
* Generated class for the ActivitiesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-activities',
    templateUrl: 'activities.html',
    //template: '<button ion-button [navPush]="activitiesDetailPage" [navParams]="params">Go</button>'
})
export class ActivitiesPage {
    params: Object;
    activitiesDetailPage = ActivitiesDetailPage;
    public url = "https://s3.eu-west-3.amazonaws.com/pld-smart/rif.json";
    public oldUrl : any;
    //activitiesDetailPage: any;

    //localisation = Localisation;

    item;
    list: string;
    dataFav: any;
    listFavoris: any = [];

    public posts: any = null;

    constructor(public navCtrl: NavController, public events: Events, public navParams: NavParams, public http: Http, private storage: Storage, public restProvider: Rest) {
        this.fetchEvent();
        this.storage = storage;
        this.list = "all";
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
                    if(this.posts != null) {
                        this.storage.get('favorites').then((favorites) => {
                            favorites.forEach((id) => {
                                this.posts.activitesBalise[id].favorite = true;
                            });
                        });
                    }
                });
            });
        });
    }

    changeFavorite(activity) {
        this.posts.activitesBalise[activity.id].favorite = !this.posts.activitesBalise[activity.id].favorite;

        let ajouterFav = true;
        var favorites = [];
        var listMinors = [];
        this.storage.get('favorites').then((val) => {
            favorites = val;
            console.log('val :', val);
            val.forEach((idfav,index) => {
                if(idfav==activity.id){
                    ajouterFav = false;
                    favorites.splice(index,1);
                    this.listFavoris.splice(activity.id,1,false);
                }
            });
            if(ajouterFav==true){
                favorites.push(activity.id);
                this.listFavoris.splice(activity.id,1,true);
            }
            this.storage.set('favorites', favorites);

            this.dataFav.activitesBalise.forEach((event) => {
                if(favorites!=null){
                    favorites.forEach((favorite) => {  
                      if (favorite == event.id) {
                        listMinors.push(event.minor);
                      }
                    });
                }  
            });
            console.log(listMinors);
            
        });
        this.events.publish('favorites:created', listMinors);
        console.log(activity);
    }

    fetchEvent() {
        this.restProvider.fetchEvent()
        .then(data => {
            this.dataFav = data;
        });
    }

    showDetailPage(activity) {
        this.navCtrl.push(ActivitiesDetailPage, {
            id: activity.id
        });
    }

    ionViewWillLeave() {
        var favorites = [];
        for (let activity of this.posts.activitesBalise) {
            if (activity.favorite == true) {
                favorites.push(activity.id);
            }
        }
        this.storage.set('favorites', favorites);
    }
}
