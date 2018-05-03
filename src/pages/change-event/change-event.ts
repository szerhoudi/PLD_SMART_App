import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AccueilPage } from '../accueil/accueil';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
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

    constructor(public alerCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,  public http: Http, private storage: Storage, public events: Events) {
        this.events = events;
        this.storage.get('url').then((val) => {
            if(val!=null){
                this.url = val;
            }
        });
        this.http.get('https://s3.eu-west-3.amazonaws.com/pldsmart/listeEvent.json').map(res => res.json()).subscribe(data => {
            this.posts = data;
        })
    }

    doConfirm(id) {
        let confirm = this.alerCtrl.create({
            title: 'Choose this event ?',
            message: 'Do you really change to this event ? You will loose your favorites',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.storage.set('url', this.posts.Event[id].url);
                        this.events.publish('event:changed', this.posts.Event[id].nom);
                        this.navCtrl.setRoot(AccueilPage);
                    }
                }
            ]
        });
        confirm.present()
    }
}
