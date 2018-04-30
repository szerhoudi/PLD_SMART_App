import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})

export class AccueilPage {

  public posts: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json').map(res => res.json()).subscribe(data => {
        this.posts = data;
        console.log(this.posts);
        console.log(this.posts.title);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }



}
