import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-event-modal',
    templateUrl: 'event-modal.html'
})
export class EventModalPage {

    email: string;
    url: string;
    msg: string;
    header: string;
    title: string;
    image: string;
    message: string;
    btn_txt: string;
    template: string;

    constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    }

    ionViewCanEnter() {
        this.msg = this.navParams.get('msg');
        this.url = this.navParams.get('url');
        this.header = this.navParams.get('header');
        this.title = this.navParams.get('title');
        this.image = this.navParams.get('image');
        this.message = this.navParams.get('message');
        this.btn_txt = this.navParams.get('btn_txt');
        this.template = this.navParams.get('template');
    }

    openLink() {
        window.open(this.url, '_system', 'location=yes');
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

}
