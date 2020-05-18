webpackJsonp([1],{

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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_services__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
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
            selector: 'page-modal',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal/modal.html"*/'<style>\n    @font-face {\n      font-family: Souliyo-Unicode;\n      src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n    }\n    body{\n      top: 6%; \n      font-family: \'Souliyo-Unicode\', sans-serif;\n    }\n    ion-card{\n      height: 100%;\n      width: 100%;\n      margin-left: 0;\n    }\n    ion-card-content{\n      padding: 60px;\n      padding-top: 0;\n    }\n    h1{\n      text-transform: uppercase;\n      color: rgba(71, 82, 94, 0.53);\n      font-size: 12px;\n      font-weight: 900;\n      text-align: center;\n    }\n    #nome{\n      font-size: 10px;\n      font-weight: 800;\n      font-style: normal;\n      line-height: normal;\n      color: #47525E;\n      margin-top: 8px;\n      margin-left: 18px;\n      text-transform: uppercase;\n    }\n    #data{\n      font-size: 10px;\n      font-weight: 800;\n      font-style: normal;\n      line-height: normal;\n      color: #47525E;\n      margin-top: 11px;\n      margin-left: 18px;\n      text-transform: uppercase;\n    }\n    ion-avatar{\n      width: 25px; height: 25px; align-content: center;\n    }\n    ion-item{\n      background-color: white; color: black; align-content: center; width:210px; box-shadow: none; padding-left: 0;\n    }\n    ion-datetime{\n      color: black; font-size: 12px; top: 3px;\n    }\n    ion-datetime--padding-start{\n      padding: 0px;\n    }\n    .botao-salvar{\n      width: 67px;\n      height: 23px;\n      font-size: 12px;\n      align-items: center;\n      text-transform: inherit;\n      border-radius: 5px;\n      box-shadow: none;\n    }\n    a{\n      color: gray;\n    }\n    ion-icon {\n      font-size: 160px; vertical-align: auto;\n    }\n    .campos-perfil{\n      color: black;\n      font-size: 14px;\n      font-weight: 900;\n      width: 100%;\n      align-content: center;\n      padding: 0;\n    }\n    .item-inner{\n      box-shadow: none !important;\n      -webkit-box-shadow: none !important;\n    }\n    .botao-alterar{\n      position: absolute;\n      left: 258px;\n      border-radius: 7px;\n      top: 17px;\n    }\n    .icone-alterar{\n      font-size: 27px;\n      color: #53CED3;\n    }\n    .label-md{\n      margin: 0 !important;\n    }\n    .botoes-final{\n      margin-top: 8%;\n      display: flex;\n      flex-direction: row;\n    }\n    .botao-final{\n      color: #47525E;\n      font-size: 10px;\n      cursor: pointer;\n      flex-direction: column;\n      width: 100px;\n      height: 40px;\n    }\n    .botao-sair{\n      margin-left: 65px;\n    }\n    .text-input{\n      margin: 0;\n    }\n    .searchbar-md{\n      padding: 6px 55px;\n      border-radius: 50pt;\n      font-size: 9pt;\n      line-height: 3rem;\n    }\n  </style>\n\n  <body>\n    <ion-card>\n      <ion-card-content>\n        <a (click)="closeModal()"> <ion-icon name="close" style="font-size: 20px; float: right; padding-top: 0px; padding-right: 0px;"></ion-icon></a>\n\n        <h1>Meu Perfil</h1>\n        <ion-row>\n          <ion-col text-center>\n            <ion-icon name="ios-contact"></ion-icon>\n          </ion-col>\n        </ion-row>\n            \n        <div id="div-config">\n          <ion-label id ="nome">Nome</ion-label>\n          <ion-item>\n            <ion-input class="campos-perfil" type="text" name="Nome" [(ngModel)]="nome"></ion-input>\n          </ion-item>\n\n          <ion-row text-right [hidden]= hiddenCardVacinas>\n            <ion-col>\n              <button class="botao-alterar" ion-button icon-left clear small (click)="editContact(vacina);">\n                <ion-icon class="icone-alterar" name="md-create"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n\n          <ion-label id ="nome">E-mail</ion-label>\n          <ion-item>\n            <ion-input class="campos-perfil" type="email" name="E-mail" [(ngModel)]="email"></ion-input>\n          </ion-item>\n\n          <ion-label id="data">Data de Nascimento</ion-label>\n          <ion-item>\n            <ion-datetime class="campos-perfil" display-format="DD/MM/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n          </ion-item>\n\n          <div class="botoes-final">\n            <a class="botao-final" (click)="alterar()">Alterar senha</a>\n            <a class="botao-sair botao-final" (click)="sair()">Sair da conta</a>\n          </div>\n\n        </div>\n        <!--<button class="botao-salvar" ion-button block (click)="save()" style="background:#4FBA6E; float: right;">Salvar</button>-->\n      </ion-card-content> \n    </ion-card>\n  </body>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal/modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__profile_services__["a" /* profileService */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map