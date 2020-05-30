import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Searchbar } from 'ionic-angular';
import { Tab1Service, City } from './tab1.services';
import { profileService, User } from '../modal/profile.services';
import { Tab2Page } from '../tab2/tab2';
import { ModalPage } from '../modal/modal';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
  providers: [Tab1Service, profileService]
})

export class Tab1Page {

  cidades: any;
  cidade: any[];
  hiddenCidades: Boolean;
  selectOptions;
  nome: string;
  @ViewChild('searchQuery') searchbar: Searchbar;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private Tab1Service: Tab1Service,
     public cityModal : ModalController,
     private profileService: profileService) {   
      this.profileService.getUser().subscribe((usuario: User) => {
        this.nome = usuario.nome;
      });   
      
      this.Tab1Service.getCity().subscribe((cidades) => {
        this.cidades = cidades;
        this.cidade = this.cidades;
      });
    
     this.hiddenCidades = true;
      
  } 

  vacinas(){
    this.navCtrl.push(Tab2Page);
  }

  perfil(){
    this.navCtrl.push(ModalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

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
