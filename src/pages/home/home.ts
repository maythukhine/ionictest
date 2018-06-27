import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { MessagePage } from '../message/message';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  username2:string;
  username3:string;


  constructor(public navCtrl: NavController) {

  this.username="";
  this.username2="";
  this.username3="";
  }

  
  sendmessage(){
      this.navCtrl.push(MessagePage,{data:this.username ,data3:this.username2,data2:this.username3});
  }
  
}
