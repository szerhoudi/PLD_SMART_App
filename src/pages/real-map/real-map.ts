import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RealMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-real-map',
  templateUrl: 'real-map.html',
})
export class RealMapPage {

  public url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('url').then((val) => {
    if(val!=null){
        this.url = val;
     }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealMapPage');
  }

}
