webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab1_tab1__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab2_tab2__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configuracoes_configuracoes__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, toast, http, appCtrl, modalController, viewCtrl, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.http = http;
        this.appCtrl = appCtrl;
        this.modalController = modalController;
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
    ModalPage_1 = ModalPage;
    ModalPage.prototype.dash = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tab1_tab1__["a" /* Tab1Page */]);
    };
    ModalPage.prototype.vacinas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tab2_tab2__["a" /* Tab2Page */]);
    };
    ModalPage.prototype.alterar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__configuracoes_configuracoes__["a" /* ConfiguracoesPage */]);
    };
    ModalPage.prototype.perfil = function () {
        this.navCtrl.push(ModalPage_1);
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
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
            .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Usuário alterado com sucesso!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
        });
    };
    ModalPage.prototype.Sair = function () {
        localStorage.removeItem('token');
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ModalPage = ModalPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal/modal.html"*/'<!-- NOVO PERFIL -->\n<style>\n    @font-face {\n      font-family: Souliyo-Unicode;\n      src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n    }\n    ion-header{\n      background-color: white;\n      background-size: cover;\n      width: 100%;\n      height: 50px;\n      display: flex;\n      flex-direction: row;\n    }\n    .menu{\n      background: transparent;\n      box-shadow: none;\n      height: 49px;\n      padding: 2px;\n    }\n    #label-menu{\n      font-size: 11px;\n      text-transform: capitalize;\n      margin-left: -8px;\n      color: #FFFFFF;\n    }\n    body{\n      top: 0; \n      font-family: \'Souliyo-Unicode\', sans-serif;\n    }\n    ion-card{\n      height: 100%;\n      width: 100%;\n      margin-left: 0;\n    }\n    ion-card-content{\n      padding: 60px;\n      padding-top: 45px;\n    }\n    h1{\n      text-align: center;\n      color: #47525E;\n      font-size: 13pt;\n      font-weight: 900;\n      margin-top: 16px;\n      margin-left: 10px;\n    }\n    h3{\n      text-transform: uppercase;\n      color: rgba(71, 82, 94, 0.53);\n      font-size: 12px;\n      font-weight: 900;\n      text-align: center;\n    }\n    #nome{\n      font-size: 10px;\n      font-weight: 800;\n      font-style: normal;\n      line-height: normal;\n      color: #47525E;\n      margin-top: 8px;\n      margin-left: 18px;\n      text-transform: uppercase;\n    }\n    #data{\n      font-size: 10px;\n      font-weight: 800;\n      font-style: normal;\n      line-height: normal;\n      color: #47525E;\n      margin-top: 11px;\n      margin-left: 18px;\n      text-transform: uppercase;\n    }\n    ion-item{\n      background-color: white; color: black; align-content: center; width:210px; box-shadow: none; padding-left: 0;\n      border-bottom-color: transparent !important;\n      -webkit-box-shadow: transparent !important;\n      box-shadow: none !important;\n    }\n    ion-datetime{\n      color: black; font-size: 12px; top: 3px;\n    }\n    ion-datetime--padding-start{\n      padding: 0px;\n    }\n    a{\n      color: gray;\n    }\n    .campos-perfil{\n      color: black;\n      font-size: 14px;\n      font-weight: 900;\n      width: 100%;\n      align-content: center;\n      padding: 0;\n    }\n    .item-inner--border-color{\n      box-shadow: none !important;\n      -webkit-box-shadow: none !important;\n    }\n    .botao-alterar{\n      position: absolute;\n      left: 258px;\n      border-radius: 7px;\n      top: 17px;\n    }\n    .icone-alterar{\n      font-size: 27px;\n      color: #53CED3;\n    }\n    .label-md{\n      margin: 0 !important;\n    }\n    .botoes-final{\n      margin-top: 8%;\n      display: flex;\n      flex-direction: row;\n    }\n    .botao-final{\n      color: #47525E;\n      font-size: 10px;\n      cursor: pointer;\n      flex-direction: column;\n      width: 100px;\n      height: 40px;\n    }\n    .botao-sair{\n      margin-left: 65px;\n    }\n    .text-input{\n      margin: 0;\n    }\n    .botao-salvar{\n      background-color: #53CED3;\n      color: black;\n      margin-top: 50px;\n      border-radius: 50pt;\n      width: 100px;\n      height: 40px;\n      font-weight: 800;\n      left: 30%;\n      box-shadow: none;\n    }\n</style>\n\n  <body>\n    <ion-header>\n      <button class="menu" (click)="vacinas()" ion-button>\n        <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n          <ion-icon name="ios-map-outline"></ion-icon>\n        </ion-avatar>\n      </button>\n\n      <button class="menu" (click)="dash()" ion-button>\n        <ion-avatar style="font-size: 25px; background-color: #53CED3; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n          <ion-icon name="ios-medkit-outline"></ion-icon>\n        </ion-avatar>\n      </button>\n  \n      <h1>Olá, {{ nome }}!</h1>\n  \n      <ion-avatar class="menu" (click)="perfil()" style="font-size: 35px; color: black; margin-bottom: 6px; right: 5px; position: absolute;">\n        <ion-icon name="ios-contact"></ion-icon>\n      </ion-avatar>\n    </ion-header>\n    \n    <ion-card>\n      <ion-card-content>\n        <h3>Meu Perfil</h3>\n        <ion-row>\n          <ion-col text-center>\n            <ion-avatar style="align-content: center; font-size: 160px;">\n              <ion-icon name="ios-contact"></ion-icon>\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n            \n        <div id="div-config">\n          <ion-label id ="nome">Nome</ion-label>\n          <ion-item>\n            <ion-input class="campos-perfil" type="text" name="Nome" [(ngModel)]="nome"></ion-input>\n          </ion-item>\n\n          <ion-row text-right [hidden]= hiddenCardVacinas>\n            <ion-col>\n              <button class="botao-alterar" ion-button icon-left clear small (click)="editContact(vacina);">\n                <ion-icon class="icone-alterar" name="md-create"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n\n          <ion-label id ="nome">E-mail</ion-label>\n          <ion-item>\n            <ion-input class="campos-perfil" type="email" name="E-mail" [(ngModel)]="email"></ion-input>\n          </ion-item>\n\n          <ion-label id="data">Data de Nascimento</ion-label>\n          <ion-item>\n            <ion-datetime class="campos-perfil" display-format="DD/M/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n          </ion-item>\n\n          <div class="botoes-final">\n            <a class="botao-final" (click)="alterar()">Alterar senha</a>\n            <a class="botao-sair botao-final" (click)="Sair()">Sair da conta</a>\n          </div>\n\n          <button class="botao-salvar" ion-button block (click)="save()">Salvar</button>\n\n        </div>\n      </ion-card-content> \n    </ion-card>\n  </body>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal/modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */]) === "function" && _h || Object])
    ], ModalPage);
    return ModalPage;
    var ModalPage_1, _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		162
	],
	"../pages/cidade-modal/cidade-modal.module": [
		301,
		4
	],
	"../pages/configuracoes/configuracoes.module": [
		298,
		14
	],
	"../pages/dashboard/dashboard.module": [
		167
	],
	"../pages/esqSenha/esqSenha.module": [
		166
	],
	"../pages/modal-novas-vacinas/modal-novas-vacinas.module": [
		299,
		3
	],
	"../pages/modal/modal.module": [
		300
	],
	"../pages/perfil/perfil.module": [
		305,
		2
	],
	"../pages/popover/popover.module": [
		168
	],
	"../pages/redefinir-senha/redefinir-senha.module": [
		169
	],
	"../pages/tab1/tab1.module": [
		172
	],
	"../pages/tab2/tab2.module": [
		171
	],
	"../pages/tabs/tabs.module": [
		170
	],
	"../pages/vacina-modal/vacina-modal.module": [
		302,
		0
	],
	"../pages/vacinas/vacinas.module": [
		308,
		1
	],
	"../pages/verify-code/verify-code.module": [
		173
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());

