import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SidemenuPage} from '../pages/sidemenu/sidemenu';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };
import {EventListPage} from '../pages/event-list/event-list'


import { AngularFireModule}  from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule} from 'angularfire2/database';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SidemenuPage,
    EventListPage,
  ],
  imports: [
    BrowserModule,
   
 
    IonicModule.forRoot(MyApp),
    
      SocketIoModule.forRoot(config),
      AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
      //import angularDatabaseModule to use database interactions
      AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventListPage,
  
    SidemenuPage
  ],
  providers: [
    StatusBar,
  
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
