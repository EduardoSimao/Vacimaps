webpackJsonp([1],{

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		163
	],
	"../pages/cidade-modal/cidade-modal.module": [
		305,
		0
	],
	"../pages/configuracoes/configuracoes.module": [
		167
	],
	"../pages/dashboard/dashboard.module": [
		168
	],
	"../pages/esqSenha/esqSenha.module": [
		169
	],
	"../pages/modal-novas-vacinas/modal-novas-vacinas.module": [
		170
	],
	"../pages/modal/modal.module": [
		171
	],
	"../pages/perfil/perfil.module": [
		175
	],
	"../pages/popover/popover.module": [
		176
	],
	"../pages/redefinir-senha/redefinir-senha.module": [
		177
	],
	"../pages/tab1/tab1.module": [
		178
	],
	"../pages/tab2/tab2.module": [
		179
	],
	"../pages/tabs/tabs.module": [
		180
	],
	"../pages/vacinas/vacinas.module": [
		181
	],
	"../pages/verify-code/verify-code.module": [
		182
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verify_code_verify_code__ = __webpack_require__(165);
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
            selector: 'page-esqSenha',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\esqSenha\esqSenha.html"*/'<ion-content>\n\n  <div class="primeira-div">\n\n    <img src="assets/imgs/logo.png">\n\n    <h1 class="titulo-pagina">VACIMAPS</h1>\n\n  </div>\n\n  <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n      <h2 class="sub-titulo">Esqueceu a senha?</h2>\n\n      <p>Digite seu email cadastrado que enviaremos <br> um link para você recuperar sua senha.</p>\n\n        <ion-label class="label-home">E-mail</ion-label>\n\n        <ion-item>\n\n            <ion-input type="text" maxlength="75" [(ngModel)]="email" [formControl]="formulario.controls[\'validEmail\']"></ion-input>\n\n        </ion-item>\n\n        <br>\n\n        <div class="botoes-form">\n\n          <button class="botao-enviar" (click)="forgot_password()" [disabled]="!formulario.valid">Enviar</button>\n\n          <button ion-button clear class="botao-voltar" (click)="Voltar()">Voltar</button>\n\n        </div>\n\n    </ion-list>\n\n  </form>\n\n  \n\n</ion-content>\n\n   '/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\esqSenha\esqSenha.html"*/,
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redefinir_senha_redefinir_senha__ = __webpack_require__(82);
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
            selector: 'page-verify-code',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\verify-code\verify-code.html"*/'<ion-content>\n\n  <div class="primeira-div">\n\n    <img src="assets/imgs/logo.png">\n\n    <h1 class="titulo-pagina">VACIMAPS</h1>\n\n  </div>\n\n  <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n      <p>Insira o codigo recebido para realizar a validação.</p>\n\n      <ion-label>Código</ion-label>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="codigo" [formControl]="formulario.controls[\'validCodigo\']"></ion-input>\n\n      </ion-item>\n\n      <br>\n\n      <div class="botoes-final">\n\n        <button (click)="validar_token()" [disabled]="!formulario.valid" class="botao-validar">Validar</button>\n\n        <button ion-button clear class="botao-voltar" (click)="Voltar()">Voltar</button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n </ion-content>\n\n '/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\verify-code\verify-code.html"*/,
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    DashboardService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardService.prototype.getCity = function () {
        return this.http.get(this.API_URL + "/cidades", { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'token': this.token.token
            }) });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.services.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(86);
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(49);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqSenhaPageModule", function() { return EsqSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__esqSenha__ = __webpack_require__(164);
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNovasVacinasPageModule", function() { return ModalNovasVacinasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_novas_vacinas__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalNovasVacinasPageModule = /** @class */ (function () {
    function ModalNovasVacinasPageModule() {
    }
    ModalNovasVacinasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_novas_vacinas__["a" /* ModalNovasVacinasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_novas_vacinas__["a" /* ModalNovasVacinasPage */]),
            ],
        })
    ], ModalNovasVacinasPageModule);
    return ModalNovasVacinasPageModule;
}());