//# sourceMappingURL=cadastro.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verify_code_verify_code__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EsqSenhaPage = /** @class */ (function () {
    function EsqSenhaPage(navCtrl, navParams, toast, appCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.appCtrl = appCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validEmail: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    }
    EsqSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EsqSenhaPage');
    };
    EsqSenhaPage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    EsqSenhaPage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    EsqSenhaPage.prototype.forgot_password = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/forgot_password";
        this.datajson = {
            email: this.email,
        };
        console.log(this.datajson);
        this.http
            .post(url, this.datajson)
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Usuario não encontrado!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__verify_code_verify_code__["a" /* VerifyCodePage */]);
            }
        });
    };
    EsqSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-esqSenha',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/esqSenha/esqSenha.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n\n  ion-content{\n    font-family: \'Souliyo-Unicode\', sans-serif;\n    background-color:  white;\n  }\n  h1{\n    color: #47525E;\n    text-align: center;\n    font-size: 12pt;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.5px;\n    margin-top: 43px;\n    margin-left: 2px;\n  }\n  img{\n    width: 35px;\n    height: 32px;\n    margin-top: 10%;\n  }\n  .primeira-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n  h2{\n    text-align: center;\n    margin-top: 29px;\n  }\n  p{\n    color: #47525E; text-align: center; font-size: 10px; font-style: normal; line-height: normal;\n    letter-spacing: 0.9px;\n    font-family: roboto;\n    margin-bottom: -7px;\n    margin-top: 28px;\n  }\n  ion-label{\n    margin-top: 55px;\n    margin-bottom: 0px;\n    margin-left: 17px;\n    color: #47525E;\n  }\n  ion-item{\n    border: 1px solid #53CED3;\n    border-radius: 50pt;\n    width: 100%;\n    height: 30pt;\n    background-color: rgba(233, 233, 233, 0.62);\n  }\n  input::placeholder{\n    text-align: center; color: white; font-size: 12px; width: 270px;\n  }\n  .botoes-form{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .botao-enviar{\n    width: 110px;\n    height: 47px;\n    color: #000000;\n    margin-top: 22px;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    text-transform: uppercase;\n    background-color: #53CED3;\n  }\n  .botao-voltar{\n    width: 100px;\n    height: 40px;\n    color: #fff;\n    margin-top: 26px;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    background-color: #53D35B;\n  }\n   \n</style>\n   \n   <ion-content>\n    <div class="primeira-div">\n        <img src="assets/imgs/logo.png">\n        <h1>VACIMAPS</h1>\n    </div>\n   <form [formGroup]="formulario">\n    <ion-list inset>\n \n\n      <h2>Esqueceu a senha?</h2>\n      <p>Digite seu email cadastrado que enviaremos <br> um link para você recuperar sua senha.</p>\n        <ion-label>E-mail</ion-label>\n        <ion-item>\n            <ion-input type="text" maxlength="75" [(ngModel)]="email" [formControl]="formulario.controls[\'validEmail\']"></ion-input>\n        </ion-item>\n        <br>\n        <div class="botoes-form">\n          <button class="botao-enviar" (click)="forgot_password()" [disabled]="!formulario.valid">Enviar</button>\n          <button ion-button clear class="botao-voltar" (click)="Voltar()">Voltar</button>\n        </div>\n    </ion-list>\n    </form>\n   </ion-content>\n   '/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/esqSenha/esqSenha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], EsqSenhaPage);
    return EsqSenhaPage;
}());

//# sourceMappingURL=esqSenha.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redefinir_senha_redefinir_senha__ = __webpack_require__(81);
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
 * Generated class for the VerifyCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyCodePage = /** @class */ (function () {
    function VerifyCodePage(navCtrl, navParams, toast, appCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.appCtrl = appCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validCodigo: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    VerifyCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyCodePage');
    };
    VerifyCodePage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    VerifyCodePage.prototype.validar_token = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/validar_token";
        this.datajson = {
            token: this.codigo,
        };
        console.log(this.datajson);
        this.http
            .post(url, this.datajson)
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Código inválido!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__redefinir_senha_redefinir_senha__["a" /* RedefinirSenhaPage */], { id: res });
            }
        });
    };
    VerifyCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-verify-code',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/verify-code/verify-code.html"*/'<style>\n  @font-face {\n     font-family: Souliyo-Regular;\n     src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n   }\n \n   ion-content{\n      font-family: \'Souliyo-Unicode\', sans-serif;\n      background: url("assets/imgs/globo.png") no-repeat;\n      background-position: center;\n      background-size: cover;\n   }\n   h1{\n      color: white; padding: 58px 25px 115px 25px; text-align: center; font-size: 40px; font-weight: 100; font-style: normal; line-height: normal;\n      letter-spacing: 0.5px;\n   }\n   p{\n    color: white; text-align: center; font-size: 12px; font-style: normal; line-height: normal;\n    letter-spacing: 0.9px;\n    font-family: roboto;\n   }\n   ion-item{\n    background-color: rgba(255, 255, 255, 0); color: white; align-content: center; width: 270px; margin-left: 30px;\n   }\n   input::placeholder{\n     text-align: center; color: white; font-size: 12px; font-size: 12px; width: 270px;\n   }\n   button{\n     width: 270px; height: 38px; color: #12614C; margin-left: 30px; margin-top: 20px; border-radius: 5px; font-family: roboto; font-size: 16px;\n   }\n   .btn-back{\n     color: white; font-size: 10px; padding-right: 225px; padding-top: 1px;\n   } \n </style>\n \n <ion-content>\n  <button ion-button clear class="btn-back" (click)="Voltar()"><< voltar</button>\n  <h1>VACIMAPS</h1>\n  <form [formGroup]="formulario">\n    <ion-list inset>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="codigo" [formControl]="formulario.controls[\'validCodigo\']"  placeholder="Código"></ion-input>\n        </ion-item>\n        <p>Insira o codigo recebido para realizar a validação</p>\n        <br>\n        <button color="light" (click)="validar_token()" [disabled]="!formulario.valid">Validar</button>\n    </ion-list>\n  </form>\n </ion-content>\n '/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/verify-code/verify-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], VerifyCodePage);
    return VerifyCodePage;
}());

