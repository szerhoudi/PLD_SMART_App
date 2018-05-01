import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ChangeEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-event',
  templateUrl: 'change-event.html',
})
export class ChangeEventPage {

  constructor(public alerCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,  public http: Http) {
  this.http.get('https://s3.eu-west-3.amazonaws.com/pldsmart/Event.json').map(res => res.json()).subscribe(data => {
        this.posts = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeEventPage');
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Choose this event ?',
      message: 'Do you really change to this event ?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
