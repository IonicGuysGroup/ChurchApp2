import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import {SidemenuPage} from '../sidemenu/sidemenu'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  showSkip = true;

  slides = [
    {
      title: "Welcome to the PIWC, Kumasi",
      description: "</b>Sermons availale on the fly.<b>",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic  with web technolo",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b>services like push ndating.",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Automatically syndicate and aggregate all of your media",
      description: "Do you havomatically updated.",
      image: "assets/img/ica-slidebox-img-5.png",
    }
    
  ];
  constructor(public navCtrl: NavController) {}
    startsidemenu(){
      this.navCtrl.setRoot(SidemenuPage);
    }
  

 

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  

 
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }
  

}
