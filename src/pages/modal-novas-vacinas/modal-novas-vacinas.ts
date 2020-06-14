import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VacinaService } from '../vacinas/vacina.services';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-modal-novas-vacinas',
  templateUrl: 'modal-novas-vacinas.html',
  providers: [VacinaService],
})
export class ModalNovasVacinasPage {
  datajson;
  vacinas;
  token;
  hiddenVacinas: Boolean;
  hiddenCardVacinas: Boolean;
  hiddenFormVacinas: Boolean;
  private formulario: FormGroup;

  id_vacina: string;
  vacinaSelect: any;
  data: string;
  lote: string;
  id_usuario_vacina: string;

  nome_vac: any[];
  nome: string;

  private API_URL = 'https://vacimaps-app.herokuapp.com'

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl : ViewController,
    public modalController: ModalController,
    private toast: ToastController, 
    private VacinaService: VacinaService,
    private formBuilder: FormBuilder,
    private http: HttpClient) {
      this.formulario = this.formBuilder.group({
        validarVacina: ['', Validators.required],
        validarData: ['', Validators.required],
        vaidarLote: ['', Validators.required],
      });

      this.VacinaService.getVacinas().subscribe((vacinas) => {
        this.vacinaSelect = vacinas;
        this.nome_vac = this.vacinaSelect;
      });

      this.id_usuario_vacina = navParams.get('id_usuario_vacina');
      this.id_vacina = navParams.get('id_usuario_vacina');
      this.lote = navParams.get('lote');
      this.nome_vac = navParams.get('nome_vacina');
      this.id_vacina = navParams.get('id_vacina');
      this.data = navParams.get('data_vacina');

      this.token = JSON.parse(localStorage.getItem('token'));
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNovasVacinasPage');
  }

/* Função que fecha modal */
  public closeModal(){
    this.navCtrl.pop();
  } 

  /* Função que edita vacinas */
  doPOST() {
    if(this.id_usuario_vacina){
      console.log("PUT");
      this.datajson ={ 
        id_vacina: this.id_vacina, 
        data_vacina: this.data, 
        ds_local_vacina: this.lote,
      }
      let url = `${this.API_URL}/usuario/vacina/${this.id_usuario_vacina}`;
      this.http
      .put(url, this.datajson, {headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => {
        if(res['Mensagem'] == 'Vacina alterada com sucesso!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
          this.navCtrl.pop();
        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()     
        }
      })  
        
    }else{
    console.log("POST");
    let url = `${this.API_URL}/usuario/vacina`;
    this.datajson ={ 
      id_vacina: this.id_vacina, 
      data_vacina: this.data, 
      lote: this.lote,
    }
    console.log(this.datajson);
    this.http
      .post(url, this.datajson, {headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => {
        if(res['Mensagem'] == 'Erro ao cadastrar vacina!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
       
        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()     
          this.navCtrl.pop();
        }
      })   
    }    
  }

}