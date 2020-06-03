import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Searchbar } from 'ionic-angular';
import { DashboardService } from '../dashboard/dashboard.services';
import { profileService, User } from '../perfil/profile.services';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
  providers: [DashboardService, profileService]
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
     private Tab1Service: DashboardService,
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
