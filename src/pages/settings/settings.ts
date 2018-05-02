import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  
  public url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";
  public config: any = null;
  public isToggled = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
      var defaultConfig = {
          notifications: true,
          sounds: true,
          distance: 5,
          text: 14
      };
      this.config = defaultConfig;
      this.storage = storage;
      this.isToggled = true;
      this.storage.get('url').then((val) => {
        if(val!=null){
            this.url = val;
         }
        });
      this.storage.get('config').then((config) => {
          if (config !== null) {
              this.config = config;
          }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  ionViewWillLeave() {
      this.storage.set('config', this.config);
  }

  defaultSettings() {
      console.log(this.config);
      this.config = {
          notifications: true,
          sounds: true,
          distance: 5,
          text: 14
      };
  }

}
