import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, App } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { profileService, User } from './profile.services';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HomePage } from '../home/home';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  providers: [profileService]

})
export class ModalPage {
  token;
  usuario: User;
  nome: String;
  dt_nascimento;
  datajson;
  private API_URL = 'https://vacimaps-app.herokuapp.com'

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController, 
    private http: HttpClient,
    public appCtrl: App,
    public viewCtrl : ViewController,
    private profileService: profileService) {
      this.profileService.getUser().subscribe((usuario: User) => {
        this.usuario = usuario;
        this.nome = usuario.nome;
        this.dt_nascimento = new Date(usuario.dt_nascimento).toISOString();
  });
  this.token = JSON.parse(localStorage.getItem('token'));
}

  dash(){
    this.navCtrl.push(Tab1Page);
  }

  vacinas(){
    this.navCtrl.push(Tab2Page);
  }

  alterar(){
    this.navCtrl.push(ConfiguracoesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  public Sair () {
    localStorage.removeItem('token');
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

  save() {
    this.datajson ={ 
        nome: this.nome, 
        dt_nascimento: this.dt_nascimento, 
      }
      console.log(this.datajson);
      let url = `${this.API_URL}/usuario`;
      this.http
      .put(url, this.datajson, {headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => {
        if(res['Mensagem'] == 'Usuário alterado com sucesso!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
          this.closeModal()
        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()     
          


        }
      })   
    }   
  

}