//# sourceMappingURL=verify-code.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, appCtrl, modalCtrl, confCtrl, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.modalCtrl = modalCtrl;
        this.confCtrl = confCtrl;
        this.profileService = profileService;
        this.rootPage = 'TabsPage';
        this.profileService.getUser().subscribe(function (usuario) {
            _this.nome = usuario.nome;
        });
        this.Tab1Service.getCity().subscribe(function (cidades) {
            _this.cidades = cidades;
            _this.cidade = _this.cidades;
        });
        this.hiddenCidades = true;
    }
    DashboardPage.prototype.openModal = function () {
        var perfilPage = this.modalCtrl.create('PerfilPage');
        perfilPage.present();
    };
    DashboardPage.prototype.modalOpen = function () {
        var confPage = this.confCtrl.create('ConfiguracoesPage');
        confPage.present();
    };
    DashboardPage.prototype.vacinas = function () {
        this.navCtrl.push(Tab2Page);
    };
    DashboardPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */]);
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchQuery'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */]) === "function" && _a || Object)
    ], DashboardPage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _b || Object)
    ], DashboardPage.prototype, "nav", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/dashboard/dashboard.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  ion-content{\n    font-family: \'Souliyo-Unicode\', sans-serif;\n    background-color: #97D9DB;\n  }\n  ion-header{\n    background-color: white;\n    background-size: cover;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n  }\n  .menu{\n    background: transparent;\n    box-shadow: none;\n    height: 49px;\n  }\n  #label-menu{\n    font-size: 11px;\n    text-transform: capitalize;\n    margin-left: -8px;\n    color: #FFFFFF;\n  }\n  h1{\n    padding-top: 50px;\n  }\n  ion-img{\n    width: 100%;\n      height: 65%;\n      position: relative;\n      top: 143px;\n      background: transparent;\n  }\n  p{\n    font-size: 9px;\n    color: #FFFFFF;\n    margin-left: 7px;\n    margin-top: 15px;\n  }\n  .list-md {\n    position: absolute;\n    z-index: 10;\n    margin-top: 50px;\n    width: 95%;\n    left: 10px;\n    border: 1px solid rgba(71, 82, 94, 0.13);\n    border-top: none;\n  }\n  .item-md{\n    font-weight: 600 !important;\n    color: #53CED3 !important;\n    padding-right: 16px !important;\n  }\n</style>\n\n  <ion-content padding>\n    <ion-header>\n      <button class="menu"  (click)="vacinas()" ion-button>\n        <ion-avatar style="font-size: 25px; background-color: #53CED3; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n          <ion-icon name="ios-medkit-outline"></ion-icon>\n        </ion-avatar>\n      </button>\n\n      <ion-searchbar placeholder="Digite o seu destino" (ionInput)="getCity($event)" #searchQuery></ion-searchbar>\n      <ion-list [hidden]= hiddenCidades>\n        <button (click)="something(c)" ion-item *ngFor="let c of cidades">\n          <ion-option [value] = "c.nome_cidade">{{ c.nome_cidade }} - {{ c.uf_cidade }}</ion-option>\n        </button>\n      </ion-list> \n\n      <button class="menu" (click)="perfil()" ion-button>\n        <ion-avatar style="font-size: 30px; color: black;">\n          <ion-icon name="ios-contact"></ion-icon>\n        </ion-avatar>\n      </button>\n    </ion-header>\n        <ion-img src="./assets/imgs/Mapa.png"></ion-img>\n  </ion-content>'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/dashboard/dashboard.html"*/,
            providers: [DashboardService, __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__["a" /* profileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__["a" /* profileService */]) === "function" && _h || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqSenhaPageModule", function() { return EsqSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__esqSenha__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EsqSenhaPageModule = /** @class */ (function () {
    function EsqSenhaPageModule() {
    }
    EsqSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__esqSenha__["a" /* EsqSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__esqSenha__["a" /* EsqSenhaPage */]),
            ],
        })
    ], EsqSenhaPageModule);
    return EsqSenhaPageModule;
}());

//# sourceMappingURL=esqSenha.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */]),
            ],
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedefinirSenhaPageModule", function() { return RedefinirSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redefinir_senha__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RedefinirSenhaPageModule = /** @class */ (function () {
    function RedefinirSenhaPageModule() {
    }
    RedefinirSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__redefinir_senha__["a" /* RedefinirSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__redefinir_senha__["a" /* RedefinirSenhaPage */]),
            ],
        })
    ], RedefinirSenhaPageModule);
    return RedefinirSenhaPageModule;
}());

//# sourceMappingURL=redefinir-senha.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */]),
            ],
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());

//# sourceMappingURL=tab2.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */]),
            ],
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());

//# sourceMappingURL=tab1.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyCodePageModule", function() { return VerifyCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_code__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyCodePageModule = /** @class */ (function () {
    function VerifyCodePageModule() {
    }
    VerifyCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify_code__["a" /* VerifyCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify_code__["a" /* VerifyCodePage */]),
            ],
        })
    ], VerifyCodePageModule);
    return VerifyCodePageModule;
}());