//# sourceMappingURL=modal-novas-vacinas.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(278);
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

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_services__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__ = __webpack_require__(31);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */])
    ], Tab1Page.prototype, "searchbar", void 0);
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\tab1\tab1.html"*/''/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\tab1\tab1.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_services__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_services__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */]])
    ], Tab1Page);
    return Tab1Page;
}());

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_popover__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
            selector: 'page-tab2',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\tab2\tab2.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n  ion-header{\n\n    background-color: white;\n\n    background-size: cover;\n\n    width: 100%;\n\n    height: 50px;\n\n    display: flex;\n\n    flex-direction: row;\n\n  }\n\n  .menu{\n\n    background: transparent;\n\n    box-shadow: none;\n\n    height: 49px;\n\n  }\n\n  #label-menu{\n\n    font-size: 11px;\n\n    text-transform: capitalize;\n\n    margin-left: -8px;\n\n    color: #FFFFFF;\n\n  }\n\n  ion-label{\n\n    color: #47525E;\n\n    letter-spacing: 1px;\n\n    margin-left: 10px;\n\n    margin-bottom: 1px;\n\n    text-transform: uppercase;\n\n  }\n\n  ion-content{\n\n    font-family: \'Souliyo-Unicode\', sans-serif;\n\n    background-color: white;\n\n  }\n\n  h1{\n\n    color: rgba(71, 82, 94, 0.53);\n\n    font-size: 10px;\n\n    font-weight: bold;\n\n    margin-top: 51px;\n\n    text-align: center;\n\n    text-transform: uppercase;\n\n    letter-spacing: 0.5px;\n\n  }\n\n  .minhavacina{\n\n    background: #53CED3;\n\n    width: 330px;\n\n    height: 90px;\n\n    border-radius: 3px;\n\n    margin-top: 0px;\n\n    box-shadow: none !important;\n\n  }\n\n  .btn-2{\n\n    position: absolute;\n\n    bottom: 85px;\n\n    right: 3px;\n\n    padding: 2px;\n\n    padding-left: 3px;\n\n    border-radius: 7px;\n\n  }\n\n  .icone-editar{\n\n    background-color: white;\n\n    padding: 5px;\n\n    border-radius: 12px;\n\n    font-size: 20px;\n\n    color: #53CED3;\n\n  }\n\n  .p-card{\n\n    font-size: 15px;\n\n    color: white;\n\n    font-weight: bold;\n\n    text-align: center;\n\n    text-transform: uppercase;\n\n  }\n\n  .row{\n\n    -webkit-box-pack: center !important;\n\n    -webkit-justify-content: center !important;\n\n    -ms-flex-pack: center !important;\n\n    justify-content: center !important;\n\n  }\n\n  .button-md{\n\n    -webkit-box-shadow: transparent !important;\n\n    box-shadow: transparent !important;\n\n  }\n\n  .btn-vacinas{\n\n    background-color: transparent;\n\n  }\n\n  .btn-nv-vacinas{\n\n    margin-top: 10px;\n\n    height: 30px;\n\n    width: 110px;\n\n    font-size: 13px;\n\n    margin-left: 25px;\n\n    background-color: white;\n\n    font-family: Roboto;\n\n    font-weight: bold;\n\n    color: rgba(0, 0, 0, 0.5);\n\n    border-radius: 5px;\n\n    text-transform: inherit;\n\n  }\n\n  .addvacina{\n\n    color: #53CED3;\n\n    font-size: 30px;\n\n  }\n\n  .adc-vacina{\n\n    background-color: transparent !important;\n\n    box-shadow: none !important;\n\n    -webkit-box-shadow: none !important;\n\n  }\n\n  ion-card-content {\n\n    margin-top: -23px;\n\n    margin-left: -15px;\n\n  }\n\n  ion-card-header {\n\n    margin-top: -12px;\n\n    margin-left: -10px;\n\n  }\n\n  .vacinas{\n\n    width: 95%;\n\n    border-radius: 50pt;\n\n    margin-bottom: 15px;\n\n  }\n\n  ion-datetime{\n\n    background-color: #DBDBDB;\n\n    border-radius: 50pt;\n\n    width: 95%;\n\n    height: 30px;\n\n    border: 1px solid #02AEB4;\n\n    padding: 7px 10px;\n\n  }\n\n  .date-time-md, .datetime-placeholder{\n\n    width: calc((100% - 8px) - 8px);\n\n    margin: 5px !important;\n\n    padding: 0px !important;\n\n  }\n\n  ion-input{\n\n    background-color: #DBDBDB;\n\n    border-radius: 50pt;\n\n    width: 95%;\n\n    height: 30px;\n\n  }\n\n  button{\n\n    box-shadow: none;\n\n  }\n\n  .botao-editar{\n\n    position: absolute;\n\n    bottom: 69px;\n\n    left: 287px;\n\n    border-radius: 7px;\n\n  }\n\n  .text-input-md{\n\n    margin: 0px !important;\n\n    padding: 6px 8px;\n\n  }\n\n  .icone-excluir{\n\n    background-color: #F95F62;\n\n    padding: 5px;\n\n    border-radius: 12px;\n\n    font-size: 20px;\n\n    color: white;\n\n  }\n\n</style>\n\n\n\n<ion-content>\n\n  <ion-header>\n\n    <button class="menu" ion-button (click)="dash()">\n\n      <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n\n        <ion-icon name="ios-map-outline"></ion-icon>\n\n      </ion-avatar>\n\n    </button>\n\n\n\n    <ion-searchbar placeholder="Digite o nome da vacina" (ionInput)="getCity($event)" #searchQuery></ion-searchbar>\n\n      <ion-list [hidden]= hiddenCidades>\n\n        <button (click)="something(c)" ion-item *ngFor="let c of cidades">\n\n          <ion-option *ngFor="let c of vacinaSelect" [value] = "c.id_vacina" >{{ c.nome_vacina }}</ion-option>\n\n        </button>\n\n      </ion-list> \n\n\n\n      <button class="menu" (click)="perfil()" ion-button>\n\n        <ion-avatar style="font-size: 30px; color: black;">\n\n          <ion-icon name="ios-contact"></ion-icon>\n\n        </ion-avatar>\n\n      </button>\n\n  </ion-header>\n\n  <ion-grid>\n\n    <div class="content">\n\n      \n\n      <h1>Minhas Vacinas</h1>\n\n      <ion-row justify-content-end>\n\n        <button class="adc-vacina" (click)="ModalVacina()" ion-button>\n\n          <ion-icon class="addvacina" name="add-circle"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n\n\n      <!-- Card para cadastrar vacina -->\n\n      <div justify-content-center [hidden]= hiddenFormVacinas class="cad-vacina">\n\n        <ion-card class="card-nv-vacina">\n\n          <ion-label class="nomes-inputs">Nome da Vacina: </ion-label>\n\n          <ion-input type="text" class="inputs-vacinas"></ion-input>\n\n            \n\n          <ion-label class="nomes-inputs">Lote: </ion-label>\n\n          <ion-input type="text" class="inputs-vacinas" [formControl]="formulario.controls[\'vaidarLote\']" [(ngModel)]="lote"></ion-input>\n\n\n\n          <ion-label class="nomes-inputs">Data: </ion-label>\n\n          <ion-datetime [formControl]="formulario.controls[\'validarData\']" display-format="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n\n\n          <div class="botoes-final">\n\n            <button class="botao-salvar" (click)="doPOST()" [disabled]="!formulario.valid" ion-button> Salvar </button>\n\n             <button class="botao-cancelar" (click)="closeModal()" ion-button> Cancelar </button>\n\n          </div>\n\n        </ion-card>\n\n      </div>\n\n\n\n      <!-- Lista de vacinas cadastradas -->\n\n      <ion-row justify-content-center>\n\n        <ion-list *ngFor="let vacina of vacinas" >\n\n          <ion-card class="minhavacina">\n\n            <ion-card-header>\n\n              <p class="p-card">{{ vacina.vacina }}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <ion-label style="margin-bottom: 9px;"> Data: {{ vacina.data_vacina }} </ion-label>\n\n              <ion-label style="margin-top: -5px;"> Lote: {{ vacina.local }} </ion-label>\n\n            </ion-card-content>\n\n            <ion-row text-right [hidden]= hiddenCardVacinas>\n\n              <ion-col>\n\n                <button class="botao-editar" ion-button icon-left clear small (click)="editContact(vacina);">\n\n                  <ion-icon class="icone-editar" name="md-create"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card>\n\n        </ion-list>\n\n      </ion-row>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\tab2\tab2.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__["a" /* profileService */], __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__["a" /* VacinaService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__["a" /* profileService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__["a" /* VacinaService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Tab2Page);
    return Tab2Page;
}());

