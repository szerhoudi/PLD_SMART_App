import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivitiesDetailPage} from '../activities-detail/activities-detail';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
//import { Localisation} from '../localisation/localisation';

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
    //activitiesDetailPage: any;

    //localisation = Localisation;

    item;
    list: string;

    activities = [
        {
            title: "AEDI's openning remarks",
            favorite: false
        },
        {
            title: "FIDUCIAL stand",
            favorite: false
        },
        {
            title: "SOPRA STERIA stand",
            favorite: false
        },
        {
            title: "WAVESTONE stand",
            favorite: false
        },
        {
            title: "CGI stand",
            favorite: false
        },
        {
            title: "JP Morgan stand",
            favorite: false
        },
        {
            title: "ESKER stand",
            favorite: false
        },
        {
            title: "WORLDLINE stand",
            favorite: false
        },
        {
            title: "INFORMATIONS",
            favorite: false
        },
        {
            title: "Lunch Break",
            favorite: false
        }
    ];

    public posts: any = null;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private storage: Storage) {
        console.log("construct");
        //this.pushPage = LoginPage;
        this.storage = storage;
        this.params = { id: 42 };
        this.list = "all";
        this.http.get('https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json').map(res => res.json()).subscribe(data => {
            this.posts = data;
            if(this.posts != null) {
                this.storage.get('favorites').then((favorites) => {
                    console.log("opsts : ", this.posts);
                    favorites.forEach((id) => {
                        this.posts.activitesBalise[id].favorite = true;
                    });
                });
            }
        });

        console.log("posts load : ", this.posts);
    }

    changeFavorite(activity) {
        console.log(this.posts.activitesBalise);
        this.posts.activitesBalise[activity.id].favorite = !this.posts.activitesBalise[activity.id].favorite;
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
        console.log("favorites : ", favorites);
        //console.log("posts : ", this.posts);
        this.storage.set('favorites', favorites);
        this.storage.get('posts').then((val) => {
            console.log("val : ", val);
        });
    }

}
