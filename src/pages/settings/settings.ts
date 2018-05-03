import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { Settings } from '../../providers/settings';

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

    public isToggled: boolean;

    ionViewDidLeave() {
        return this.settings.save();
    }

    public updateMode() {
        if (this.isToggled) {
            this.settings.trilateration = 2;
        } else {
            this.settings.trilateration = 1;
        }
        this.events.publish('navigation:changed', this.settings.trilateration);
        this.storage.set("trilateration", this.settings.trilateration);
    }

    ionViewCanEnter() {
        this.storage.get('trilateration').then((val) => {
            this.settings.trilateration = val === null ? this.settings.defaultTrilateration : val;
            if (this.settings.trilateration == 2) {
                this.isToggled = true;
            } else {
                this.isToggled = false;
            }
        });
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public settings: Settings,
        public storage: Storage,
        public events: Events
    ) {
        this.isToggled = false;
    }

}
