import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { IonicPage, NavController, NavParams, ToastController, App, ModalController } from 'ionic-angular';
import { profileService, User } from '../perfil/profile.services';
import { VacinaService } from '../vacinas/vacina.services';
import { DashboardPage } from '../dashboard/dashboard';
import { PerfilPage } from '../perfil/perfil';

@IonicPage()
@Component({
  selector: 'page-vacinas',
  templateUrl: 'vacinas.html',
  providers: [profileService, VacinaService],
})
export class VacinasPage {
  usuario: User;
  vacinas;
  token;
  hiddenVacinas: Boolean;
  hiddenCardVacinas: Boolean;
  hiddenFormVacinas: Boolean;
  user_vacinas;
  private formulario: FormGroup;
  datajson;

  vacina: string;
  vacinaSelect: any;
  data: string;
  lote: string;
  id_usuario_vacina: string;

  nome_vac: any[];
  nome: string;

  private API_URL = 'https://vacimaps-app.herokuapp.com'

  constructor(public navCtrl: NavController,
    private toast: ToastController, 
    private profileService: profileService,
    private http: HttpClient,
    private modalCtrl: ModalController,
    private VacinaService: VacinaService,
    private formBuilder: FormBuilder,
    public appCtrl: App, 
    public navParams: NavParams) {
      this.formulario = this.formBuilder.group({
        validarVacina: ['', Validators.required],
        validarData: ['', Validators.required],
        validarLote: ['', Validators.required],
      });

      this.profileService.getUser().subscribe((usuario: User) => {
        this.nome = usuario.nome;
      });
    
     this.getVacinas();
    
     this.VacinaService.getVacinas().subscribe((vacinas) => {
      this.vacinaSelect = vacinas;
      this.nome_vac = this.vacinaSelect;
    });

     this.token = JSON.parse(localStorage.getItem('token'));

     this.hiddenVacinas = true;
     this.hiddenFormVacinas = true;
     this.hiddenCardVacinas = false;

  }

  /* Funçōes para alterar as páginas */
  dash(){
    this.navCtrl.push(DashboardPage);
  }

  perfil(){
    this.navCtrl.push(PerfilPage);
  }

  /* Função que exibe as vacinas cadastradas pelo usuario */
  getVacinas(){
    this.profileService.getUser().subscribe((usuario: User) => {
      
      this.usuario = usuario;
      if(usuario.vacinas != 'Nenhuma vacina cadastrada!'){
        this.vacinas = usuario.vacinas;
        this.user_vacinas = this.vacinas;
      }

     });
  }

  /* Função que abre o modal para adicionar/editar */
  public ModalVacina () {
    var modalPage = this.modalCtrl.create ('ModalNovasVacinasPage'); 
    modalPage.onDidDismiss(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });modalPage.present ();
    //this.hiddenFormVacinas = false;
  }

  /* Função que fecha o modal */
    public closeModal(){
    this.nome_vac = [];
    this.data = "";
    this.lote = '';    
    this.id_usuario_vacina = ''; 
    this.vacina = '';
    this.hiddenFormVacinas = true;
    this.hiddenCardVacinas = false;
  
  }

  /* Função que deleta as vacinas cadastradas */
  doDELETE(vacina) {
    console.log("DELETE");
    let url = `${this.API_URL}/usuario/vacina/${vacina.id}`;
    this.http
      .delete(url, {headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => {
        if(res['Mensagem'] == 'Vacina deletada com sucesso!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()
          
        }
      })          
  }

  getVacina(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    let val

    try{
      val = ev.target.value;
               
      if(val.length > 2){
        this.hiddenVacinas = false;
      }else{
        this.hiddenVacinas = true;
      }
    }catch{
      val = "a";
      this.hiddenVacinas = true;
    }
     
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.vacinas = this.vacinas.filter((vacina) => {        
        return (
          vacina.vacina.toLowerCase().indexOf(val.toLowerCase()) > -1 
      );
      })
    }
  }
  
  /* Função para editar vacina */
  editContact(vacina) {
    console.log(vacina)
    this.nome_vac = vacina.nome_vacina;
    this.data = new Date(vacina.data_vacina).toISOString();
    this.lote = vacina.local;    
    this.id_usuario_vacina = vacina.id; 
    this.vacina = vacina.id_vacina;
    this.hiddenFormVacinas = false;
    this.hiddenCardVacinas = true;
  }

  initializeItems() {
    this.vacinas = this.user_vacinas;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VacinasPage');
  }

}
