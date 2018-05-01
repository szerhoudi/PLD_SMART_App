import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AccueilPage } from '../accueil/accueil';
import { Storage } from '@ionic/storage';
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
  public posts: any = null;
  public url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
  
  constructor(public alerCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,  public http: Http, private storage: Storage) {
    this.storage.get('url').then((val) => {
    if(val!=null){
        this.url = val;
     }
    });
  this.http.get('https://s3.eu-west-3.amazonaws.com/pldsmart/Event.json').map(res => res.json()).subscribe(data => {
        this.posts = data;
        console.log(this.posts);
        console.log(this.posts.title);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeEventPage');
  }

  doConfirm(id) {
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
            this.storage.set('url', this.posts.Event[id].url);
            console.log(this.posts.Event[id].url);
            console.log(this.storage.get('url'));
          this.storage.get('url').then((val) => {
                console.log("val :",val);
            });
            this.navCtrl.setRoot(AccueilPage);
          }
        }
      ]
    });
    confirm.present()
  }
    
}
