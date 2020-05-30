webpackJsonp([8],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
throw new Error("Cannot find module \"./profile.services\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(165);
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








var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, toast, http, appCtrl, modalController, viewCtrl, profileService) {
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
    PerfilPage.prototype.dash = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    PerfilPage.prototype.vacinas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tab2_tab2__["a" /* Tab2Page */]);
    };
    PerfilPage.prototype.alterar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__configuracoes_configuracoes__["a" /* ConfiguracoesPage */]);
    };
    PerfilPage.prototype.save = function () {
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
    PerfilPage.prototype.Sair = function () {
        localStorage.removeItem('token');
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/perfil/perfil.html"*/'<!-- ANTIGO MODAL -->\n<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  ion-header{\n    background-color: white;\n    background-size: cover;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n  }\n  .menu{\n    background: transparent;\n    box-shadow: none;\n    height: 49px;\n    padding: 2px;\n  }\n  #label-menu{\n    font-size: 11px;\n    text-transform: capitalize;\n    margin-left: -8px;\n    color: #FFFFFF;\n  }\n  body{\n    top: 0; \n    font-family: \'Souliyo-Unicode\', sans-serif;\n  }\n  ion-card{\n    height: 100%;\n    width: 100%;\n    margin-left: 0;\n  }\n  ion-card-content{\n    padding: 60px;\n    padding-top: 45px;\n  }\n  h1{\n    text-align: center;\n    color: #47525E;\n    font-size: 13pt;\n    font-weight: 900;\n    margin-top: 16px;\n    margin-left: 10px;\n  }\n  h3{\n    text-transform: uppercase;\n    color: rgba(71, 82, 94, 0.53);\n    font-size: 12px;\n    font-weight: 900;\n    text-align: center;\n  }\n  #nome{\n    font-size: 10px;\n    font-weight: 800;\n    font-style: normal;\n    line-height: normal;\n    color: #47525E;\n    margin-top: 8px;\n    margin-left: 18px;\n    text-transform: uppercase;\n  }\n  #data{\n    font-size: 10px;\n    font-weight: 800;\n    font-style: normal;\n    line-height: normal;\n    color: #47525E;\n    margin-top: 11px;\n    margin-left: 18px;\n    text-transform: uppercase;\n  }\n  ion-item{\n    background-color: white; color: black; align-content: center; width:210px; box-shadow: none; padding-left: 0;\n    border-bottom-color: transparent !important;\n    -webkit-box-shadow: transparent !important;\n    box-shadow: none !important;\n  }\n  ion-datetime{\n    color: black; font-size: 12px; top: 3px;\n  }\n  ion-datetime--padding-start{\n    padding: 0px;\n  }\n  a{\n    color: gray;\n  }\n  .campos-perfil{\n    color: black;\n    font-size: 14px;\n    font-weight: 900;\n    width: 100%;\n    align-content: center;\n    padding: 0;\n  }\n  .item-inner--border-color{\n    box-shadow: none !important;\n    -webkit-box-shadow: none !important;\n  }\n  .botao-alterar{\n    position: absolute;\n    left: 258px;\n    border-radius: 7px;\n    top: 17px;\n  }\n  .icone-alterar{\n    font-size: 27px;\n    color: #53CED3;\n  }\n  .label-md{\n    margin: 0 !important;\n  }\n  .botoes-final{\n    margin-top: 8%;\n    display: flex;\n    flex-direction: row;\n  }\n  .botao-final{\n    color: #47525E;\n    font-size: 10px;\n    cursor: pointer;\n    flex-direction: column;\n    width: 100px;\n    height: 40px;\n  }\n  .botao-sair{\n    margin-left: 65px;\n  }\n  .text-input{\n    margin: 0;\n  }\n  .botao-salvar{\n    background-color: #53CED3;\n    color: black;\n    margin-top: 50px;\n    border-radius: 50pt;\n    width: 100px;\n    height: 40px;\n    font-weight: 800;\n    left: 30%;\n    box-shadow: none;\n  }\n</style>\n\n<body>\n  <ion-header>\n    <button class="menu" (click)="vacinas()" ion-button>\n      <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n        <ion-icon name="ios-map-outline"></ion-icon>\n      </ion-avatar>\n    </button>\n\n    <button class="menu" (click)="dash()" ion-button>\n      <ion-avatar style="font-size: 25px; background-color: #53CED3; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n        <ion-icon name="ios-medkit-outline"></ion-icon>\n      </ion-avatar>\n    </button>\n\n    <h1>Olá, {{ nome }}!</h1>\n\n    <ion-avatar class="menu" (click)="perfil()" style="font-size: 35px; color: black; margin-bottom: 6px; right: 5px; position: absolute;">\n      <ion-icon name="ios-contact"></ion-icon>\n    </ion-avatar>\n  </ion-header>\n  \n  <ion-card>\n    <ion-card-content>\n      <h3>Meu Perfil</h3>\n      <ion-row>\n        <ion-col text-center>\n          <ion-avatar style="align-content: center; font-size: 160px;">\n            <ion-icon name="ios-contact"></ion-icon>\n          </ion-avatar>\n        </ion-col>\n      </ion-row>\n          \n      <div id="div-config">\n        <ion-label id ="nome">Nome</ion-label>\n        <ion-item>\n          <ion-input class="campos-perfil" type="text" name="Nome" [(ngModel)]="nome"></ion-input>\n        </ion-item>\n\n        <ion-row text-right [hidden]= hiddenCardVacinas>\n          <ion-col>\n            <button class="botao-alterar" ion-button icon-left clear small (click)="editContact(vacina);">\n              <ion-icon class="icone-alterar" name="md-create"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <ion-label id ="nome">E-mail</ion-label>\n        <ion-item>\n          <ion-input class="campos-perfil" type="email" name="E-mail" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n        <ion-label id="data">Data de Nascimento</ion-label>\n        <ion-item>\n          <ion-datetime class="campos-perfil" display-format="DD/M/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n        </ion-item>\n\n        <div class="botoes-final">\n          <a class="botao-final" (click)="alterar()">Alterar senha</a>\n          <a class="botao-sair botao-final" (click)="Sair()">Sair da conta</a>\n        </div>\n\n        <button class="botao-salvar" ion-button block (click)="save()">Salvar</button>\n\n      </div>\n    </ion-card-content> \n  </ion-card>\n</body>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/perfil/perfil.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__profile_services__["profileService"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__profile_services__["profileService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__profile_services__["profileService"]) === "function" && _h || Object])
    ], PerfilPage);
    return PerfilPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=8.js.map