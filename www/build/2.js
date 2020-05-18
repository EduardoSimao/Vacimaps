webpackJsonp([2],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguracoesPageModule = /** @class */ (function () {
    function ConfiguracoesPageModule() {
    }
    ConfiguracoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */]),
            ],
        })
    ], ConfiguracoesPageModule);
    return ConfiguracoesPageModule;
}());

//# sourceMappingURL=configuracoes.module.js.map

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
            selector: 'page-configuracoes',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/configuracoes/configuracoes.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  body{ \n    left: 0%; \n    /*background-color: white; */\n    font-family: \'Souliyo-Unicode\', sans-serif;\n  }\n  h1{\n    color: #47525E;\n    text-align: center;\n    font-size: 12pt;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.5px;\n    margin-top: 43px;\n    margin-left: 2px;\n  }\n    img{\n    width: 35px;\n    height: 32px;\n    margin-top: 10%;\n  }\n  .primeira-div{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n  #div-config{\n    width: 104%;\n    height: 38%;\n    margin-top: 27px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  p{\n    font-weight: 600;\n    font-size: 12px;\n    color: #47525E;\n    margin-bottom: 1px;\n    text-transform: uppercase;\n  }\n  #perfil{\n    padding-top: 5px;\n    padding-left: 5px;\n  }\n  #senha{\n    margin-top: -14px;\n  }\n  button{\n    width: 110px;\n    height: 47px;\n    font-weight: 900;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    text-transform: uppercase;\n  }\n  .botao-salvar{\n    background-color: #53CED3;\n    color: black;\n    margin-top: 50px;\n  }\n  .botao-cancelar{\n    color: white;\n    background-color: #53D35B;\n    margin-top: 26px;\n    width: 100px;\n    height: 40px;\n  }\n  ion-icon {\n    font-size: 160px; \n    vertical-align: auto;\n  }\n  a{\n    color: gray;\n  }\n  ion-item{\n    border: 1px solid #53CED3;\n    border-radius: 50pt;\n    width: 200pt;\n    height: 30pt;\n    background-color: rgba(233, 233, 233, 0.62);\n  }\n  input::placeholder{\n    width: 270px; text-align: center; color: white; font-size: 12px;\n  }\n  .input-email{\n    text-align: center; font-size: 12px; color: #E7E6E6; top: -23px; padding: 2px; width: 104%; left: -7px; margin-top: 17px;\n  }\n  .campos{\n    margin-bottom: 36px;\n  }\n  .botoes{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n</style>\n\n<ion-content>\n  <body>\n    <div class="primeira-div">\n      <img src="assets/imgs/logo.png">\n      <h1>VACIMAPS</h1>\n    </div>\n\n    <h1>Alterar senha</h1>\n        \n        <div id="div-config">\n          <div class="campos">\n            <p id="perfil">Senha atual</p>\n            <ion-item>\n              <ion-input type="password" [(ngModel)]="senhaAtual" [formControl]="formulario.controls[\'validarSenha\']" ></ion-input>\n            </ion-item>\n          </div>\n\n          <div class="campos">\n            <p id="senha">Nova senha</p>\n            <ion-item>   \n              <ion-input type="password" [(ngModel)]="novasenha" [formControl]="formulario.controls[\'validarNovaSenha\']" ></ion-input>\n            </ion-item>\n          </div>\n\n          <div class="campos">\n            <p id="senha">Repita a senha</p>\n            <ion-item>      \n              <ion-input type="password" [(ngModel)]="confsenha" [formControl]="formulario.controls[\'validarConfSenha\']" ></ion-input>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class="botoes">\n          <button ion-button class="botao-salvar" (click)="doPut()" [disabled]="!formulario.valid" color="light">Alterar</button>\n          <button ion-button class="botao-cancelar" (click)="closeModal()">Cancelar</button>\n        </div>\n  </body>\n</ion-content>'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/configuracoes/configuracoes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["a" /* profileService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ })

});
//# sourceMappingURL=2.js.map