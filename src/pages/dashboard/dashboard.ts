import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Searchbar } from 'ionic-angular';
import { ModalController, App } from 'ionic-angular';
import { profileService, User } from '../perfil/profile.services';
import { PerfilPage } from '../perfil/perfil';
import { VacinasPage } from '../vacinas/vacinas';
import { DashboardService, City } from '../dashboard/dashboard.services';

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
  providers: [DashboardService, profileService]
})
export class DashboardPage {
  cidades: any;
  cidade: any[];
  hiddenCidades: Boolean;
  selectOptions;
  nome: string;
  @ViewChild('searchQuery') searchbar: Searchbar;

 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App, 
    public modalCtrl : ModalController,
    public confCtrl : ModalController,
    private DashboardService: DashboardService,
    private profileService: profileService){
      this.profileService.getUser().subscribe((usuario: User) => {
        this.nome = usuario.nome;
      });   
      
      this.DashboardService.getCity().subscribe((cidades) => {
        this.cidades = cidades;
        this.cidade = this.cidades;
      });
    
     this.hiddenCidades = true;
}

public openModal() {
  var perfilPage = this.modalCtrl.create ('PerfilPage'); perfilPage.present (); 
}

public modalOpen() {
  var confPage = this.confCtrl.create ('ConfiguracoesPage'); confPage.present (); 
}

vacinas(){
  this.navCtrl.push(VacinasPage);
}

perfil(){
  this.navCtrl.push(PerfilPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

}

