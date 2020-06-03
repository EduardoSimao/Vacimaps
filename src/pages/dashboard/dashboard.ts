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
    public cityModal : ModalController,
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
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  initializeItems() {
    this.cidades = this.cidade;
}

something(cidade){
  // this.hiddenCidades = true;
  this.searchbar.clearInput(null);
  
  var modalcidade = this.cityModal.create ('CidadeModalPage',{ 
    nome_cidade: cidade.nome_cidade,
    uf_cidade: cidade.uf_cidade,
    
  }); modalcidade.present();
}

getCity(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();
  let val
  // set val to the value of the searchbar
  try{
    val = ev.target.value;
             
    if(val.length > 2){
      this.hiddenCidades = false;
    }else{
      this.hiddenCidades = true;
    }
  }catch{
    val = "a";
    this.hiddenCidades = true;
  }
   
  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.cidades = this.cidades.filter((cidade) => {        
      return (
        cidade.nome_cidade.toLowerCase().indexOf(val.toLowerCase()) > -1
         
    );
    
    })
  }
}

}