//# sourceMappingURL=verify-code.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__ = __webpack_require__(310);
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
            validarSenha: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            validarNovaSenha: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            validarConfSenha: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
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
                .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
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
            providers: [__WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */]) === "function" && _g || Object])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/vacina-modal/vacina.services.ts'");

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redefinir_senha_redefinir_senha__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__esqSenha_esqSenha__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, appCtrl, toast, formBuilder) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.appCtrl = appCtrl;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validEmail: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            vaidSenha: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
        });
    }
    HomePage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    HomePage.prototype.redefinir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__redefinir_senha_redefinir_senha__["a" /* RedefinirSenhaPage */]);
    };
    HomePage.prototype.esqSenha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__esqSenha_esqSenha__["a" /* EsqSenhaPage */]);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/login";
        this.http
            .post(url, { email: this.email, password: this.senha })
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Usuario não encontrado') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else if (res['Mensagem'] == 'Senha incorreta!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                localStorage.setItem('token', JSON.stringify(res));
                _this.toast.create({ message: "Bem vindo!", duration: 3000, position: 'botton' }).present();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/home/home.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  ion-content{\n    font-family: \'Souliyo-Unicode\', sans-serif;\n    background: white;\n  }\n  h1{\n    color: #47525E;\n    text-align: center;\n    font-size: 16pt;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.5px;\n    margin-top: -5px;\n  }\n  ion-item{\n    border: 1px solid #53CED3;\n    border-radius: 50pt;\n    width: 100%;\n    height: 30pt;\n    background-color: rgba(233, 233, 233, 0.62);\n  }\n  input::placeholder{\n    width: 270px; text-align: center; color: white; font-size: 12px;\n  }\n  button{\n    width: 110px;\n    height: 47px;\n    background-color: #53CED3 !important;\n    color: black;\n    font-weight: 900;\n    margin-top: 25px;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    text-transform: uppercase;\n  }\n  .btn-others{\n    color: #47525E;\n    font-size: 10px;\n    cursor: pointer;\n    flex-direction: column;\n    text-align: center;\n    margin-left: 33px;\n    width: 100px;\n    height: 40px;\n  }\n  .botao-novo{\n    margin-left: 65px;\n  }\n  p {\n    color: #ea6153;\n    display: none;\n  }\n  input:invalid + p {\n    display: inline\n  }\n  .div-home{\n    margin-top: 8%;\n    display: flex;\n    flex-direction: row;\n    margin-left: 20px;\n  }\n  ion-list.list.list-md {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .label-home {\n    font-size: 10pt;\n    text-transform: uppercase;\n    margin-bottom: 1px;\n    margin-right: 240px;\n  }\n  .input-cover {\n    border: 1px solid #53CED3;\n    border-radius: 50pt;\n    width: 176pt;\n    height: 30pt;\n    background-color: rgba(233, 233, 233, 0.62);\n  }\n  .senha{\n    margin-top: 17px;\n  }\n  img{\n    width: 100px;\n    height: auto;\n    margin-top: 24%;\n  }\n  .primeira-div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n</style>\n\n\n<ion-content>\n<body>\n  <div class="primeira-div">\n    <img src="assets/imgs/logo.png">\n    <h1>VACIMAPS</h1>\n  </div>\n  <form [formGroup]="formulario">\n    <ion-list inset>\n        <p>Usuário ou senha inválida!</p>\n      <ion-label class="label-home">E-mail</ion-label>\n      <ion-item>\n        <ion-input type="email" maxlength="75" [formControl]="formulario.controls[\'validEmail\']" [(ngModel)]="email"></ion-input>\n      </ion-item>\n    \n      <ion-label class="label-home senha">Senha</ion-label>\n      <ion-item>\n        <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'vaidSenha\']" [(ngModel)]="senha"></ion-input>\n      </ion-item>\n\n      <button (click)=\'login()\' [disabled]="!formulario.valid">Entrar</button>\n    </ion-list>\n  </form>\n  <div class="div-home">\n    <a class="botao-esqueci btn-others" (click)="esqSenha()">Esqueci minha senha</a>\n    <a class="botao-novo btn-others" (click)="cadastrar()">Novo por aqui?</a>\n  </div>\n</body>\n</ion-content> \n\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//.pipe(map(response => { localStorage.setItem('token', JSON.stringify(response)) }))
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_redefinir_senha_redefinir_senha_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_esqSenha_esqSenha_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_verify_code_verify_code_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tab1_tab1_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tab2_tab2_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modal_modal_module__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/esqSenha/esqSenha.module#EsqSenhaPageModule', name: 'EsqSenhaPage', segment: 'esqSenha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-novas-vacinas/modal-novas-vacinas.module#ModalNovasVacinasPageModule', name: 'ModalNovasVacinasPage', segment: 'modal-novas-vacinas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cidade-modal/cidade-modal.module#CidadeModalPageModule', name: 'CidadeModalPage', segment: 'cidade-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redefinir-senha/redefinir-senha.module#RedefinirSenhaPageModule', name: 'RedefinirSenhaPage', segment: 'redefinir-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vacina-modal/vacina-modal.module#VacinaModalPageModule', name: 'VacinaModalPage', segment: 'vacina-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-code/verify-code.module#VerifyCodePageModule', name: 'VerifyCodePage', segment: 'verify-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vacinas/vacinas.module#VacinasPageModule', name: 'VacinasPage', segment: 'vacinas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro_module__["CadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_redefinir_senha_redefinir_senha_module__["RedefinirSenhaPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_esqSenha_esqSenha_module__["EsqSenhaPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_verify_code_verify_code_module__["VerifyCodePageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_tab1_tab1_module__["Tab1PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_tab2_tab2_module__["Tab2PageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover_module__["PopoverPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_modal_module__["ModalPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tab1Service = /** @class */ (function () {
    function Tab1Service(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    Tab1Service.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    Tab1Service.prototype.getCity = function () {
        return this.http.get(this.API_URL + "/cidades", { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'token': this.token.token
            }) });
    };
    Tab1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], Tab1Service);
    return Tab1Service;
}());

