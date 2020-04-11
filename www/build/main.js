webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
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

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		159
	],
	"../pages/cidade-modal/cidade-modal.module": [
		295,
		3
	],
	"../pages/configuracoes/configuracoes.module": [
		296,
		2
	],
	"../pages/dashboard/dashboard.module": [
		164
	],
	"../pages/esqSenha/esqSenha.module": [
		163
	],
	"../pages/modal/modal.module": [
		297,
		1
	],
	"../pages/popover/popover.module": [
		165
	],
	"../pages/redefinir-senha/redefinir-senha.module": [
		166
	],
	"../pages/tab1/tab1.module": [
		167
	],
	"../pages/tab2/tab2.module": [
		168
	],
	"../pages/tabs/tabs.module": [
		169
	],
	"../pages/vacina-modal/vacina-modal.module": [
		298,
		0
	],
	"../pages/verify-code/verify-code.module": [
		170
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verify_code_verify_code__ = __webpack_require__(161);
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
            selector: 'page-esqSenha',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\esqSenha\esqSenha.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n   \n\n    ion-content{\n\n      font-family: \'Souliyo-Unicode\', sans-serif;\n\n      background-color:  white;\n\n    }\n\n    h1{\n\n    color: #47525E;\n\n    text-align: center;\n\n    font-size: 12pt;\n\n    font-weight: 900;\n\n    font-style: normal;\n\n    line-height: normal;\n\n    letter-spacing: 0.5px;\n\n    margin-top: 38px;\n\n    margin-left: 2px;\n\n  }\n\n    img{\n\n    width: 35px;\n\n    height: 32px;\n\n    margin-top: 10%;\n\n  }\n\n  .primeira-div{\n\n    display: flex;\n\n    flex-direction: row;\n\n    justify-content: center;\n\n  }\n\n    h2{\n\n      margin-left: 27px;\n\n      margin-top: 29px;\n\n    }\n\n     p{\n\n       color: #47525E; text-align: center; font-size: 10px; font-style: normal; line-height: normal;\n\n       letter-spacing: 0.9px;\n\n       font-family: roboto;\n\n       margin-bottom: -7px;\n\n       margin-top: 28px;\n\n     }\n\n     ion-label{\n\n      margin-top: 55px;\n\n      margin-bottom: 0px;\n\n      margin-left: 17px;\n\n      color: #47525E;\n\n     }\n\n     ion-item{\n\n      border: 1px solid #53CED3;\n\n      border-radius: 50pt;\n\n      width: 200pt;\n\n      height: 30pt;\n\n      background-color: rgba(233, 233, 233, 0.62);\n\n     }\n\n     input::placeholder{\n\n       text-align: center; color: white; font-size: 12px; width: 270px;\n\n     }\n\n     .botao-enviar{\n\n      width: 110px;\n\n      height: 47px;\n\n      color: #000000;\n\n      margin-left: 29%;\n\n      margin-top: 22px;\n\n      border-radius: 50pt;\n\n      font-family: roboto;\n\n      font-size: 15px;\n\n      text-transform: uppercase;\n\n      background-color: #53CED3;\n\n    }\n\n    .btn-back{\n\n      width: 100px;\n\n      height: 40px;\n\n      color: #fff;\n\n      margin-left: 81px;\n\n      margin-top: 26px;\n\n      border-radius: 50pt;\n\n      font-family: roboto;\n\n      font-size: 15px;\n\n      background-color: #53D35B;\n\n    }\n\n   \n\n   </style>\n\n   \n\n   <ion-content>\n\n    <div class="primeira-div">\n\n        <img src="assets/imgs/logo.png">\n\n        <h1>VACIMAPS</h1>\n\n    </div>\n\n   <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n \n\n\n\n      <h2>Esqueceu a senha?</h2>\n\n      <p>Digite seu email cadastrado que enviaremos <br> um link para você recuperar sua senha.</p>\n\n        <ion-label>E-mail</ion-label>\n\n        <ion-item>\n\n            <ion-input type="text" maxlength="75" [(ngModel)]="email" [formControl]="formulario.controls[\'validEmail\']"></ion-input>\n\n        </ion-item>\n\n        <br>\n\n        <button class="botao-enviar" (click)="forgot_password()" [disabled]="!formulario.valid">Enviar</button>\n\n        <button ion-button clear class="btn-back" (click)="Voltar()">Voltar</button>\n\n\n\n    </ion-list>\n\n    </form>\n\n   </ion-content>\n\n   '/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\esqSenha\esqSenha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], EsqSenhaPage);
    return EsqSenhaPage;
}());

