import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
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
  public url = "https://s3.eu-west-3.amazonaws.com/pldsmart/rif.json";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private storage: Storage, public menuCtrl: MenuController) {
   this.storage.get('url').then((val) => {
    if(val!=null){
        this.url = val;
     }
        this.http.get(this.url).map(res => res.json()).subscribe(data => {
            this.posts = data;
            console.log(this.posts);
            console.log(this.posts.title);
        })
    });
    
  }
  
 toggleMenu() {
  console.log('here');
  this.menuCtrl.toggle();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }



}
