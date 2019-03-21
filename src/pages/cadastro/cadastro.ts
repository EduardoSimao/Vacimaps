import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'

  nome: string;
  senha: string;
  email: string;
  datajson;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  Voltar(){
    this.navCtrl.push(HomePage)
  }
  
  doPOST() {
    console.log("POST");
    let url = `${this.API_URL}/usuario`;
    this.datajson ={ 
      nome: this.nome, 
      senha: this.senha, 
      email: this.email,
    }
    console.log(this.datajson);
    this.http
      .post(url, this.datajson)
      .subscribe(res => console.log(res["Mensagem"]))         
  }

}