//# sourceMappingURL=esqSenha.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redefinir_senha_redefinir_senha__ = __webpack_require__(80);
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
            selector: 'page-verify-code',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\verify-code\verify-code.html"*/'<style>\n\n  @font-face {\n\n     font-family: Souliyo-Regular;\n\n     src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n   }\n\n \n\n   ion-content{\n\n      font-family: \'Souliyo-Unicode\', sans-serif;\n\n      background: url("assets/imgs/globo.png") no-repeat;\n\n      background-position: center;\n\n      background-size: cover;\n\n   }\n\n   h1{\n\n      color: white; padding: 58px 25px 115px 25px; text-align: center; font-size: 40px; font-weight: 100; font-style: normal; line-height: normal;\n\n      letter-spacing: 0.5px;\n\n   }\n\n   p{\n\n    color: white; text-align: center; font-size: 12px; font-style: normal; line-height: normal;\n\n    letter-spacing: 0.9px;\n\n    font-family: roboto;\n\n   }\n\n   ion-item{\n\n    background-color: rgba(255, 255, 255, 0); color: white; align-content: center; width: 270px; margin-left: 30px;\n\n   }\n\n   input::placeholder{\n\n     text-align: center; color: white; font-size: 12px; font-size: 12px; width: 270px;\n\n   }\n\n   button{\n\n     width: 270px; height: 38px; color: #12614C; margin-left: 30px; margin-top: 20px; border-radius: 5px; font-family: roboto; font-size: 16px;\n\n   }\n\n   .btn-back{\n\n     color: white; font-size: 10px; padding-right: 225px; padding-top: 1px;\n\n   } \n\n </style>\n\n \n\n <ion-content>\n\n  <button ion-button clear class="btn-back" (click)="Voltar()"><< voltar</button>\n\n  <h1>VACIMAPS</h1>\n\n  <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n        <ion-item>\n\n            <ion-input type="text" [(ngModel)]="codigo" [formControl]="formulario.controls[\'validCodigo\']"  placeholder="Código"></ion-input>\n\n        </ion-item>\n\n        <p>Insira o codigo recebido para realizar a validação</p>\n\n        <br>\n\n        <button color="light" (click)="validar_token()" [disabled]="!formulario.valid">Validar</button>\n\n    </ion-list>\n\n  </form>\n\n </ion-content>\n\n '/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\verify-code\verify-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], VerifyCodePage);
    return VerifyCodePage;
}());

//# sourceMappingURL=verify-code.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
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
    function DashboardPage(navCtrl, navParams, appCtrl, modalCtrl, confCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.modalCtrl = modalCtrl;
        this.confCtrl = confCtrl;
        this.rootPage = 'TabsPage';
    }
    DashboardPage.prototype.openModal = function () {
        var modalPage = this.modalCtrl.create('ModalPage');
        modalPage.present();
    };
    DashboardPage.prototype.modalOpen = function () {
        var confPage = this.confCtrl.create('ConfiguracoesPage');
        confPage.present();
    };
    DashboardPage.prototype.Sair = function () {
        localStorage.removeItem('token');
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], DashboardPage.prototype, "nav", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\dashboard\dashboard.html"*/' \n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqSenhaPageModule", function() { return EsqSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__esqSenha__ = __webpack_require__(160);
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(162);
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(81);
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedefinirSenhaPageModule", function() { return RedefinirSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redefinir_senha__ = __webpack_require__(80);
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1__ = __webpack_require__(266);
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2__ = __webpack_require__(268);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(269);
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyCodePageModule", function() { return VerifyCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_code__ = __webpack_require__(161);
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacinaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VacinaService = /** @class */ (function () {
    function VacinaService(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    VacinaService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VacinaService');
    };
    VacinaService.prototype.getVacinas = function () {
        return this.http.get(this.API_URL + "/vacinas", { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'token': this.token.token
            }) });
    };
    VacinaService.prototype.getVacinasUSer = function () {
        return this.http.get(this.API_URL + "/usuario/vacinas", { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'token': this.token.token
            }) });
    };
    VacinaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], VacinaService);
    return VacinaService;
}());