//# sourceMappingURL=tab1.services.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'Tab1Page';
        this.tab2Root = 'Tab2Page';
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<style>\nion-tab{\n  color: #12614C;\n}\n</style>\n      \n    <ion-tabs [selectedIndex]="myIndex">\n      <ion-tab [root]="tab1Root" tabTitle="DashBoard - Mapa" tabIcon="customap"></ion-tab>\n      <ion-tab [root]="tab2Root" tabTitle="Minhas vacinas" tabIcon="customedicalbook"></ion-tab>\n    </ion-tabs>\n\n\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(107);
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/perfil/perfil.html"*/'<!-- ANTIGO MODAL -->\n<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  ion-header{\n    background-color: white;\n    background-size: cover;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n  }\n  .menu{\n    background: transparent;\n    box-shadow: none;\n    height: 49px;\n    padding: 2px;\n  }\n  #label-menu{\n    font-size: 11px;\n    text-transform: capitalize;\n    margin-left: -8px;\n    color: #FFFFFF;\n  }\n  body{\n    top: 0; \n    font-family: \'Souliyo-Unicode\', sans-serif;\n  }\n  ion-card{\n    height: 100%;\n    width: 100%;\n    margin-left: 0;\n  }\n  ion-card-content{\n    padding: 60px;\n    padding-top: 45px;\n  }\n  h1{\n    text-align: center;\n    color: #47525E;\n    font-size: 13pt;\n    font-weight: 900;\n    margin-top: 16px;\n    margin-left: 10px;\n  }\n  h3{\n    text-transform: uppercase;\n    color: rgba(71, 82, 94, 0.53);\n    font-size: 12px;\n    font-weight: 900;\n    text-align: center;\n  }\n  #nome{\n    font-size: 10px;\n    font-weight: 800;\n    font-style: normal;\n    line-height: normal;\n    color: #47525E;\n    margin-top: 8px;\n    margin-left: 18px;\n    text-transform: uppercase;\n  }\n  #data{\n    font-size: 10px;\n    font-weight: 800;\n    font-style: normal;\n    line-height: normal;\n    color: #47525E;\n    margin-top: 11px;\n    margin-left: 18px;\n    text-transform: uppercase;\n  }\n  ion-item{\n    background-color: white; color: black; align-content: center; width:210px; box-shadow: none; padding-left: 0;\n    border-bottom-color: transparent !important;\n    -webkit-box-shadow: transparent !important;\n    box-shadow: none !important;\n  }\n  ion-datetime{\n    color: black; font-size: 12px; top: 3px;\n  }\n  ion-datetime--padding-start{\n    padding: 0px;\n  }\n  a{\n    color: gray;\n  }\n  .campos-perfil{\n    color: black;\n    font-size: 14px;\n    font-weight: 900;\n    width: 100%;\n    align-content: center;\n    padding: 0;\n  }\n  .item-inner--border-color{\n    box-shadow: none !important;\n    -webkit-box-shadow: none !important;\n  }\n  .botao-alterar{\n    position: absolute;\n    left: 258px;\n    border-radius: 7px;\n    top: 17px;\n  }\n  .icone-alterar{\n    font-size: 27px;\n    color: #53CED3;\n  }\n  .label-md{\n    margin: 0 !important;\n  }\n  .botoes-final{\n    margin-top: 8%;\n    display: flex;\n    flex-direction: row;\n  }\n  .botao-final{\n    color: #47525E;\n    font-size: 10px;\n    cursor: pointer;\n    flex-direction: column;\n    width: 100px;\n    height: 40px;\n  }\n  .botao-sair{\n    margin-left: 65px;\n  }\n  .text-input{\n    margin: 0;\n  }\n  .botao-salvar{\n    background-color: #53CED3;\n    color: black;\n    margin-top: 50px;\n    border-radius: 50pt;\n    width: 100px;\n    height: 40px;\n    font-weight: 800;\n    left: 30%;\n    box-shadow: none;\n  }\n</style>\n\n<body>\n  <ion-header>\n    <button class="menu" (click)="vacinas()" ion-button>\n      <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n        <ion-icon name="ios-map-outline"></ion-icon>\n      </ion-avatar>\n    </button>\n\n    <button class="menu" (click)="dash()" ion-button>\n      <ion-avatar style="font-size: 25px; background-color: #53CED3; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n        <ion-icon name="ios-medkit-outline"></ion-icon>\n      </ion-avatar>\n    </button>\n\n    <h1>Olá, {{ nome }}!</h1>\n\n    <ion-avatar class="menu" (click)="perfil()" style="font-size: 35px; color: black; margin-bottom: 6px; right: 5px; position: absolute;">\n      <ion-icon name="ios-contact"></ion-icon>\n    </ion-avatar>\n  </ion-header>\n  \n  <ion-card>\n    <ion-card-content>\n      <h3>Meu Perfil</h3>\n      <ion-row>\n        <ion-col text-center>\n          <ion-avatar style="align-content: center; font-size: 160px;">\n            <ion-icon name="ios-contact"></ion-icon>\n          </ion-avatar>\n        </ion-col>\n      </ion-row>\n          \n      <div id="div-config">\n        <ion-label id ="nome">Nome</ion-label>\n        <ion-item>\n          <ion-input class="campos-perfil" type="text" name="Nome" [(ngModel)]="nome"></ion-input>\n        </ion-item>\n\n        <ion-row text-right [hidden]= hiddenCardVacinas>\n          <ion-col>\n            <button class="botao-alterar" ion-button icon-left clear small (click)="editContact(vacina);">\n              <ion-icon class="icone-alterar" name="md-create"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <ion-label id ="nome">E-mail</ion-label>\n        <ion-item>\n          <ion-input class="campos-perfil" type="email" name="E-mail" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n        <ion-label id="data">Data de Nascimento</ion-label>\n        <ion-item>\n          <ion-datetime class="campos-perfil" display-format="DD/M/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n        </ion-item>\n\n        <div class="botoes-final">\n          <a class="botao-final" (click)="alterar()">Alterar senha</a>\n          <a class="botao-sair botao-final" (click)="Sair()">Sair da conta</a>\n        </div>\n\n        <button class="botao-salvar" ion-button block (click)="save()">Salvar</button>\n\n      </div>\n    </ion-card-content> \n  </ion-card>\n</body>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var profileService = /** @class */ (function () {
    function profileService(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    profileService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    profileService.prototype.getUser = function () {
        return this.http.get(this.API_URL + "/usuario", { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'token': this.token.token
            }) });
    };
    profileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], profileService);
    return profileService;
}());

