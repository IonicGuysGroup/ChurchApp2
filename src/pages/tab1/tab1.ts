import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {EventItem} from '../../models/event-item/event-item.interface'
import {EventListPage} from '../event-list/event-list'
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
 

  constructor(public navCtrl: NavController) {
    
  }
  addeventpage()
  {
this.navCtrl.push(EventListPage)

  }
}
