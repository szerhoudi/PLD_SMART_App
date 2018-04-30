import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class ActivitiesPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.list = "all";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

  changeFavorite(activity) {
      activity.favorite = !activity.favorite;
  }

}
