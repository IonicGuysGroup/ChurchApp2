
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Tab1Page} from '../tab1/tab1';
import {EventItem} from '../../models/event-item/event-item.interface';
import { NgModule, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


  /**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

 eventItem = {} as EventItem;
 eventItemRef$: FirebaseListObservable<EventItem[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.eventItemRef$ = this.database.list('event-list');
    /*
    shopping-list
    0:
    itemName ='mango',
    itemnumber = 4
   0:
    itemName ='orange',
    itemnumber = 6
  
    */
    }
    
    addEventItem(eventItem: EventItem )
  
    {
      //create a new anomynous object and convert itemnumber to number under the shopping-list node
  this.eventItemRef$.push({
    eventName: this.eventItem.eventName,
    eventDate: this.eventItem.eventDate,
    eventDescription: this.eventItem.eventDescription,

  });
    }
  
  }
