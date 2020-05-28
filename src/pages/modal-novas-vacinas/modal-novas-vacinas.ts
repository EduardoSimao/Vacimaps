import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-novas-vacinas',
  templateUrl: 'modal-novas-vacinas.html',
})
export class ModalNovasVacinasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNovasVacinasPage');
  }

}