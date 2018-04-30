import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivitiesDetailPage} from '../activities-detail/activities-detail';
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
  template: '<button ion-button [navPush]="activitiesDetailPage" [navParams]="params">Go</button>'
})
export class ActivitiesPage {
  params: Object;
  activitiesDetailPage = ActivitiesDetailPage;
  activitiesDetailPage: any;

  //localisation = Localisation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.pushPage = LoginPage;
    this.params = { id: 42 };
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

}