//# sourceMappingURL=vacina.services.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_redefinir_senha_redefinir_senha_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_esqSenha_esqSenha_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_verify_code_verify_code_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tab1_tab1_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tab2_tab2_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover_module__ = __webpack_require__(165);
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
                        { loadChildren: '../pages/cidade-modal/cidade-modal.module#CidadeModalPageModule', name: 'CidadeModalPage', segment: 'cidade-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/esqSenha/esqSenha.module#EsqSenhaPageModule', name: 'EsqSenhaPage', segment: 'esqSenha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redefinir-senha/redefinir-senha.module#RedefinirSenhaPageModule', name: 'RedefinirSenhaPage', segment: 'redefinir-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vacina-modal/vacina-modal.module#VacinaModalPageModule', name: 'VacinaModalPage', segment: 'vacina-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-code/verify-code.module#VerifyCodePageModule', name: 'VerifyCodePage', segment: 'verify-code', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover_module__["PopoverPageModule"]
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1_services__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_profile_services__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(81);
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
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, navParams, Tab1Service, cityModal, popoverCtrl, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Tab1Service = Tab1Service;
        this.cityModal = cityModal;
        this.popoverCtrl = popoverCtrl;
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
    Tab1Page.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\tab1\tab1.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n  ion-content{\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n    background-color: #97D9DB;\n\n  }\n\n  ion-header{\n\n    background: url("assets/imgs/Header.png") no-repeat;\n\n    background-size: cover;\n\n    width: 100%;\n\n    height: 50px;\n\n    display: flex;\n\n    flex-direction: row;\n\n  }\n\n  .menu{\n\n    background: transparent;\n\n    box-shadow:none;\n\n  }\n\n  #label-menu{\n\n    font-size: 11px;\n\n    text-transform: capitalize;\n\n    margin-left: -8px;\n\n    color: #FFFFFF;\n\n  }\n\n  .p-header{\n\n    color: white;\n\n    font-size: 18px;\n\n    margin-left: 50px;\n\n    margin-top: 15px;\n\n    letter-spacing: 0.5px;\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n  }\n\n  h1{\n\n    padding-top: 50px;\n\n  }\n\n  ion-img{\n\n    width: 100%;\n\n    height: 65%;\n\n    position: relative;\n\n    top: 99px;\n\n    background: transparent;\n\n  }\n\n  footer{\n\n    text-transform: uppercase;\n\n    color: rgb(0, 0, 0, 0.56);\n\n    float: right;\n\n    top: 131px;\n\n    position: relative;\n\n    font-size: 8px;\n\n  }\n\n\n\n</style>\n\n\n\n  <ion-content padding>\n\n      <ion-header>\n\n          <button >Icon</button>\n\n          <ion-searchbar placeholder="Digite o nome da cidade"></ion-searchbar>\n\n          <button class="menu" (click)="presentPopover($event)" ion-button>\n\n            <ion-avatar style="font-size: 25px;">\n\n              <ion-icon name="ios-contact"></ion-icon>\n\n            </ion-avatar>\n\n          </button>\n\n        </ion-header>\n\n        <br>\n\n        <ion-img src="./assets/imgs/Mapa.png"></ion-img>\n\n        <footer>© 2018 Vacimaps</footer>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\tab1\tab1.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__tab1_services__["a" /* Tab1Service */], __WEBPACK_IMPORTED_MODULE_3__modal_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__tab1_services__["a" /* Tab1Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__modal_profile_services__["a" /* profileService */]])
    ], Tab1Page);
    return Tab1Page;
}());

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
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

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_popover__ = __webpack_require__(81);
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
            selector: 'page-tab2',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\tab2\tab2.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n  ion-header{\n\n    background: url("assets/imgs/Header.png") no-repeat;\n\n    background-size: cover;\n\n    width: 100%;\n\n    height: 50px;\n\n    display: flex;\n\n    flex-direction: row;\n\n  }\n\n  .menu{\n\n    margin-left: 8%;\n\n    margin-top: -1px;\n\n    margin-right: -2px;\n\n    background: transparent;\n\n    height: 51px;\n\n    width: 220px;\n\n    border-left: 0.5px solid rgba(0, 0, 0, 0.3);\n\n    box-shadow:none;\n\n  }\n\n  .p-menu{\n\n    font-size: 9px;\n\n    color: #FFFFFF;\n\n    margin-left: 7px;\n\n    margin-top: 15px;\n\n  }\n\n  #label-menu{\n\n    font-size: 11px;\n\n    text-transform: capitalize;\n\n    margin-left: -8px;\n\n    color: #FFFFFF;\n\n  }\n\n  ion-label{\n\n    margin-left: 5px;\n\n    color: #808080;\n\n  }\n\n  .p-header{\n\n    color: white;\n\n    font-size: 18px;\n\n    margin-left: 50px;\n\n    margin-top: 15px;\n\n    letter-spacing: 0.5px;\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n  }\n\n  ion-content{\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n    background-color: #F1EEEE;\n\n  }\n\n  h1{\n\n    color: #FFFFFF; font-size: 12px; font-weight: 100; font-style: normal; line-height: normal;\n\n  }\n\n  ion-card{\n\n    background: rgba(18, 97, 76, 0.23);\n\n    width: 330px;\n\n    height: 170px;\n\n    border-radius: 3px;\n\n  }\n\n  .minhavacina{\n\n    background: rgba(18, 97, 76, 0.23);\n\n    width: 330px;\n\n    height: 90px;\n\n    border-radius: 3px;\n\n    margin-top: -2px;\n\n  }\n\n  .card-nv-vacina{\n\n    background: rgba(18, 97, 76, 0.23);\n\n    width: 270px;\n\n    height: 140px;\n\n  }\n\n  .btn{\n\n    position: absolute;\n\n    bottom: 85px;\n\n    right: 10px;\n\n    padding-right:25px;\n\n    padding-left: 3px;\n\n    border-radius: 7px;\n\n  }\n\n  .btn-2{\n\n    position: absolute;\n\n    bottom: 85px;\n\n    right: 3px;\n\n    padding: 2px;\n\n    padding-left: 3px;\n\n    border-radius: 7px;\n\n  }\n\n  .icon-btn{\n\n    background-color: #EEE9E9;\n\n    padding: 5px;\n\n    border-radius: 3px;\n\n    font-size: 20px;\n\n    color: black;\n\n  }\n\n  .p-card{\n\n    font-size: 14px;\n\n    color: white;\n\n    font-weight: bold;\n\n  }\n\n  ion-searchbar{\n\n    margin-left: 6px;\n\n    margin-top: 25%;\n\n    margin-bottom: 10px;\n\n    width: 310px;\n\n    color:#C4C4C4;\n\n  }\n\n  .btn-vacinas{\n\n    height: 30px;\n\n    width: 110px;\n\n    font-size: 13px;\n\n    padding: 10px;\n\n    margin: 10px;\n\n    margin-right: 5px;\n\n    margin-bottom: 25px;\n\n    background-color: white;\n\n    font-family: Roboto;\n\n    font-weight: bold;\n\n    color: rgba(0, 0, 0, 0.5);\n\n    float: right;\n\n    border-radius: 5px;\n\n    text-transform: inherit;\n\n  }\n\n  .btn-nv-vacinas{\n\n    margin-top: 10px;\n\n    height: 30px;\n\n    width: 110px;\n\n    font-size: 13px;\n\n    margin-left: 25px;\n\n    background-color: white;\n\n    font-family: Roboto;\n\n    font-weight: bold;\n\n    color: rgba(0, 0, 0, 0.5);\n\n    border-radius: 5px;\n\n    text-transform: inherit;\n\n  }\n\n  .addvacina{\n\n    color: #32BEA6;\n\n    padding-right: 5px;\n\n    font-size: 20px;\n\n  }\n\n  .input-margin{\n\n    margin-left: -55px;\n\n    margin-right: 8px;\n\n    border-radius: 4px;\n\n  }\n\n  ion-card-content {\n\n    margin-top: -23px;\n\n    margin-left: -15px;\n\n  }\n\n  ion-card-header {\n\n    margin-top: -12px;\n\n    margin-left: -10px;\n\n  }\n\n  .vac{\n\n    width: 320px;\n\n    border-radius: 3px;\n\n    margin-left: 5px;\n\n    margin-bottom: 15px;\n\n  }\n\n  ion-select{\n\n    margin-left: 10px;\n\n  }\n\n  ion-datetime{\n\n    margin-top: 3px;\n\n    background-color: white;\n\n    border-radius: 3px;\n\n    margin-left: -65px;\n\n    width: 110px;\n\n    margin-right: 10px;\n\n    height: 30px;\n\n    padding: -10px;\n\n  }\n\n  ion-input{\n\n    margin-top: 3px;\n\n    background-color: white;\n\n    border-radius: 3px;\n\n    width: 110px;\n\n    height: 30px;\n\n\n\n  }\n\n  /* css que nao vou usar mais mas que eh bom manter pq vai que \n\n  .nv-vacina{\n\n    display: flex;\n\n    flex-direction: row;\n\n  }\n\n  ion-searchbar--placeholder-color{\n\n    color: #C4C4C4; \n\n  }\n\n  ion-searchbar--background{\n\n    color: white;\n\n  }\n\n  ion-list{\n\n    left: -60px;\n\n  }\n\n  ion-datetime--placeholder-color{\n\n    color: #FFFFFF;\n\n  }\n\n   ion-datetime--placeholder{\n\n    font-size: 10px;\n\n  }\n\n  ion-grid{\n\n    background: rgba(18, 97, 76, 0.23);\n\n    width: 265px;\n\n    height: 170px;\n\n  }\n\n  .btn-nv-vacina{\n\n    left: -26px;\n\n    top: -12px;\n\n  } \n\n  */\n\n</style>\n\n<ion-content>\n\n  <ion-header>\n\n    <p class="p-header">VACIMAPS</p>\n\n    <button class="menu" (click)="presentPopover($event)" ion-button>\n\n      <ion-label id="label-menu">Olá, {{ nome }}</ion-label>\n\n      <ion-avatar style="font-size: 25px;">\n\n        <ion-icon name="ios-contact"></ion-icon>\n\n      </ion-avatar>\n\n      <p class="p-menu">v</p>\n\n    </button>\n\n  </ion-header>\n\n  <ion-grid>\n\n    <ion-col> \n\n      <ion-row justify-content-center>\n\n        <ion-searchbar class="search-vacina" placeholder="Digite o nome da vacina" (ionInput)="getVacina($event)"></ion-searchbar>\n\n        <ion-list [hidden]= hiddenVacinas>\n\n          <button (click)="editContact(vacina);" ion-item *ngFor="let vacina of vacinas">\n\n            <ion-option  [value] = "vacina.vacina">{{ vacina.vacina }}</ion-option>\n\n          </button>\n\n        </ion-list>           \n\n      </ion-row>\n\n      <ion-row justify-content-end>\n\n        <button class="btn-vacinas" (click)="ModalVacina()" ion-button>\n\n          <ion-icon class="addvacina" name="add-circle"></ion-icon>\n\n          Nova vacina\n\n        </button>\n\n      </ion-row>\n\n<!-- Card para cadastrar vacina-->\n\n      <ion-row justify-content-center [hidden]= hiddenFormVacinas>\n\n        <ion-list>\n\n          <ion-card>\n\n            <ion-col>\n\n              <ion-row>\n\n                <ion-item class="vac">\n\n                  <ion-label>Vacinas</ion-label>\n\n                  <ion-select  [formControl]="formulario.controls[\'validarVacina\']" [(ngModel)]="vacina" disabled="disabled">\n\n                      <ion-option *ngFor="let c of vacinaSelect" [value] = "c.id_vacina" >{{ c.nome_vacina }}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-label>Data: </ion-label>\n\n                <!--<ion-datetime display-format="MM/DD/YYYY" placeholder="dd/mm/aaaa"></ion-datetime>-->\n\n                <ion-datetime placeholder="dia/mês/ano" [formControl]="formulario.controls[\'validarData\']" display-format="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n                <ion-label>Lote: </ion-label>\n\n                <ion-input type="text" class="placeholder-input input-margin" [formControl]="formulario.controls[\'vaidarLote\']" [(ngModel)]="lote"></ion-input>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <button class="btn-nv-vacinas" (click)="closeModal()" ion-button>\n\n                    <ion-icon style="color: red; font-size: 27px; padding-right: 10px;" name="close-circle"></ion-icon>\n\n                    Cancelar\n\n                  </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <button class="btn-nv-vacinas" (click)="doPOST()" [disabled]="!formulario.valid" ion-button>\n\n                    <ion-icon style="color: green; font-size: 27px; padding-right: 10px;" name="checkmark-circle"></ion-icon>\n\n                    Salvar \n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n              <br><br>\n\n            </ion-col>\n\n          </ion-card>\n\n        </ion-list>\n\n      </ion-row>\n\n      <ion-row justify-content-center>\n\n        <ion-list *ngFor="let vacina of vacinas" >\n\n          <ion-card class="minhavacina">\n\n            <ion-card-header>\n\n              <p class="p-card">{{ vacina.vacina }}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <ion-label> Data: {{ vacina.data_vacina }} </ion-label>\n\n              <ion-label style="margin-top: -5px;"> Lote: {{ vacina.local }} </ion-label>\n\n            </ion-card-content>\n\n            <ion-row text-right [hidden]= hiddenCardVacinas>\n\n              <ion-col>\n\n                <button class="btn" ion-button icon-left clear small (click)="editContact(vacina);">\n\n                  <ion-icon class="icon-btn" name="md-create"></ion-icon>\n\n                </button>\n\n                <button class="btn-2" ion-button icon-left clear small (click)="doDELETE(vacina);">\n\n                  <ion-icon class="icon-btn" name="ios-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card>\n\n        </ion-list>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\tab2\tab2.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["a" /* profileService */], __WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services__["a" /* VacinaService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["a" /* profileService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__vacina_modal_vacina_services__["a" /* VacinaService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Tab2Page);
    return Tab2Page;
}());

