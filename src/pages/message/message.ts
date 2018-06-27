import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
 username:string;
 username2:string;
 username3:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public myParams: NavParams, public userParams: NavParams) {

    this.username=navParams.get("data");
    this.username2=myParams.get("data3");
    this.username3=myParams.get("data2");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  

}
