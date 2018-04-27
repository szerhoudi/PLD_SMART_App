import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';

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

  fichier;

  constructor(public navCtrl: NavController, public navParams: NavParams, public file: File) {
  this.file.readAsText(this.file.applicationDirectory + "src/assets/data","rif.json")
  .then(data => {
        var fichier = JSON.parse(data);
        console.log(fichier);
      }).catch((error) => {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }
  
  

}