//# sourceMappingURL=profile.services.js.map

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal/profile.services.ts'");

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, appCtrl, toast, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.toast = toast;
        this.http = http;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validNome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            validEmail: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            vaidSenha: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CadastroPage.prototype.doPOST = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/usuario";
        this.datajson = {
            nome: this.nome,
            senha: this.senha,
            email: this.email,
        };
        console.log(this.datajson);
        this.http
            .post(url, this.datajson)
            .subscribe(function (res) {
            if (res['Mensagem'] == 'O email informado já está cadastrado!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/cadastro/cadastro.html"*/'<style>\n@font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n}\n\n  ion-content{\n    font-family: \'Souliyo-Unicode\', sans-serif;\n    background-color:  white;\n  }\n  h1{\n    color: #47525E;\n    text-align: center;\n    font-size: 12pt;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.5px;\n    margin-top: 43px;\n    margin-left: 2px;\n  }\n  ion-item{\n    border: 1px solid #53CED3;\n    border-radius: 50pt;\n    width: 100%;\n    height: 30pt;\n    background-color: rgba(233, 233, 233, 0.62);\n  }\n  input::placeholder{\n    text-align: center; color: white; font-size: 12px; width: 270px;\n  }\n  .botao-cadastrar{\n    width: 110px;\n    height: 47px;\n    color: #000000;\n    margin-top: 10px;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    text-transform: uppercase;\n    background-color: #53CED3;\n  }\n  .botao-voltar{\n    width: 80px;\n    height: 40px;\n    color: #fff;\n    margin-top: 30px;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    font-weight: 600;\n    background-color: #53D35B;\n  }\n  .label-md{\n    margin: 13px 8px 0px 14px;\n    margin-right: 262px;\n  }\n  img{\n    width: 35px;\n    height: 32px;\n    margin-top: 10%;\n  }\n  .primeira-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .list-md{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 60px;\n  }\n</style>\n<ion-content>\n  <div class="primeira-div">\n    <img src="assets/imgs/logo.png">\n    <h1>VACIMAPS</h1>\n  </div>\n  <form [formGroup]="formulario">\n    <ion-list inset>\n\n      <ion-label class="label-home senha">Nome</ion-label>\n      <ion-item>\n        <ion-input maxlength="75" type="text" [formControl]="formulario.controls[\'validNome\']" [(ngModel)]="nome"></ion-input>\n      </ion-item>\n      \n      <ion-label class="label-home senha">E-mail</ion-label>\n      <ion-item>\n        <ion-input maxlength="75" type="email" [formControl]="formulario.controls[\'validEmail\']" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-label class="label-home senha">Senha</ion-label>\n      <ion-item>\n        <ion-input maxlength="20"  type="password" [formControl]="formulario.controls[\'vaidSenha\']"[(ngModel)]="senha"></ion-input>\n      </ion-item>\n\n      <ion-label class="label-home senha" style="margin-left: 66px;">Repita a senha</ion-label>\n      <ion-item>\n          <ion-input maxlength="20"  type="password" [formControl]="formulario.controls[\'vaidSenha\']"[(ngModel)]="senha"></ion-input>\n        </ion-item>\n      <br>\n\n      <button class="botao-cadastrar" (click)="doPOST()" [disabled]="!formulario.valid">Cadastrar</button>\n\n      <button ion-button class="botao-voltar" (click)="Voltar()">Voltar</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RedefinirSenhaPage = /** @class */ (function () {
    function RedefinirSenhaPage(navCtrl, http, navParams, appCtrl, toast, formBuilder) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            validConfSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.id = navParams.get('id');
    }
    RedefinirSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RedefinirSenhaPage');
    };
    RedefinirSenhaPage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    RedefinirSenhaPage.prototype.reset_password = function () {
        var _this = this;
        if (this.senha == this.confSenha) {
            var url = this.API_URL + "/reset_password";
            this.http
                .put(url, { id: this.id, senha: this.senha })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Usuario não encontrado!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
                else {
                    _this.toast.create({ message: "Senha alterada com sucesso!", duration: 3000, position: 'botton' }).present();
                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
            });
        }
        else {
            this.toast.create({ message: "Senhas Diferentes!", duration: 3000, position: 'botton' }).present();
        }
    };
    RedefinirSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-redefinir-senha',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/redefinir-senha/redefinir-senha.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n\n  ion-content{\n    font-family: \'Souliyo-Unicode\', sans-serif;\n    background-color:  white;\n  }\n  h1{\n    color: #47525E;\n    padding: 0px 25px 20px 25px;\n    text-align: center;\n    font-size: 30px;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.5px;\n  }\n  ion-label{\n    color: white; padding-bottom: 5px; font-family: roboto; letter-spacing: 0.5px; margin-left: 30px; \n  }\n  ion-item{\n    border: 1px solid #53CED3;\n    border-radius: 50pt;\n    width: 200pt;\n    height: 30pt;\n    background-color: rgba(233, 233, 233, 0.62);\n  }\n  .botao-alterar{\n    width: 185px;\n    height: 38px;\n    color: #000000;\n    margin-left: 45px;\n    margin-top: 10px;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    text-transform: uppercase;\n    background-color: #53CED3;\n  }\n  .btn-voltar{\n    color: #fff;\n    margin-left: 81px;\n    margin-top: 10px;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    background-color: #53D35B;\n    width: 100px;\n    height: 40px;\n  }\n  .label-md{\n    margin: 13px 8px 0px 14px;\n  }\n\n</style>\n\n<ion-content>\n\n  <h1>VACIMAPS</h1>\n  <form [formGroup]="formulario">\n  <ion-list inset>\n    <ion-label>\n      Alterar senha:\n    </ion-label>\n    \n    <ion-label>Senha atual</ion-label>\n    <ion-item>\n      <ion-input type="password" maxlength="20"></ion-input>\n    </ion-item>\n    \n    <ion-label>Nova senha</ion-label>\n    <ion-item>\n      <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'validSenha\']" [(ngModel)]="senha"></ion-input>\n    </ion-item>\n  \n    <ion-label>Confirmar nova senha</ion-label>\n    <ion-item>\n      <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'validConfSenha\']"[(ngModel)]="confSenha" placeholder="Confirmar Senha"></ion-input>\n    </ion-item>\n    <br>\n\n    <button class="btn-voltar" (click)=\'reset_password()\' [disabled]="!formulario.valid">Alterar</button>\n\n    <button ion-button class="btn-voltar" (click)="Voltar()">Cancelar</button>\n  </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/redefinir-senha/redefinir-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RedefinirSenhaPage);
    return RedefinirSenhaPage;
}());

