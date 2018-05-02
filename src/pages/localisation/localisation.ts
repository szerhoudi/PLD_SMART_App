import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the LocalisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localisation',
  templateUrl: 'localisation.html',
})
export class LocalisationPage {

  public url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('url').then((val) => {
        if(val!=null){
            this.url = val;
         }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalisationPage');
  }

}
