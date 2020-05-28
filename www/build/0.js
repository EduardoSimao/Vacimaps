webpackJsonp([0],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, navParams, formBuilder, profileService, toast, http, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.profileService = profileService;
        this.toast = toast;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.profileService.getUser().subscribe(function (usuario) {
            _this.email = usuario.email;
        });
        this.formulario = this.formBuilder.group({
            validarSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            validarNovaSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            validarConfSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesPage');
    };
    ConfiguracoesPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ConfiguracoesPage.prototype.doPut = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/change_password";
        this.datajson = {
            senha_atual: this.senhaAtual,
            nova_senha: this.novasenha,
        };
        console.log(this.datajson);
        if (this.novasenha == this.confsenha) {
            this.http
                .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Senha alterada com sucesso!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                    _this.closeModal();
                }
                else {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
            });
        }
        else {
            this.toast.create({ message: "Senhas Diferentes!", duration: 3000, position: 'botton' }).present();
        }
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/configuracoes/configuracoes.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  body{ \n    left: 0%; \n    /*background-color: white; */\n    font-family: \'Souliyo-Unicode\', sans-serif;\n  }\n  h1{\n    color: #47525E;\n    text-align: center;\n    font-size: 12pt;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.5px;\n    margin-top: 43px;\n    margin-left: 2px;\n  }\n  img{\n    width: 35px;\n    height: 32px;\n    margin-top: 10%;\n  }\n  .primeira-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n  #div-config{\n    width: 104%;\n    height: 38%;\n    margin-top: 27px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  p{\n    font-weight: 600;\n    font-size: 12px;\n    color: #47525E;\n    margin-bottom: 1px;\n    text-transform: uppercase;\n    padding-left: 20px;\n  }\n  #perfil{\n    padding-top: 5px;\n    padding-left: 19px;\n  }\n  #senha{\n    margin-top: -14px;\n  }\n  button{\n    width: 110px;\n    height: 47px;\n    font-weight: 900;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    text-transform: uppercase;\n  }\n  .botao-salvar{\n    background-color: #53CED3;\n    color: black;\n    margin-top: 50px;\n  }\n  .botao-cancelar{\n    color: white;\n    background-color: #53D35B;\n    margin-top: 26px;\n    width: 100px;\n    height: 40px;\n  }\n  ion-icon {\n    font-size: 160px; \n    vertical-align: auto;\n  }\n  a{\n    color: gray;\n  }\n  ion-item{\n    border: 1px solid #53CED3;\n    border-radius: 50pt;\n    width: 200pt;\n    height: 30pt;\n    background-color: rgba(233, 233, 233, 0.62);\n  }\n  input::placeholder{\n    width: 270px; text-align: center; color: white; font-size: 12px;\n  }\n  .input-email{\n    text-align: center; font-size: 12px; color: #E7E6E6; top: -23px; padding: 2px; width: 104%; left: -7px; margin-top: 17px;\n  }\n  .campos{\n    margin-bottom: 36px;\n  }\n  .botoes{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n</style>\n\n<ion-content>\n  <body>\n    <div class="primeira-div">\n      <img src="assets/imgs/logo.png">\n      <h1>VACIMAPS</h1>\n    </div>\n\n    <h1>Alterar senha</h1>\n        \n        <div id="div-config">\n          <div class="campos">\n            <p id="perfil">Senha atual</p>\n            <ion-item>\n              <ion-input type="password" [(ngModel)]="senhaAtual" [formControl]="formulario.controls[\'validarSenha\']" ></ion-input>\n            </ion-item>\n          </div>\n\n          <div class="campos">\n            <p id="senha">Nova senha</p>\n            <ion-item>   \n              <ion-input type="password" [(ngModel)]="novasenha" [formControl]="formulario.controls[\'validarNovaSenha\']" ></ion-input>\n            </ion-item>\n          </div>\n\n          <div class="campos">\n            <p id="senha">Repita a senha</p>\n            <ion-item>      \n              <ion-input type="password" [(ngModel)]="confsenha" [formControl]="formulario.controls[\'validarConfSenha\']" ></ion-input>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class="botoes">\n          <button ion-button class="botao-salvar" (click)="doPut()" [disabled]="!formulario.valid" color="light">Alterar</button>\n          <button ion-button class="botao-cancelar" (click)="closeModal()">Cancelar</button>\n        </div>\n  </body>\n</ion-content>'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/configuracoes/configuracoes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["a" /* profileService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_services__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuracoes_configuracoes__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, toast, http, appCtrl, viewCtrl, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.http = http;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.profileService = profileService;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.profileService.getUser().subscribe(function (usuario) {
            _this.usuario = usuario;
            _this.nome = usuario.nome;
            _this.dt_nascimento = new Date(usuario.dt_nascimento).toISOString();
        });
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    ModalPage.prototype.alterar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__configuracoes_configuracoes__["a" /* ConfiguracoesPage */]);
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.save = function () {
        var _this = this;
        this.datajson = {
            nome: this.nome,
            dt_nascimento: this.dt_nascimento,
        };
        console.log(this.datajson);
        var url = this.API_URL + "/usuario";
        this.http
            .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Usuário alterado com sucesso!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                _this.closeModal();
            }
            else {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
        });
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal/modal.html"*/'<style>\n    @font-face {\n      font-family: Souliyo-Unicode;\n      src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n    }\n    ion-header{\n      background-color: white;\n      background-size: cover;\n      width: 100%;\n      height: 50px;\n      display: flex;\n      flex-direction: row;\n    }\n    .menu{\n      background: transparent;\n      box-shadow: none;\n      height: 49px;\n      padding: 2px;\n    }\n    #label-menu{\n      font-size: 11px;\n      text-transform: capitalize;\n      margin-left: -8px;\n      color: #FFFFFF;\n    }\n    body{\n      top: 0; \n      font-family: \'Souliyo-Unicode\', sans-serif;\n    }\n    ion-card{\n      height: 100%;\n      width: 100%;\n      margin-left: 0;\n    }\n    ion-card-content{\n      padding: 60px;\n      padding-top: 45px;\n    }\n    h1{\n      text-align: center;\n      color: #47525E;\n      font-size: 13pt;\n      font-weight: 900;\n      margin-top: 16px;\n      margin-left: 10px;\n    }\n    h3{\n      text-transform: uppercase;\n      color: rgba(71, 82, 94, 0.53);\n      font-size: 12px;\n      font-weight: 900;\n      text-align: center;\n    }\n    #nome{\n      font-size: 10px;\n      font-weight: 800;\n      font-style: normal;\n      line-height: normal;\n      color: #47525E;\n      margin-top: 8px;\n      margin-left: 18px;\n      text-transform: uppercase;\n    }\n    #data{\n      font-size: 10px;\n      font-weight: 800;\n      font-style: normal;\n      line-height: normal;\n      color: #47525E;\n      margin-top: 11px;\n      margin-left: 18px;\n      text-transform: uppercase;\n    }\n    ion-item{\n      background-color: white; color: black; align-content: center; width:210px; box-shadow: none; padding-left: 0;\n      border-bottom-color: transparent !important;\n      -webkit-box-shadow: transparent !important;\n      box-shadow: none !important;\n    }\n    ion-datetime{\n      color: black; font-size: 12px; top: 3px;\n    }\n    ion-datetime--padding-start{\n      padding: 0px;\n    }\n    a{\n      color: gray;\n    }\n    .campos-perfil{\n      color: black;\n      font-size: 14px;\n      font-weight: 900;\n      width: 100%;\n      align-content: center;\n      padding: 0;\n    }\n    .item-inner--border-color{\n      box-shadow: none !important;\n      -webkit-box-shadow: none !important;\n    }\n    .botao-alterar{\n      position: absolute;\n      left: 258px;\n      border-radius: 7px;\n      top: 17px;\n    }\n    .icone-alterar{\n      font-size: 27px;\n      color: #53CED3;\n    }\n    .label-md{\n      margin: 0 !important;\n    }\n    .botoes-final{\n      margin-top: 8%;\n      display: flex;\n      flex-direction: row;\n    }\n    .botao-final{\n      color: #47525E;\n      font-size: 10px;\n      cursor: pointer;\n      flex-direction: column;\n      width: 100px;\n      height: 40px;\n    }\n    .botao-sair{\n      margin-left: 65px;\n    }\n    .text-input{\n      margin: 0;\n    }\n    .botao-salvar{\n      background-color: #53CED3;\n      color: black;\n      margin-top: 50px;\n      border-radius: 50pt;\n      width: 100px;\n      height: 40px;\n      font-weight: 800;\n      left: 30%;\n      box-shadow: none;\n    }\n</style>\n\n  <body>\n    <ion-header>\n      <button class="menu" (click)="vacinas()" ion-button>\n        <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n          <ion-icon name="ios-map-outline"></ion-icon>\n        </ion-avatar>\n      </button>\n\n      <button class="menu" (click)="dash()" ion-button>\n        <ion-avatar style="font-size: 25px; background-color: #53CED3; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n          <ion-icon name="ios-medkit-outline"></ion-icon>\n        </ion-avatar>\n      </button>\n  \n      <h1>Olá, {{ nome }}!</h1>\n  \n      <ion-avatar class="menu" style="font-size: 35px; color: black; margin-bottom: 6px; right: 5px; position: absolute;">\n        <ion-icon name="ios-contact"></ion-icon>\n      </ion-avatar>\n    </ion-header>\n    \n    <ion-card>\n      <ion-card-content>\n        <h3>Meu Perfil</h3>\n        <ion-row>\n          <ion-col text-center>\n            <ion-avatar style="align-content: center; font-size: 160px;">\n              <ion-icon name="ios-contact"></ion-icon>\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n            \n        <div id="div-config">\n          <ion-label id ="nome">Nome</ion-label>\n          <ion-item>\n            <ion-input class="campos-perfil" type="text" name="Nome" [(ngModel)]="nome"></ion-input>\n          </ion-item>\n\n          <ion-row text-right [hidden]= hiddenCardVacinas>\n            <ion-col>\n              <button class="botao-alterar" ion-button icon-left clear small (click)="editContact(vacina);">\n                <ion-icon class="icone-alterar" name="md-create"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n\n          <ion-label id ="nome">E-mail</ion-label>\n          <ion-item>\n            <ion-input class="campos-perfil" type="email" name="E-mail" [(ngModel)]="email"></ion-input>\n          </ion-item>\n\n          <ion-label id="data">Data de Nascimento</ion-label>\n          <ion-item>\n            <ion-datetime class="campos-perfil" display-format="DD/M/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n          </ion-item>\n\n          <div class="botoes-final">\n            <a class="botao-final" (click)="alterar()">Alterar senha</a>\n            <a class="botao-sair botao-final" (click)="Sair()">Sair da conta</a>\n          </div>\n\n          <button class="botao-salvar" ion-button block (click)="save()">Salvar</button>\n\n        </div>\n      </ion-card-content> \n    </ion-card>\n  </body>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal/modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__profile_services__["a" /* profileService */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map