//# sourceMappingURL=tab2.js.map

/***/ }),

/***/ 174:
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

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(83);
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(174);
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedefinirSenhaPageModule", function() { return RedefinirSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redefinir_senha__ = __webpack_require__(82);
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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1__ = __webpack_require__(172);
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

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2__ = __webpack_require__(173);
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(279);
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacinasPageModule", function() { return VacinasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vacinas__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VacinasPageModule = /** @class */ (function () {
    function VacinasPageModule() {
    }
    VacinasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vacinas__["a" /* VacinasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vacinas__["a" /* VacinasPage */]),
            ],
        })
    ], VacinasPageModule);
    return VacinasPageModule;
}());

//# sourceMappingURL=vacinas.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyCodePageModule", function() { return VerifyCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_code__ = __webpack_require__(165);
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redefinir_senha_redefinir_senha__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__esqSenha_esqSenha__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(49);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\home\home.html"*/'<ion-content>\n\n  <body>\n\n    <div class="primeira-div">\n\n      <img src="assets/imgs/logo.png">\n\n      <h1 class="titulo-pagina">VACIMAPS</h1>\n\n    </div>\n\n    <form [formGroup]="formulario">\n\n      <ion-list inset>\n\n          <p>Usuário ou senha inválida!</p>\n\n        <ion-label class="label-home">E-mail</ion-label>\n\n        <ion-item>\n\n          <ion-input type="email" maxlength="75" [formControl]="formulario.controls[\'validEmail\']" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-label class="label-home senha">Senha</ion-label>\n\n        <ion-item>\n\n          <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'vaidSenha\']" [(ngModel)]="senha"></ion-input>\n\n        </ion-item>\n\n\n\n        <button (click)=\'login()\' [disabled]="!formulario.valid">Entrar</button>\n\n      </ion-list>\n\n    </form>\n\n    <div class="div-home">\n\n      <a class="botao-esqueci btn-others" (click)="esqSenha()">Esqueci minha senha</a>\n\n      <a class="botao-novo btn-others" (click)="cadastrar()">Novo por aqui?</a>\n\n    </div>\n\n  </body>\n\n</ion-content> \n\n\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\home\home.html"*/
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

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_redefinir_senha_redefinir_senha_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_esqSenha_esqSenha_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_verify_code_verify_code_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tab1_tab1_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tab2_tab2_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modal_modal_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_perfil_perfil_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_vacinas_vacinas_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modal_novas_vacinas_modal_novas_vacinas_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_configuracoes_configuracoes_module__ = __webpack_require__(167);
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
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/esqSenha/esqSenha.module#EsqSenhaPageModule', name: 'EsqSenhaPage', segment: 'esqSenha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-novas-vacinas/modal-novas-vacinas.module#ModalNovasVacinasPageModule', name: 'ModalNovasVacinasPage', segment: 'modal-novas-vacinas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redefinir-senha/redefinir-senha.module#RedefinirSenhaPageModule', name: 'RedefinirSenhaPage', segment: 'redefinir-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vacinas/vacinas.module#VacinasPageModule', name: 'VacinasPage', segment: 'vacinas', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover_module__["PopoverPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_modal_module__["ModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_perfil_perfil_module__["PerfilPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_vacinas_vacinas_module__["VacinasPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_modal_novas_vacinas_modal_novas_vacinas_module__["ModalNovasVacinasPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_configuracoes_configuracoes_module__["ConfiguracoesPageModule"]
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNovasVacinasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vacinas_vacina_services__ = __webpack_require__(85);
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





var ModalNovasVacinasPage = /** @class */ (function () {
    function ModalNovasVacinasPage(navCtrl, navParams, viewCtrl, modalController, toast, VacinaService, formBuilder, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalController = modalController;
        this.toast = toast;
        this.VacinaService = VacinaService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validarVacina: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            validarData: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            vaidarLote: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
        this.VacinaService.getVacinas().subscribe(function (vacinas) {
            _this.vacinaSelect = vacinas;
            _this.nome_vac = _this.vacinaSelect;
        });
        this.id_usuario_vacina = navParams.get('id_usuario_vacina');
        this.id_vacina = navParams.get('id_usuario_vacina');
        this.lote = navParams.get('lote');
        this.nome_vac = navParams.get('nome_vacina');
        this.id_vacina = navParams.get('id_vacina');
        this.data = navParams.get('data_vacina');
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    ModalNovasVacinasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalNovasVacinasPage');
    };
    /* Função que fecha modal */
    ModalNovasVacinasPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    /* Função que edita vacinas */
    ModalNovasVacinasPage.prototype.doPOST = function () {
        var _this = this;
        if (this.id_usuario_vacina) {
            console.log("PUT");
            this.datajson = {
                id_vacina: this.id_vacina,
                data_vacina: this.data,
                ds_local_vacina: this.lote,
            };
            var url = this.API_URL + "/usuario/vacina/" + this.id_usuario_vacina;
            this.http
                .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Vacina alterada com sucesso!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                    _this.navCtrl.pop();
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
                id_vacina: this.id_vacina,
                data_vacina: this.data,
                lote: this.lote,
            };
            console.log(this.datajson);
            this.http
                .post(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Erro ao cadastrar vacina!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
                else {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                    _this.navCtrl.pop();
                }
            });
        }
    };
    ModalNovasVacinasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-novas-vacinas',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\modal-novas-vacinas\modal-novas-vacinas.html"*/'<!-- Card para cadastrar vacina -->\n\n<ion-content padding>\n\n  <div justify-content-center [hidden]= hiddenFormVacinas class="cad-vacina">\n\n    <ion-card class="card-nv-vacina">\n\n\n\n      <div class="vacinas componentes">\n\n        <ion-label class="nomes-inputs">Nome da Vacina:</ion-label>\n\n        <ion-item>\n\n          <ion-select [formControl]="formulario.controls[\'validarVacina\']" [(ngModel)]="id_vacina" disabled="disabled" >\n\n            <ion-option *ngFor="let c of vacinaSelect" [value] = "c.id_vacina" [selected]="c.id_vacina == id_vacina">{{ c.nome_vacina }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n              \n\n      <div class="lote componentes">\n\n        <ion-label class="nomes-inputs">Lote: </ion-label>\n\n        <ion-input type="text" class="inputs-vacinas" [formControl]="formulario.controls[\'vaidarLote\']" [(ngModel)]="lote"></ion-input>\n\n      </div>\n\n\n\n      <div class="data componentes">\n\n        <ion-label class="nomes-inputs">Data: </ion-label>\n\n        <ion-item>\n\n          <ion-datetime [formControl]="formulario.controls[\'validarData\']" display-format="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <div class="botoes-final">\n\n        <button class="botao-salvar" (click)="doPOST()" [disabled]="!formulario.valid" ion-button> Salvar </button>\n\n        <button class="botao-cancelar" (click)="closeModal()" ion-button> Cancelar </button>\n\n      </div>\n\n\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\modal-novas-vacinas\modal-novas-vacinas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__vacinas_vacina_services__["a" /* VacinaService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__vacinas_vacina_services__["a" /* VacinaService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ModalNovasVacinasPage);
    return ModalNovasVacinasPage;
}());

