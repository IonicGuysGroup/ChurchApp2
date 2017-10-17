import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Tab1Page } from './../tab1/tab1';
import { Tab2Page } from './../tab2/tab2';
import { TabsPage } from './../tabs/tabs';
export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?:any;
  index?: number;
  icon: string;

}
/**
 * Generated class for the SidemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
 rootPage = 'TabsPage';
 @ViewChild(Nav) nav: Nav;
 pages: PageInterface[] = 
[
{title: 'Events', pageName: 'TabsPage',tabComponent: 'Tab1Page', index: 0, icon: 'home'},
{title: 'Forum', pageName: 'TabsPage',tabComponent: 'Tab2Page', index: 1, icon: 'contacts'},

{title: 'Register', pageName: 'RegisterPage', icon: 'home'},
{title: 'Make Payment', pageName: 'PaymentPage', icon: 'home'},
{title: 'Motivations', pageName: 'MotivationalPage', icon: 'home'},
{title: 'Login', pageName: 'LoginPage', icon: 'home'},
{title: 'Contact', pageName: 'ContactPage', icon: 'home'},
{title: 'Forum', pageName: 'ForumPage', icon: 'contacts'},
{title: 'Streaming', pageName: 'StreamingPage', icon: 'home'},
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 openPage(page: PageInterface){
let params = {};

if (page.index){
  params = { tabIndex: page.index}
}
if (this.nav.getActiveChildNav() && page.index != undefined) 
 
  {  this.nav.getActiveChildNav().select(page.index);}
else{
  this.nav.setRoot(page.pageName, params);
}

 }
isActive(page: PageInterface){
let childNav = this.nav.getActiveChildNav();

if(childNav)
  {
    if (childNav.getSelected() && childNav.getSelected().root == page.tabComponent)
      {
        return 'primary'
      }
      return;
  }
  if (this.nav.getActive() && this.nav.getActive().name == page.pageName)
    {return 'primary'}

}
}