//# sourceMappingURL=tab2.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<style>\n\nion-tab{\n\n  color: #12614C;\n\n}\n\n</style>\n\n      \n\n    <ion-tabs [selectedIndex]="myIndex">\n\n      <ion-tab [root]="tab1Root" tabTitle="DashBoard - Mapa" tabIcon="customap"></ion-tab>\n\n      <ion-tab [root]="tab2Root" tabTitle="Minhas vacinas" tabIcon="customedicalbook"></ion-tab>\n\n    </ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redefinir_senha_redefinir_senha__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__esqSenha_esqSenha__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(162);
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
            else if (res['Mensagem'] == 'Senha Incorreta!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                localStorage.setItem('token', JSON.stringify(res));
                _this.toast.create({ message: "Bem Vindo!", duration: 3000, position: 'botton' }).present();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\home\home.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n  ion-content{\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n    background: white;\n\n  }\n\n  h1{\n\n    color: #47525E;\n\n    text-align: center;\n\n    font-size: 16pt;\n\n    font-weight: 900;\n\n    font-style: normal;\n\n    line-height: normal;\n\n    letter-spacing: 0.5px;\n\n    margin-top: -5px;\n\n  }\n\n  ion-item{\n\n    border: 1px solid #53CED3;\n\n    border-radius: 50pt;\n\n    width: 200pt;\n\n    height: 30pt;\n\n    background-color: rgba(233, 233, 233, 0.62);\n\n  }\n\n  input::placeholder{\n\n    width: 270px; text-align: center; color: white; font-size: 12px;\n\n  }\n\n  button{\n\n    width: 110px;\n\n    height: 47px;\n\n    background-color: #53CED3 !important;\n\n    color: black;\n\n    font-weight: 900;\n\n    margin-left: 59pt;\n\n    margin-top: 25px;\n\n    border-radius: 50pt;\n\n    font-family: roboto;\n\n    font-size: 15px;\n\n    text-transform: uppercase;\n\n  }\n\n  .btn-others{\n\n    color: #47525E;\n\n    font-size: 10px;\n\n    cursor: pointer;\n\n    flex-direction: column;\n\n    text-align: center;\n\n    margin-left: 33px;\n\n    width: 100px;\n\n    height: 40px;\n\n  }\n\n  p {\n\n  color: #ea6153;\n\n  display: none;\n\n  }\n\n  input:invalid + p {\n\n    display: inline\n\n  }\n\n  .div-home{\n\n    margin-top: 8%;\n\n    display: flex;\n\n    flex-direction: row;\n\n  }\n\n  ion-list.list.list-md {\n\n    /*margin-top: 5%;*/\n\n  }\n\n\n\n  .label-home {\n\n    font-size: 10pt;\n\n    text-transform: uppercase;\n\n    margin-bottom: 1px;\n\n    margin-left: 17px;\n\n}\n\n.input-cover {\n\n    border: 1px solid #53CED3;\n\n    border-radius: 50pt;\n\n    width: 176pt;\n\n    height: 30pt;\n\n    background-color: rgba(233, 233, 233, 0.62);\n\n}\n\n.senha{\n\n  margin-top: 17px;\n\n}\n\nimg{\n\n  margin-left: 33%;\n\n  width: 100px;\n\n  height: auto;\n\n  margin-top: 10%;\n\n}\n\n</style>\n\n\n\n\n\n<ion-content>\n\n<body>\n\n  <div class="primeira-div">\n\n    <img src="assets/imgs/logo.png">\n\n    <h1>VACIMAPS</h1>\n\n  </div>\n\n  <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n        <p>Usuário ou senha inválida!</p>\n\n      <ion-label class="label-home">E-mail</ion-label>\n\n      <ion-item>\n\n        <ion-input type="email" maxlength="75" [formControl]="formulario.controls[\'validEmail\']" [(ngModel)]="email"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-label class="label-home senha">Senha</ion-label>\n\n      <ion-item>\n\n        <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'vaidSenha\']" [(ngModel)]="senha"></ion-input>\n\n      </ion-item>\n\n\n\n      <button (click)=\'login()\' [disabled]="!formulario.valid">Entrar</button>\n\n    </ion-list>\n\n  </form>\n\n  <div class="div-home">\n\n    <a class="btn-pass btn-others" (click)="esqSenha()">Esqueci minha senha</a>\n\n    <a class="btn-new btn-others" (click)="cadastrar()">Novo por aqui?</a>\n\n  </div>\n\n</body>\n\n</ion-content> \n\n\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//.pipe(map(response => { localStorage.setItem('token', JSON.stringify(response)) }))
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(27);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
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
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\cadastro\cadastro.html"*/'<style>\n\n@font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n}\n\n\n\n  ion-content{\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n    background-color:  white;\n\n  }\n\n  h1{\n\n    color: #47525E;\n\n    text-align: center;\n\n    font-size: 12pt;\n\n    font-weight: 900;\n\n    font-style: normal;\n\n    line-height: normal;\n\n    letter-spacing: 0.5px;\n\n    margin-top: 38px;\n\n    margin-left: 2px;\n\n  }\n\n  ion-item{\n\n    border: 1px solid #53CED3;\n\n    border-radius: 50pt;\n\n    width: 200pt;\n\n    height: 30pt;\n\n    background-color: rgba(233, 233, 233, 0.62);\n\n  }\n\n  input::placeholder{\n\n    text-align: center; color: white; font-size: 12px; width: 270px;\n\n  }\n\n  .botao-cadastrar{\n\n    width: 110px;\n\n    height: 47px;\n\n    color: #000000;\n\n    margin-left: 28%;\n\n    margin-top: 10px;\n\n    border-radius: 50pt;\n\n    font-family: roboto;\n\n    font-size: 15px;\n\n    text-transform: uppercase;\n\n    background-color: #53CED3;\n\n  }\n\n  .btn-back{\n\n    width: 100px;\n\n    height: 40px;\n\n    color: #fff;\n\n    margin-left: 81px;\n\n    margin-top: 10px;\n\n    border-radius: 50pt;\n\n    font-family: roboto;\n\n    font-size: 15px;\n\n    background-color: #53D35B;\n\n  }\n\n  .label-md{\n\n    margin: 13px 8px 0px 14px;\n\n  }\n\n  img{\n\n    width: 35px;\n\n    height: 32px;\n\n    margin-top: 10%;\n\n  }\n\n  .primeira-div{\n\n    display: flex;\n\n    flex-direction: row;\n\n    justify-content: center;\n\n  }\n\n</style>\n\n<ion-content>\n\n  <div class="primeira-div">\n\n    <img src="assets/imgs/logo.png">\n\n    <h1>VACIMAPS</h1>\n\n  </div>\n\n  <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n\n\n      <ion-label class="label-home senha">Nome</ion-label>\n\n      <ion-item>\n\n        <ion-input maxlength="75" type="text" [formControl]="formulario.controls[\'validNome\']" [(ngModel)]="nome"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-label class="label-home senha">E-mail</ion-label>\n\n      <ion-item>\n\n        <ion-input maxlength="75" type="email" [formControl]="formulario.controls[\'validEmail\']" [(ngModel)]="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-label class="label-home senha">Senha</ion-label>\n\n      <ion-item>\n\n        <ion-input maxlength="20"  type="password" [formControl]="formulario.controls[\'vaidSenha\']"[(ngModel)]="senha"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-label class="label-home senha">Repita a senha</ion-label>\n\n      <ion-item>\n\n          <ion-input maxlength="20"  type="password" [formControl]="formulario.controls[\'vaidSenha\']"[(ngModel)]="senha"></ion-input>\n\n        </ion-item>\n\n      <br>\n\n\n\n      <button class="botao-cadastrar" (click)="doPOST()" [disabled]="!formulario.valid">Cadastrar</button>\n\n\n\n      <button ion-button class="btn-back" (click)="Voltar()">Voltar</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-redefinir-senha',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\redefinir-senha\redefinir-senha.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n\n\n  ion-content{\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n    background-color:  white;\n\n  }\n\n  h1{\n\n    color: #47525E;\n\n    padding: 0px 25px 20px 25px;\n\n    text-align: center;\n\n    font-size: 30px;\n\n    font-weight: 900;\n\n    font-style: normal;\n\n    line-height: normal;\n\n    letter-spacing: 0.5px;\n\n  }\n\n  ion-label{\n\n    color: white; padding-bottom: 5px; font-family: roboto; letter-spacing: 0.5px; margin-left: 30px; \n\n  }\n\n  ion-item{\n\n    border: 1px solid #53CED3;\n\n    border-radius: 50pt;\n\n    width: 200pt;\n\n    height: 30pt;\n\n    background-color: rgba(233, 233, 233, 0.62);\n\n  }\n\n  .botao-alterar{\n\n    width: 185px;\n\n    height: 38px;\n\n    color: #000000;\n\n    margin-left: 45px;\n\n    margin-top: 10px;\n\n    border-radius: 50pt;\n\n    font-family: roboto;\n\n    font-size: 15px;\n\n    text-transform: uppercase;\n\n    background-color: #53CED3;\n\n  }\n\n  .btn-voltar{\n\n    color: #fff;\n\n    margin-left: 81px;\n\n    margin-top: 10px;\n\n    border-radius: 50pt;\n\n    font-family: roboto;\n\n    font-size: 15px;\n\n    background-color: #53D35B;\n\n    width: 100px;\n\n    height: 40px;\n\n  }\n\n  .label-md{\n\n    margin: 13px 8px 0px 14px;\n\n  }\n\n\n\n</style>\n\n\n\n<ion-content>\n\n\n\n  <h1>VACIMAPS</h1>\n\n  <form [formGroup]="formulario">\n\n  <ion-list inset>\n\n    <ion-label>\n\n      Alterar senha:\n\n    </ion-label>\n\n    \n\n    <ion-label>Senha atual</ion-label>\n\n    <ion-item>\n\n      <ion-input type="password" maxlength="20"></ion-input>\n\n    </ion-item>\n\n    \n\n    <ion-label>Nova senha</ion-label>\n\n    <ion-item>\n\n      <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'validSenha\']" [(ngModel)]="senha"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-label>Confirmar nova senha</ion-label>\n\n    <ion-item>\n\n      <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'validConfSenha\']"[(ngModel)]="confSenha" placeholder="Confirmar Senha"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n\n\n    <button class="btn-voltar" (click)=\'reset_password()\' [disabled]="!formulario.valid">Alterar</button>\n\n\n\n    <button ion-button class="btn-voltar" (click)="Voltar()">Cancelar</button>\n\n  </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\redefinir-senha\redefinir-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RedefinirSenhaPage);
    return RedefinirSenhaPage;
}());

//# sourceMappingURL=redefinir-senha.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
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
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\popover\popover.html"*/'<style>\n\n    button{\n\n        background: #C4C4C4 !important;\n\n        text-align: center;\n\n        font-size: 14px;\n\n        font-family: Roboto;\n\n        color: rgb(107, 106, 106);\n\n    }\n\n    ion-icon{\n\n        float: right;\n\n        font-size: 25px;\n\n        color: rgba(255, 255, 255, 0.432);\n\n    }\n\n</style>\n\n\n\n<ion-list>\n\n    <button ion-item (click)="openModal()">Perfil</button>\n\n    <button ion-item (click)="modalOpen()">Configuracoes</button>\n\n    <button ion-item (click)="Sair()">Sair <ion-icon name="power"></ion-icon></button> \n\n</ion-list>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\popover\popover.html"*/,
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

/***/ })

},[215]);
//# sourceMappingURL=main.js.map