//# sourceMappingURL=redefinir-senha.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1_services__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, navParams, Tab1Service, cityModal, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Tab1Service = Tab1Service;
        this.cityModal = cityModal;
        this.profileService = profileService;
        this.profileService.getUser().subscribe(function (usuario) {
            _this.nome = usuario.nome;
        });
        this.Tab1Service.getCity().subscribe(function (cidades) {
            _this.cidades = cidades;
            _this.cidade = _this.cidades;
        });
        this.hiddenCidades = true;
    }
    Tab1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab1Page');
    };
    Tab1Page.prototype.initializeItems = function () {
        this.cidades = this.cidade;
    };
    Tab1Page.prototype.something = function (cidade) {
        // this.hiddenCidades = true;
        this.searchbar.clearInput(null);
        var modalcidade = this.cityModal.create('CidadeModalPage', {
            nome_cidade: cidade.nome_cidade,
            uf_cidade: cidade.uf_cidade,
        });
        modalcidade.present();
    };
    Tab1Page.prototype.getCity = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        var val;
        // set val to the value of the searchbar
        try {
            val = ev.target.value;
            if (val.length > 2) {
                this.hiddenCidades = false;
            }
            else {
                this.hiddenCidades = true;
            }
        }
        catch (_a) {
            val = "a";
            this.hiddenCidades = true;
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.cidades = this.cidades.filter(function (cidade) {
                return (cidade.nome_cidade.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchQuery'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */]) === "function" && _a || Object)
    ], Tab1Page.prototype, "searchbar", void 0);
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/tab1/tab1.html"*/''/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/tab1/tab1.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__tab1_services__["a" /* Tab1Service */], __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__tab1_services__["a" /* Tab1Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tab1_services__["a" /* Tab1Service */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */]) === "function" && _f || Object])
    ], Tab1Page);
    return Tab1Page;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, appCtrl, modalCtrl, confCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.modalCtrl = modalCtrl;
        this.confCtrl = confCtrl;
    }
    PopoverPage.prototype.openModal = function () {
        var modalPage = this.modalCtrl.create('ModalPage');
        modalPage.present();
    };
    PopoverPage.prototype.modalOpen = function () {
        var confPage = this.confCtrl.create('ConfiguracoesPage');
        confPage.present();
    };
    PopoverPage.prototype.Sair = function () {
        localStorage.removeItem('token');
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/popover/popover.html"*/'<style>\n    button{\n        background: #C4C4C4 !important;\n        text-align: center;\n        font-size: 14px;\n        font-family: Roboto;\n        color: rgb(107, 106, 106);\n    }\n    ion-icon{\n        float: right;\n        font-size: 25px;\n        color: rgba(255, 255, 255, 0.432);\n    }\n</style>\n\n<ion-list>\n    <button ion-item (click)="openModal()">Perfil</button>\n    <button ion-item (click)="modalOpen()">Configuracoes</button>\n    <button ion-item (click)="Sair()">Sair <ion-icon name="power"></ion-icon></button> \n</ion-list>'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_profile_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modal_profile_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_popover__ = __webpack_require__(83);
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
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, vacinaModal, toast, profileService, http, appCtrl, popoverCtrl, VacinaService, formBuilder, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.vacinaModal = vacinaModal;
        this.toast = toast;
        this.profileService = profileService;
        this.http = http;
        this.appCtrl = appCtrl;
        this.popoverCtrl = popoverCtrl;
        this.VacinaService = VacinaService;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validarVacina: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            validarData: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            vaidarLote: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
        this.profileService.getUser().subscribe(function (usuario) {
            _this.nome = usuario.nome;
        });
        this.getVacinas();
        this.VacinaService.getVacinas().subscribe(function (vacinas) {
            _this.vacinaSelect = vacinas;
            _this.nome_vac = _this.vacinaSelect;
        });
        this.token = JSON.parse(localStorage.getItem('token'));
        this.hiddenVacinas = true;
        this.hiddenFormVacinas = true;
        this.hiddenCardVacinas = false;
    }
    Tab2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab2Page');
    };
    Tab2Page.prototype.getVacinas = function () {
        var _this = this;
        this.profileService.getUser().subscribe(function (usuario) {
            _this.usuario = usuario;
            if (usuario.vacinas != 'Nenhuma vacina cadastrada!') {
                _this.vacinas = usuario.vacinas;
                _this.user_vacinas = _this.vacinas;
            }
        });
    };
    Tab2Page.prototype.initializeItems = function () {
        this.vacinas = this.user_vacinas;
    };
    Tab2Page.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    Tab2Page.prototype.ModalVacina = function () {
        /*var modalvacina = this.vacinaModal.create ('VacinaModalPage');
        modalvacina.onDidDismiss(() => {
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
        });
         modalvacina.present();*/
        this.hiddenFormVacinas = false;
    };
    Tab2Page.prototype.editContact = function (vacina) {
        console.log(vacina);
        this.nome_vac = vacina.nome_vacina;
        this.data = new Date(vacina.data_vacina).toISOString();
        this.lote = vacina.local;
        this.id_usuario_vacina = vacina.id;
        this.vacina = vacina.id_vacina;
        this.hiddenFormVacinas = false;
        this.hiddenCardVacinas = true;
    };
    Tab2Page.prototype.doDELETE = function (vacina) {
        var _this = this;
        console.log("DELETE");
        var url = this.API_URL + "/usuario/vacina/" + vacina.id;
        this.http
            .delete(url, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Vacina deletada com sucesso!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
        });
    };
    Tab2Page.prototype.getVacina = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        var val;
        try {
            val = ev.target.value;
            if (val.length > 2) {
                this.hiddenVacinas = false;
            }
            else {
                this.hiddenVacinas = true;
            }
        }
        catch (_a) {
            val = "a";
            this.hiddenVacinas = true;
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.vacinas = this.vacinas.filter(function (vacina) {
                return (vacina.vacina.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    Tab2Page.prototype.closeModal = function () {
        this.nome_vac = [];
        this.data = "";
        this.lote = '';
        this.id_usuario_vacina = '';
        this.vacina = '';
        this.hiddenFormVacinas = true;
        this.hiddenCardVacinas = false;
    };
    Tab2Page.prototype.doPOST = function () {
        var _this = this;
        if (this.id_usuario_vacina) {
            console.log("PUT");
            this.datajson = {
                id_vacina: this.vacina,
                data_vacina: this.data,
                ds_local_vacina: this.lote,
            };
            var url = this.API_URL + "/usuario/vacina/" + this.id_usuario_vacina;
            this.http
                .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Vacina alterada com sucesso!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                    _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                }
                else {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
            });
        }
        else {
            console.log("POST");
            var url = this.API_URL + "/usuario/vacina";
            this.datajson = {
                id_vacina: this.vacina,
                data_vacina: this.data,
                lote: this.lote,
            };
            console.log(this.datajson);
            this.http
                .post(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Erro ao cadastrar vacina!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
                else {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                    _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                }
            });
        }
    };
    Tab2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab2',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/tab2/tab2.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  ion-header{\n    background-color: white;\n    background-size: cover;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n  }\n  .menu{\n    background: transparent;\n    box-shadow: none;\n    height: 49px;\n  }\n  #label-menu{\n    font-size: 11px;\n    text-transform: capitalize;\n    margin-left: -8px;\n    color: #FFFFFF;\n  }\n  ion-label{\n    color: #47525E;\n    letter-spacing: 1px;\n    margin-left: 10px;\n    margin-bottom: 1px;\n    text-transform: uppercase;\n  }\n  ion-content{\n    font-family: \'Souliyo-Unicode\', sans-serif;\n    background-color: white;\n  }\n  h1{\n    color: rgba(71, 82, 94, 0.53);\n    font-size: 10px;\n    font-weight: bold;\n    margin-top: 51px;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  .minhavacina{\n    background: #53CED3;\n    width: 330px;\n    height: 90px;\n    border-radius: 3px;\n    margin-top: 0px;\n    box-shadow: none !important;\n  }\n  .btn-2{\n    position: absolute;\n    bottom: 85px;\n    right: 3px;\n    padding: 2px;\n    padding-left: 3px;\n    border-radius: 7px;\n  }\n  .icone-editar{\n    background-color: white;\n    padding: 5px;\n    border-radius: 12px;\n    font-size: 20px;\n    color: #53CED3;\n  }\n  .p-card{\n    font-size: 15px;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    text-transform: uppercase;\n  }\n  .row{\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .button-md{\n    -webkit-box-shadow: transparent !important;\n    box-shadow: transparent !important;\n  }\n  .btn-vacinas{\n    background-color: transparent;\n  }\n  .btn-nv-vacinas{\n    margin-top: 10px;\n    height: 30px;\n    width: 110px;\n    font-size: 13px;\n    margin-left: 25px;\n    background-color: white;\n    font-family: Roboto;\n    font-weight: bold;\n    color: rgba(0, 0, 0, 0.5);\n    border-radius: 5px;\n    text-transform: inherit;\n  }\n  .addvacina{\n    color: #53CED3;\n    font-size: 30px;\n  }\n  .adc-vacina{\n    background-color: transparent !important;\n    box-shadow: none !important;\n    -webkit-box-shadow: none !important;\n  }\n  ion-card-content {\n    margin-top: -23px;\n    margin-left: -15px;\n  }\n  ion-card-header {\n    margin-top: -12px;\n    margin-left: -10px;\n  }\n  .vacinas{\n    width: 95%;\n    border-radius: 50pt;\n    margin-bottom: 15px;\n  }\n  ion-datetime{\n    background-color: #DBDBDB;\n    border-radius: 50pt;\n    width: 95%;\n    height: 30px;\n    border: 1px solid #02AEB4;\n    padding: 7px 10px;\n  }\n  .date-time-md, .datetime-placeholder{\n    width: calc((100% - 8px) - 8px);\n    margin: 5px !important;\n    padding: 0px !important;\n  }\n  ion-input{\n    background-color: #DBDBDB;\n    border-radius: 50pt;\n    width: 95%;\n    height: 30px;\n  }\n  button{\n    box-shadow: none;\n  }\n  .botao-editar{\n    position: absolute;\n    bottom: 69px;\n    left: 287px;\n    border-radius: 7px;\n  }\n  .text-input-md{\n    margin: 0px !important;\n    padding: 6px 8px;\n  }\n  .icone-excluir{\n    background-color: #F95F62;\n    padding: 5px;\n    border-radius: 12px;\n    font-size: 20px;\n    color: white;\n  }\n</style>\n\n<ion-content>\n  <ion-header>\n    <button class="menu" ion-button (click)="dash()">\n      <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n        <ion-icon name="ios-map-outline"></ion-icon>\n      </ion-avatar>\n    </button>\n\n    <ion-searchbar placeholder="Digite o nome da vacina" (ionInput)="getCity($event)" #searchQuery></ion-searchbar>\n      <ion-list [hidden]= hiddenCidades>\n        <button (click)="something(c)" ion-item *ngFor="let c of cidades">\n          <ion-option *ngFor="let c of vacinaSelect" [value] = "c.id_vacina" >{{ c.nome_vacina }}</ion-option>\n        </button>\n      </ion-list> \n\n      <button class="menu" (click)="perfil()" ion-button>\n        <ion-avatar style="font-size: 30px; color: black;">\n          <ion-icon name="ios-contact"></ion-icon>\n        </ion-avatar>\n      </button>\n  </ion-header>\n  <ion-grid>\n    <div class="content">\n      \n      <h1>Minhas Vacinas</h1>\n      <ion-row justify-content-end>\n        <button class="adc-vacina" (click)="ModalVacina()" ion-button>\n          <ion-icon class="addvacina" name="add-circle"></ion-icon>\n        </button>\n      </ion-row>\n\n      <!-- Card para cadastrar vacina -->\n      <div justify-content-center [hidden]= hiddenFormVacinas class="cad-vacina">\n        <ion-card class="card-nv-vacina">\n          <ion-label class="nomes-inputs">Nome da Vacina: </ion-label>\n          <ion-input type="text" class="inputs-vacinas"></ion-input>\n            \n          <ion-label class="nomes-inputs">Lote: </ion-label>\n          <ion-input type="text" class="inputs-vacinas" [formControl]="formulario.controls[\'vaidarLote\']" [(ngModel)]="lote"></ion-input>\n\n          <ion-label class="nomes-inputs">Data: </ion-label>\n          <ion-datetime [formControl]="formulario.controls[\'validarData\']" display-format="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n          <div class="botoes-final">\n            <button class="botao-salvar" (click)="doPOST()" [disabled]="!formulario.valid" ion-button> Salvar </button>\n             <button class="botao-cancelar" (click)="closeModal()" ion-button> Cancelar </button>\n          </div>\n        </ion-card>\n      </div>\n\n      <!-- Lista de vacinas cadastradas -->\n      <ion-row justify-content-center>\n        <ion-list *ngFor="let vacina of vacinas" >\n          <ion-card class="minhavacina">\n            <ion-card-header>\n              <p class="p-card">{{ vacina.vacina }}</p>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-label style="margin-bottom: 9px;"> Data: {{ vacina.data_vacina }} </ion-label>\n              <ion-label style="margin-top: -5px;"> Lote: {{ vacina.local }} </ion-label>\n            </ion-card-content>\n            <ion-row text-right [hidden]= hiddenCardVacinas>\n              <ion-col>\n                <button class="botao-editar" ion-button icon-left clear small (click)="editContact(vacina);">\n                  <ion-icon class="icone-editar" name="md-create"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-list>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/tab2/tab2.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["profileService"], __WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services__["VacinaService"]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["profileService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["profileService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services__["VacinaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services__["VacinaService"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _k || Object])
    ], Tab2Page);
    return Tab2Page;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=tab2.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map