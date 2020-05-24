webpackJsonp([0],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(301);
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-configuracoes',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\configuracoes\configuracoes.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n  body{ \n\n    left: 0%; \n\n    /*background-color: white; */\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n  }\n\n  h1{\n\n    color: #47525E;\n\n    text-align: center;\n\n    font-size: 12pt;\n\n    font-weight: 900;\n\n    font-style: normal;\n\n    line-height: normal;\n\n    letter-spacing: 0.5px;\n\n    margin-top: 43px;\n\n    margin-left: 2px;\n\n  }\n\n  img{\n\n    width: 35px;\n\n    height: 32px;\n\n    margin-top: 10%;\n\n  }\n\n  .primeira-div{\n\n    display: flex;\n\n    flex-direction: row;\n\n    justify-content: center;\n\n  }\n\n  #div-config{\n\n    width: 104%;\n\n    height: 38%;\n\n    margin-top: 27px;\n\n    display: flex;\n\n    flex-direction: column;\n\n    align-items: center;\n\n  }\n\n  p{\n\n    font-weight: 600;\n\n    font-size: 12px;\n\n    color: #47525E;\n\n    margin-bottom: 1px;\n\n    text-transform: uppercase;\n\n    padding-left: 20px;\n\n  }\n\n  #perfil{\n\n    padding-top: 5px;\n\n    padding-left: 19px;\n\n  }\n\n  #senha{\n\n    margin-top: -14px;\n\n  }\n\n  button{\n\n    width: 110px;\n\n    height: 47px;\n\n    font-weight: 900;\n\n    border-radius: 50pt;\n\n    font-family: roboto;\n\n    font-size: 15px;\n\n    text-transform: uppercase;\n\n  }\n\n  .botao-salvar{\n\n    background-color: #53CED3;\n\n    color: black;\n\n    margin-top: 50px;\n\n  }\n\n  .botao-cancelar{\n\n    color: white;\n\n    background-color: #53D35B;\n\n    margin-top: 26px;\n\n    width: 100px;\n\n    height: 40px;\n\n  }\n\n  ion-icon {\n\n    font-size: 160px; \n\n    vertical-align: auto;\n\n  }\n\n  a{\n\n    color: gray;\n\n  }\n\n  ion-item{\n\n    border: 1px solid #53CED3;\n\n    border-radius: 50pt;\n\n    width: 200pt;\n\n    height: 30pt;\n\n    background-color: rgba(233, 233, 233, 0.62);\n\n  }\n\n  input::placeholder{\n\n    width: 270px; text-align: center; color: white; font-size: 12px;\n\n  }\n\n  .input-email{\n\n    text-align: center; font-size: 12px; color: #E7E6E6; top: -23px; padding: 2px; width: 104%; left: -7px; margin-top: 17px;\n\n  }\n\n  .campos{\n\n    margin-bottom: 36px;\n\n  }\n\n  .botoes{\n\n    display: flex;\n\n    flex-direction: column;\n\n    align-items: center;\n\n  }\n\n</style>\n\n\n\n<ion-content>\n\n  <body>\n\n    <div class="primeira-div">\n\n      <img src="assets/imgs/logo.png">\n\n      <h1>VACIMAPS</h1>\n\n    </div>\n\n\n\n    <h1>Alterar senha</h1>\n\n        \n\n        <div id="div-config">\n\n          <div class="campos">\n\n            <p id="perfil">Senha atual</p>\n\n            <ion-item>\n\n              <ion-input type="password" [(ngModel)]="senhaAtual" [formControl]="formulario.controls[\'validarSenha\']" ></ion-input>\n\n            </ion-item>\n\n          </div>\n\n\n\n          <div class="campos">\n\n            <p id="senha">Nova senha</p>\n\n            <ion-item>   \n\n              <ion-input type="password" [(ngModel)]="novasenha" [formControl]="formulario.controls[\'validarNovaSenha\']" ></ion-input>\n\n            </ion-item>\n\n          </div>\n\n\n\n          <div class="campos">\n\n            <p id="senha">Repita a senha</p>\n\n            <ion-item>      \n\n              <ion-input type="password" [(ngModel)]="confsenha" [formControl]="formulario.controls[\'validarConfSenha\']" ></ion-input>\n\n            </ion-item>\n\n          </div>\n\n        </div>\n\n\n\n        <div class="botoes">\n\n          <button ion-button class="botao-salvar" (click)="doPut()" [disabled]="!formulario.valid" color="light">Alterar</button>\n\n          <button ion-button class="botao-cancelar" (click)="closeModal()">Cancelar</button>\n\n        </div>\n\n  </body>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\configuracoes\configuracoes.html"*/,
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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_services__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuracoes_configuracoes__ = __webpack_require__(299);
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
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\modal\modal.html"*/'<style>\n\n    @font-face {\n\n      font-family: Souliyo-Unicode;\n\n      src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n    }\n\n    body{\n\n      top: 6%; \n\n      font-family: \'Souliyo-Unicode\', sans-serif;\n\n    }\n\n    ion-card{\n\n      height: 100%;\n\n      width: 100%;\n\n      margin-left: 0;\n\n    }\n\n    ion-card-content{\n\n      padding: 60px;\n\n      padding-top: 0;\n\n    }\n\n    h1{\n\n      text-transform: uppercase;\n\n      color: rgba(71, 82, 94, 0.53);\n\n      font-size: 12px;\n\n      font-weight: 900;\n\n      text-align: center;\n\n    }\n\n    #nome{\n\n      font-size: 10px;\n\n      font-weight: 800;\n\n      font-style: normal;\n\n      line-height: normal;\n\n      color: #47525E;\n\n      margin-top: 8px;\n\n      margin-left: 18px;\n\n      text-transform: uppercase;\n\n    }\n\n    #data{\n\n      font-size: 10px;\n\n      font-weight: 800;\n\n      font-style: normal;\n\n      line-height: normal;\n\n      color: #47525E;\n\n      margin-top: 11px;\n\n      margin-left: 18px;\n\n      text-transform: uppercase;\n\n    }\n\n    ion-avatar{\n\n      width: 25px; height: 25px; align-content: center;\n\n    }\n\n    ion-item{\n\n      background-color: white; color: black; align-content: center; width:210px; box-shadow: none; padding-left: 0;\n\n    }\n\n    ion-datetime{\n\n      color: black; font-size: 12px; top: 3px;\n\n    }\n\n    ion-datetime--padding-start{\n\n      padding: 0px;\n\n    }\n\n    a{\n\n      color: gray;\n\n    }\n\n    ion-icon {\n\n      font-size: 160px; vertical-align: auto;\n\n    }\n\n    .campos-perfil{\n\n      color: black;\n\n      font-size: 14px;\n\n      font-weight: 900;\n\n      width: 100%;\n\n      align-content: center;\n\n      padding: 0;\n\n    }\n\n    .item-inner--border-color{\n\n      box-shadow: none !important;\n\n      -webkit-box-shadow: none !important;\n\n    }\n\n    .botao-alterar{\n\n      position: absolute;\n\n      left: 258px;\n\n      border-radius: 7px;\n\n      top: 17px;\n\n    }\n\n    .icone-alterar{\n\n      font-size: 27px;\n\n      color: #53CED3;\n\n    }\n\n    .label-md{\n\n      margin: 0 !important;\n\n    }\n\n    .botoes-final{\n\n      margin-top: 8%;\n\n      display: flex;\n\n      flex-direction: row;\n\n    }\n\n    .botao-final{\n\n      color: #47525E;\n\n      font-size: 10px;\n\n      cursor: pointer;\n\n      flex-direction: column;\n\n      width: 100px;\n\n      height: 40px;\n\n    }\n\n    .botao-sair{\n\n      margin-left: 65px;\n\n    }\n\n    .text-input{\n\n      margin: 0;\n\n    }\n\n    .searchbar-md{\n\n      padding: 6px 55px;\n\n      border-radius: 50pt;\n\n      font-size: 9pt;\n\n      line-height: 3rem;\n\n    }\n\n    .botao-salvar{\n\n      background-color: #53CED3;\n\n      color: black;\n\n      margin-top: 50px;\n\n      border-radius: 50pt;\n\n      width: 100px;\n\n      height: 40px;\n\n      font-weight: 800;\n\n      left: 30%;\n\n      box-shadow: none;\n\n    }\n\n    .item-inner{\n\n      border-bottom-color: white !important;\n\n      box-shadow: white !important;\n\n      -webkit-box-shadow: white !important;\n\n    }\n\n  </style>\n\n\n\n  <body>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <a (click)="closeModal()"> <ion-icon name="close" style="font-size: 20px; float: right; padding-top: 0px; padding-right: 0px;"></ion-icon></a>\n\n\n\n        <h1>Meu Perfil</h1>\n\n        <ion-row>\n\n          <ion-col text-center>\n\n            <ion-icon name="ios-contact"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n            \n\n        <div id="div-config">\n\n          <ion-label id ="nome">Nome</ion-label>\n\n          <ion-item>\n\n            <ion-input class="campos-perfil" type="text" name="Nome" [(ngModel)]="nome"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-row text-right [hidden]= hiddenCardVacinas>\n\n            <ion-col>\n\n              <button class="botao-alterar" ion-button icon-left clear small (click)="editContact(vacina);">\n\n                <ion-icon class="icone-alterar" name="md-create"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-label id ="nome">E-mail</ion-label>\n\n          <ion-item>\n\n            <ion-input class="campos-perfil" type="email" name="E-mail" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-label id="data">Data de Nascimento</ion-label>\n\n          <ion-item>\n\n            <ion-datetime class="campos-perfil" display-format="DD/M/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n\n          </ion-item>\n\n\n\n          <div class="botoes-final">\n\n            <a class="botao-final" (click)="alterar()">Alterar senha</a>\n\n            <a class="botao-sair botao-final" (click)="sair()">Sair da conta</a>\n\n          </div>\n\n\n\n          <button class="botao-salvar" ion-button block (click)="save()">Salvar</button>\n\n\n\n        </div>\n\n      </ion-card-content> \n\n    </ion-card>\n\n  </body>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\modal\modal.html"*/,
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