//# sourceMappingURL=modal-novas-vacinas.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab1_tab1__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab2_tab2__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configuracoes_configuracoes__ = __webpack_require__(86);
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
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\modal\modal.html"*/'<!-- NOVO PERFIL -->\n\n<style>\n\n    @font-face {\n\n      font-family: Souliyo-Unicode;\n\n      src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n    }\n\n    ion-header{\n\n      background-color: white;\n\n      background-size: cover;\n\n      width: 100%;\n\n      height: 50px;\n\n      display: flex;\n\n      flex-direction: row;\n\n    }\n\n    .menu{\n\n      background: transparent;\n\n      box-shadow: none;\n\n      height: 49px;\n\n      padding: 2px;\n\n    }\n\n    #label-menu{\n\n      font-size: 11px;\n\n      text-transform: capitalize;\n\n      margin-left: -8px;\n\n      color: #FFFFFF;\n\n    }\n\n    body{\n\n      top: 0; \n\n      font-family: \'Souliyo-Unicode\', sans-serif;\n\n    }\n\n    ion-card{\n\n      height: 100%;\n\n      width: 100%;\n\n      margin-left: 0;\n\n    }\n\n    ion-card-content{\n\n      padding: 60px;\n\n      padding-top: 45px;\n\n    }\n\n    h1{\n\n      text-align: center;\n\n      color: #47525E;\n\n      font-size: 13pt;\n\n      font-weight: 900;\n\n      margin-top: 16px;\n\n      margin-left: 10px;\n\n    }\n\n    h3{\n\n      text-transform: uppercase;\n\n      color: rgba(71, 82, 94, 0.53);\n\n      font-size: 12px;\n\n      font-weight: 900;\n\n      text-align: center;\n\n    }\n\n    #nome{\n\n      font-size: 10px;\n\n      font-weight: 800;\n\n      font-style: normal;\n\n      line-height: normal;\n\n      color: #47525E;\n\n      margin-top: 8px;\n\n      margin-left: 18px;\n\n      text-transform: uppercase;\n\n    }\n\n    #data{\n\n      font-size: 10px;\n\n      font-weight: 800;\n\n      font-style: normal;\n\n      line-height: normal;\n\n      color: #47525E;\n\n      margin-top: 11px;\n\n      margin-left: 18px;\n\n      text-transform: uppercase;\n\n    }\n\n    ion-item{\n\n      background-color: white; color: black; align-content: center; width:210px; box-shadow: none; padding-left: 0;\n\n      border-bottom-color: transparent !important;\n\n      -webkit-box-shadow: transparent !important;\n\n      box-shadow: none !important;\n\n    }\n\n    ion-datetime{\n\n      color: black; font-size: 12px; top: 3px;\n\n    }\n\n    ion-datetime--padding-start{\n\n      padding: 0px;\n\n    }\n\n    a{\n\n      color: gray;\n\n    }\n\n    .campos-perfil{\n\n      color: black;\n\n      font-size: 14px;\n\n      font-weight: 900;\n\n      width: 100%;\n\n      align-content: center;\n\n      padding: 0;\n\n    }\n\n    .item-inner--border-color{\n\n      box-shadow: none !important;\n\n      -webkit-box-shadow: none !important;\n\n    }\n\n    .botao-alterar{\n\n      position: absolute;\n\n      left: 258px;\n\n      border-radius: 7px;\n\n      top: 17px;\n\n    }\n\n    .icone-alterar{\n\n      font-size: 27px;\n\n      color: #53CED3;\n\n    }\n\n    .label-md{\n\n      margin: 0 !important;\n\n    }\n\n    .botoes-final{\n\n      margin-top: 8%;\n\n      display: flex;\n\n      flex-direction: row;\n\n    }\n\n    .botao-final{\n\n      color: #47525E;\n\n      font-size: 10px;\n\n      cursor: pointer;\n\n      flex-direction: column;\n\n      width: 100px;\n\n      height: 40px;\n\n    }\n\n    .botao-sair{\n\n      margin-left: 65px;\n\n    }\n\n    .text-input{\n\n      margin: 0;\n\n    }\n\n    .botao-salvar{\n\n      background-color: #53CED3;\n\n      color: black;\n\n      margin-top: 50px;\n\n      border-radius: 50pt;\n\n      width: 100px;\n\n      height: 40px;\n\n      font-weight: 800;\n\n      left: 30%;\n\n      box-shadow: none;\n\n    }\n\n</style>\n\n\n\n  <body>\n\n    <ion-header>\n\n      <button class="menu" (click)="vacinas()" ion-button>\n\n        <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n\n          <ion-icon name="ios-map-outline"></ion-icon>\n\n        </ion-avatar>\n\n      </button>\n\n\n\n      <button class="menu" (click)="dash()" ion-button>\n\n        <ion-avatar style="font-size: 25px; background-color: #53CED3; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n\n          <ion-icon name="ios-medkit-outline"></ion-icon>\n\n        </ion-avatar>\n\n      </button>\n\n  \n\n      <h1>Olá, {{ nome }}!</h1>\n\n  \n\n      <ion-avatar class="menu" (click)="perfil()" style="font-size: 35px; color: black; margin-bottom: 6px; right: 5px; position: absolute;">\n\n        <ion-icon name="ios-contact"></ion-icon>\n\n      </ion-avatar>\n\n    </ion-header>\n\n    \n\n    <ion-card>\n\n      <ion-card-content>\n\n        <h3>Meu Perfil</h3>\n\n        <ion-row>\n\n          <ion-col text-center>\n\n            <ion-avatar style="align-content: center; font-size: 160px;">\n\n              <ion-icon name="ios-contact"></ion-icon>\n\n            </ion-avatar>\n\n          </ion-col>\n\n        </ion-row>\n\n            \n\n        <div id="div-config">\n\n          <ion-label id ="nome">Nome</ion-label>\n\n          <ion-item>\n\n            <ion-input class="campos-perfil" type="text" name="Nome" [(ngModel)]="nome"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-row text-right [hidden]= hiddenCardVacinas>\n\n            <ion-col>\n\n              <button class="botao-alterar" ion-button icon-left clear small (click)="editContact(vacina);">\n\n                <ion-icon class="icone-alterar" name="md-create"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-label id ="nome">E-mail</ion-label>\n\n          <ion-item>\n\n            <ion-input class="campos-perfil" type="email" name="E-mail" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-label id="data">Data de Nascimento</ion-label>\n\n          <ion-item>\n\n            <ion-datetime class="campos-perfil" display-format="DD/M/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n\n          </ion-item>\n\n\n\n          <div class="botoes-final">\n\n            <a class="botao-final" (click)="alterar()">Alterar senha</a>\n\n            <a class="botao-sair botao-final" (click)="Sair()">Sair da conta</a>\n\n          </div>\n\n\n\n          <button class="botao-salvar" ion-button block (click)="save()">Salvar</button>\n\n\n\n        </div>\n\n      </ion-card-content> \n\n    </ion-card>\n\n  </body>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\modal\modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__perfil_profile_services__["a" /* profileService */]])
    ], ModalPage);
    return ModalPage;
    var ModalPage_1;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 279:
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
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<style>\n\nion-tab{\n\n  color: #12614C;\n\n}\n\n</style>\n\n      \n\n    <ion-tabs [selectedIndex]="myIndex">\n\n      <ion-tab [root]="tab1Root" tabTitle="DashBoard - Mapa" tabIcon="customap"></ion-tab>\n\n      <ion-tab [root]="tab2Root" tabTitle="Minhas vacinas" tabIcon="customedicalbook"></ion-tab>\n\n    </ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vacinas_vacinas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_services__ = __webpack_require__(166);
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
    function DashboardPage(navCtrl, navParams, appCtrl, cityModal, modalCtrl, confCtrl, DashboardService, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.cityModal = cityModal;
        this.modalCtrl = modalCtrl;
        this.confCtrl = confCtrl;
        this.DashboardService = DashboardService;
        this.profileService = profileService;
        this.profileService.getUser().subscribe(function (usuario) {
            _this.nome = usuario.nome;
        });
        this.DashboardService.getCity().subscribe(function (cidades) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vacinas_vacinas__["a" /* VacinasPage */]);
    };
    DashboardPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */]);
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.initializeItems = function () {
        this.cidades = this.cidade;
    };
    DashboardPage.prototype.something = function (cidade) {
        // this.hiddenCidades = true;
        this.searchbar.clearInput(null);
        var modalcidade = this.cityModal.create('CidadeModalPage', {
            nome_cidade: cidade.nome_cidade,
            uf_cidade: cidade.uf_cidade,
        });
        modalcidade.present();
    };
    DashboardPage.prototype.getCity = function (ev) {
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */])
    ], DashboardPage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], DashboardPage.prototype, "nav", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\dashboard\dashboard.html"*/'<ion-content padding>\n\n\n\n  <ion-header>\n\n    <button class="menu"  (click)="vacinas()" ion-button>\n\n        <ion-avatar style="font-size: 25px; background-color: #53CED3; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n\n          <ion-icon name="ios-medkit-outline"></ion-icon>\n\n        </ion-avatar>\n\n    </button>\n\n\n\n    <ion-searchbar placeholder="Digite o seu destino" (ionInput)="getCity($event)" #searchQuery></ion-searchbar>\n\n    <ion-list [hidden]= hiddenCidades>\n\n      <button (click)="something(c)" ion-item *ngFor="let c of cidades">\n\n        <ion-option [value] = "c.nome_cidade">{{ c.nome_cidade }} - {{ c.uf_cidade }}</ion-option>\n\n      </button>\n\n    </ion-list> \n\n\n\n    <button class="menu" (click)="perfil()" ion-button>\n\n      <img class="imagem-header" (click)="perfil()" src="../../assets/imgs/foto-header.jpg">\n\n    </button>\n\n  </ion-header>\n\n\n\n  <img class="mapa" src="./assets/imgs/mapa3.png">\n\n\n\n  <img class="legenda" src="./assets/imgs/legenda.png">\n\n\n\n  <p>© 2020 VACIMAPS</p>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\dashboard\dashboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_services__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_services__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_2__perfil_profile_services__["a" /* profileService */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(22);
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
            validNome: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            validEmail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            vaidSenha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            vaidConfSenha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    CadastroPage.prototype.doPOST = function () {
        var _this = this;
        console.log("POST");
        if (this.ConfSenha == this.senha) {
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
                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
            });
        }
        else {
            this.toast.create({ message: "Senha diferentes!", duration: 3000, position: 'botton' }).present();
        }
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\cadastro\cadastro.html"*/'<ion-content>\n\n  <div class="primeira-div">\n\n    <img src="assets/imgs/logo.png">\n\n    <h1 class="titulo-pagina">VACIMAPS</h1>\n\n  </div>\n\n  <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n\n\n      <ion-label class="label-home senha">Nome</ion-label>\n\n      <ion-item>\n\n        <ion-input maxlength="75" type="text" [formControl]="formulario.controls[\'validNome\']" [(ngModel)]="nome"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-label class="label-home senha">E-mail</ion-label>\n\n      <ion-item>\n\n        <ion-input maxlength="75" type="email" [formControl]="formulario.controls[\'validEmail\']" [(ngModel)]="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-label class="label-home senha">Senha</ion-label>\n\n      <ion-item>\n\n        <ion-input maxlength="20"  type="password" [formControl]="formulario.controls[\'vaidSenha\']"[(ngModel)]="senha"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-label class="label-home senha" style="margin-left: 66px;">Repita a senha</ion-label>\n\n      <ion-item>\n\n          <ion-input maxlength="20"  type="password" [formControl]="formulario.controls[\'vaidConfSenha\']"[(ngModel)]="ConfSenha"></ion-input>\n\n        </ion-item>\n\n      <br>\n\n\n\n      <button class="botao-cadastrar" (click)="doPOST()" [disabled]="!formulario.valid">Cadastrar</button>\n\n\n\n      <button ion-button class="botao-voltar" (click)="Voltar()">Voltar</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
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
            selector: 'page-redefinir-senha',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\redefinir-senha\redefinir-senha.html"*/'<ion-content>\n\n  <h1 class="titulo-pagina">VACIMAPS</h1>\n\n  <form [formGroup]="formulario">\n\n  <ion-list inset>\n\n    <ion-label>\n\n      Alterar senha:\n\n    </ion-label>\n\n    \n\n    <ion-label class="label-home">Senha atual</ion-label>\n\n    <ion-item>\n\n      <ion-input type="password" maxlength="20"></ion-input>\n\n    </ion-item>\n\n    \n\n    <ion-label class="label-home">Nova senha</ion-label>\n\n    <ion-item>\n\n      <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'validSenha\']" [(ngModel)]="senha"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-label class="label-home">Confirmar nova senha</ion-label>\n\n    <ion-item>\n\n      <ion-input type="password" maxlength="20" [formControl]="formulario.controls[\'validConfSenha\']"[(ngModel)]="confSenha" placeholder="Confirmar Senha"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n\n\n    <button class="btn-voltar" (click)=\'reset_password()\' [disabled]="!formulario.valid">Alterar</button>\n\n\n\n    <button ion-button class="btn-voltar" (click)="Voltar()">Cancelar</button>\n\n  </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\redefinir-senha\redefinir-senha.html"*/,
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vacinas_vacinas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configuracoes_configuracoes__ = __webpack_require__(86);
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
            _this.email = usuario.email;
            _this.dt_nascimento = new Date(usuario.dt_nascimento).toISOString();
        });
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    PerfilPage.prototype.dash = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    PerfilPage.prototype.vacinas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__vacinas_vacinas__["a" /* VacinasPage */]);
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
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\perfil\perfil.html"*/'<!-- NOVO MODAL -->\n\n<style>\n\n  ion-datetime--padding-start{\n\n    padding: 0px;\n\n  }\n\n</style>\n\n\n\n<body>\n\n  <ion-header>\n\n    <button class="menu" (click)="vacinas()" ion-button>\n\n      <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n\n        <ion-icon name="ios-map-outline"></ion-icon>\n\n      </ion-avatar>\n\n    </button>\n\n\n\n    <button class="menu" (click)="dash()" ion-button>\n\n      <ion-avatar style="font-size: 25px; background-color: #53CED3; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n\n        <ion-icon name="ios-medkit-outline"></ion-icon>\n\n      </ion-avatar>\n\n    </button>\n\n\n\n    <h1>Olá, {{ nome }}!</h1>\n\n\n\n    <img class="imagem-header" src="../../assets/imgs/foto-header.jpg">\n\n  </ion-header>\n\n  \n\n  <ion-card>\n\n    <ion-card-content>\n\n      <h3 class="titulo-perfil">Meu Perfil</h3>\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <img src="../../assets/imgs/foto-perfil-fabio.png">\n\n        </ion-col>\n\n      </ion-row>\n\n          \n\n      <div id="div-config">\n\n        <div class="componentes">\n\n          <ion-label id ="nome">Nome</ion-label>\n\n          <ion-item>\n\n            <ion-input class="campos-perfil" type="text" name="Nome" [(ngModel)]="nome"></ion-input>\n\n          </ion-item>\n\n        </div>\n\n\n\n        <div class="componentes">\n\n          <ion-row text-right [hidden]= hiddenCardVacinas>\n\n            <ion-col>\n\n              <button class="botao-alterar" ion-button icon-left clear small (click)="editContact(vacina);">\n\n                <ion-icon class="icone-alterar" name="md-create"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="componentes">\n\n          <ion-label id ="nome">E-mail</ion-label>\n\n          <ion-item>\n\n            <ion-input class="campos-perfil" type="email" name="E-mail" [(ngModel)]="email" disabled="true" ></ion-input>\n\n          </ion-item>\n\n        </div>\n\n\n\n        <div class="componentes">\n\n          <ion-label id="data">Data de Nascimento</ion-label>\n\n          <ion-item>\n\n            <ion-datetime class="campos-perfil" display-format="DD/M/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n\n          </ion-item>\n\n        </div>\n\n\n\n        <div class="botoes-final">\n\n          <a class="botao-final" (click)="alterar()">Alterar senha</a>\n\n          <a class="botao-sair botao-final" (click)="Sair()">Sair da conta</a>\n\n        </div>\n\n\n\n        <button class="botao-salvar" ion-button block (click)="save()">Salvar</button>\n\n\n\n      </div>\n\n    </ion-card-content> \n\n  </ion-card>\n\n</body>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\perfil\perfil.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__profile_services__["a" /* profileService */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacinasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__perfil_perfil__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VacinasPage = /** @class */ (function () {
    function VacinasPage(navCtrl, toast, profileService, http, modalCtrl, VacinaService, formBuilder, appCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.profileService = profileService;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.VacinaService = VacinaService;
        this.formBuilder = formBuilder;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validarVacina: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            validarData: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            validarLote: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
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
    /* Funçōes para alterar as páginas */
    VacinasPage.prototype.dash = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    VacinasPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__perfil_perfil__["a" /* PerfilPage */]);
    };
    /* Função que exibe as vacinas cadastradas pelo usuario */
    VacinasPage.prototype.getVacinas = function () {
        var _this = this;
        this.profileService.getUser().subscribe(function (usuario) {
            _this.usuario = usuario;
            if (usuario.vacinas != 'Nenhuma vacina cadastrada!') {
                _this.vacinas = usuario.vacinas;
                _this.user_vacinas = _this.vacinas;
            }
        });
    };
    /* Função que abre o modal para adicionar/editar */
    VacinasPage.prototype.ModalVacina = function () {
        var _this = this;
        var modalPage = this.modalCtrl.create('ModalNovasVacinasPage', { 'nome_vacina': "",
            'data_vacina': "",
            'lote': "",
            'id_usuario_vacina': "" });
        modalPage.onDidDismiss(function () {
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
        modalPage.present();
        //this.hiddenFormVacinas = false;
    };
    /* Função que fecha o modal */
    VacinasPage.prototype.closeModal = function () {
        this.nome_vac = [];
        this.data = "";
        this.lote = '';
        this.id_usuario_vacina = '';
        this.vacina = '';
        this.hiddenFormVacinas = true;
        this.hiddenCardVacinas = false;
    };
    /* Função que deleta as vacinas cadastradas */
    VacinasPage.prototype.doDELETE = function (vacina) {
        var _this = this;
        console.log("DELETE");
        var url = this.API_URL + "/usuario/vacina/" + vacina.id;
        this.http
            .delete(url, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
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
    VacinasPage.prototype.getVacina = function (ev) {
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
    /* Função para editar vacina */
    VacinasPage.prototype.editContact = function (vacina) {
        var _this = this;
        console.log(vacina);
        this.data = new Date(vacina.data_vacina).toISOString();
        this.lote = vacina.local;
        this.id_usuario_vacina = vacina.id;
        var modalPage = this.modalCtrl.create('ModalNovasVacinasPage', { 'nome_vacina': vacina.vacina,
            'data_vacina': this.data,
            'lote': this.lote,
            'id_vacina': vacina.id_vacina,
            'id_usuario_vacina': this.id_usuario_vacina });
        modalPage.onDidDismiss(function () {
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
        modalPage.present();
    };
    VacinasPage.prototype.initializeItems = function () {
        this.vacinas = this.user_vacinas;
    };
    VacinasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VacinasPage');
    };
    VacinasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vacinas',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\vacinas\vacinas.html"*/'<ion-content>\n\n  <ion-header>\n\n    <button class="menu" ion-button (click)="dash()">\n\n      <ion-avatar style="font-size: 25px; background-color: #53D35B; border-radius: 50pt; padding: 7px 10px; margin-bottom: 6px;">\n\n        <ion-icon name="ios-map-outline"></ion-icon>\n\n      </ion-avatar>\n\n    </button>\n\n\n\n    <ion-searchbar placeholder="Digite o nome da vacina" (ionInput)="getCity($event)" #searchQuery></ion-searchbar>\n\n      <ion-list [hidden]= hiddenCidades>\n\n        <button (click)="something(c)" ion-item *ngFor="let c of cidades">\n\n          <ion-option *ngFor="let c of vacinaSelect" [value] = "c.id_vacina" >{{ c.nome_vacina }}</ion-option>\n\n        </button>\n\n      </ion-list> \n\n\n\n      <img class="imagem-header" (click)="perfil()" src="../../assets/imgs/foto-header.jpg">\n\n  </ion-header>\n\n\n\n  <ion-grid>\n\n    <div class="content">\n\n      \n\n      <h1>Minhas Vacinas</h1>\n\n      <ion-row justify-content-end>\n\n        <button class="adc-vacina" (click)="ModalVacina()" ion-button>\n\n          <ion-icon class="addvacina" name="add-circle"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n\n\n      <!-- Lista de vacinas cadastradas -->\n\n      <ion-row justify-content-center>\n\n        <ion-list *ngFor="let vacina of vacinas" >\n\n          <ion-card class="minhavacina">\n\n            <ion-card-header>\n\n              <p class="p-card">{{ vacina.vacina }}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <ion-label style="margin-bottom: 9px;"> Data: {{ vacina.data_vacina }} </ion-label>\n\n              <ion-label style="margin-top: -5px;"> Lote: {{ vacina.local }} </ion-label>\n\n            </ion-card-content>\n\n            <ion-row text-right [hidden]= hiddenCardVacinas>\n\n              <ion-col>\n\n                <button class="botao-editar" ion-button icon-left clear small (click)="editContact(vacina);">\n\n                  <ion-icon class="icone-editar" name="md-create"></ion-icon>\n\n                </button>\n\n                <button class="botao-excluir" ion-button icon-left clear small (click)="doDELETE(vacina);">\n\n                  <ion-icon class="icone-excluir" name="ios-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card>\n\n        </ion-list>\n\n      </ion-row>\n\n\n\n    </div>\n\n  </ion-grid>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\vacinas\vacinas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */], __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__["a" /* VacinaService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__["a" /* VacinaService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], VacinasPage);
    return VacinasPage;
}());

//# sourceMappingURL=vacinas.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacinaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__ = __webpack_require__(31);
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
            selector: 'page-configuracoes',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\configuracoes\configuracoes.html"*/'<ion-content>\n\n  <body>\n\n    <div class="primeira-div">\n\n      <img src="assets/imgs/logo.png">\n\n      <h1 class="titulo-pagina">VACIMAPS</h1>\n\n    </div>\n\n\n\n    <h1 class="titulo-pagina">Alterar senha</h1>\n\n        \n\n        <div id="div-config">\n\n          <div class="campos">\n\n            <p class="label-home">Senha atual</p>\n\n            <ion-item>\n\n              <ion-input type="password" [(ngModel)]="senhaAtual" [formControl]="formulario.controls[\'validarSenha\']" ></ion-input>\n\n            </ion-item>\n\n          </div>\n\n\n\n          <div class="campos">\n\n            <p class="label-home">Nova senha</p>\n\n            <ion-item>   \n\n              <ion-input type="password" [(ngModel)]="novasenha" [formControl]="formulario.controls[\'validarNovaSenha\']" ></ion-input>\n\n            </ion-item>\n\n          </div>\n\n\n\n          <div class="campos">\n\n            <p class="label-home">Repita a senha</p>\n\n            <ion-item>      \n\n              <ion-input type="password" [(ngModel)]="confsenha" [formControl]="formulario.controls[\'validarConfSenha\']" ></ion-input>\n\n            </ion-item>\n\n          </div>\n\n        </div>\n\n\n\n        <div class="botoes">\n\n          <button ion-button class="botao-salvar" (click)="doPut()" [disabled]="!formulario.valid" color="light">Alterar</button>\n\n          <button ion-button class="botao-cancelar" (click)="closeModal()">Cancelar</button>\n\n        </div>\n\n  </body>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\configuracoes\configuracoes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map