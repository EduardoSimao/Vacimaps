import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { ModalController, App } from 'ionic-angular';
import { HomePage } from '../home/home';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  
})
export class DashboardPage {
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App, 
    public modalCtrl : ModalController,
    public confCtrl : ModalController){
}

public openModal () {
  var modalPage = this.modalCtrl.create ('ModalPage'); modalPage.present (); 
}

public modalOpen () {
  var confPage = this.confCtrl.create ('ConfiguracoesPage'); confPage.present (); 
}

public Sair () {
  localStorage.removeItem('token');
  this.appCtrl.getRootNav().setRoot(HomePage)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  

}

