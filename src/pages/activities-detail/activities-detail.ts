import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ActivitiesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-activities-detail',
  templateUrl: 'activities-detail.html',
})
export class ActivitiesDetailPage {

  public posts: any = null;
  public id: any =null;
  public url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private storage: Storage) {
   this.storage.get('url').then((val) => {
    if(val!=null){
        this.url = val;
     }
       this.http.get(this.url).map(res => res.json()).subscribe(data => {
        this.posts = data;
        this.id = this.navParams.get("id");
        this.posts.activitesBalise[0].nom = this.posts.activitesBalise[this.id].nom;
        this.posts.activitesBalise[0].lieu = this.posts.activitesBalise[this.id].lieu;
        this.posts.activitesBalise[0].heureDebut = this.posts.activitesBalise[this.id].heureDebut;
        this.posts.activitesBalise[0].heureFin = this.posts.activitesBalise[this.id].heureFin;
        this.posts.activitesBalise[0].nextActivity = this.posts.activitesBalise[this.id].nextActivity;
        this.posts.activitesBalise[0].description = this.posts.activitesBalise[this.id].description;
        this.posts.activitesBalise[0].intervenants = this.posts.activitesBalise[this.id].intervenants;
    })
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesDetailPage');
  }

}
