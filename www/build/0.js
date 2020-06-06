webpackJsonp([0],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeModalPageModule", function() { return CidadeModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cidade_modal__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CidadeModalPageModule = /** @class */ (function () {
    function CidadeModalPageModule() {
    }
    CidadeModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cidade_modal__["a" /* CidadeModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cidade_modal__["a" /* CidadeModalPage */]),
            ],
        })
    ], CidadeModalPageModule);
    return CidadeModalPageModule;
}());

//# sourceMappingURL=cidade-modal.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadeModalPage; });
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
 * Generated class for the CidadeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CidadeModalPage = /** @class */ (function () {
    function CidadeModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        if (this.navParams.data.nome_cidade &&
            this.navParams.data.uf_cidade) {
            this.nome_cidade = this.navParams.data.nome_cidade;
            this.uf_cidade = this.navParams.data.uf_cidade;
        }
        this.cardDengue = true;
        this.cardLep = true;
        this.hiddentxt = false;
        this.propBtn1 = "colunas2";
        this.propBtn2 = "colunas2";
    }
    CidadeModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CidadeModalPage');
    };
    CidadeModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CidadeModalPage.prototype.showDengue = function () {
        this.propBtn1 = "colunas2";
        this.propBtn2 = "colunas1";
        this.hiddentxt = true;
        this.cardLep = true;
        this.cardDengue = false;
    };
    CidadeModalPage.prototype.showLep = function () {
        this.propBtn1 = "colunas1";
        this.propBtn2 = "colunas2";
        this.hiddentxt = true;
        this.cardLep = false;
        this.cardDengue = true;
    };
    CidadeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cidade-modal',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\cidade-modal\cidade-modal.html"*/'<ion-content>\n\n\n\n  <body>\n\n    <a class="modal" (click)="closeModal()"> X</a>\n\n\n\n    <h1 class="titulo-pagina">{{ nome_cidade }} - {{ uf_cidade }}</h1>\n\n\n\n      <div class="div-doencas">\n\n\n\n        <div class="linhas">\n\n          <ion-label class="">Vacinação obrigatória:</ion-label> \n\n          <p class="sim-nao">Não</p>\n\n        </div>\n\n\n\n        <div class="linhas">\n\n          <ion-label class="">Vacinação sugerida:</ion-label>\n\n          <div class="linhas-2">\n\n            <p class="doenca">Dengue</p>\n\n            <p class="letrinha">Pendente</p>\n\n          </div>\n\n        </div>\n\n\n\n\n\n        <div class="bloco-doencas">\n\n          <ion-label class="titulo-doencas-endemicas">Doenças endemicas da região</ion-label>\n\n\n\n          <div class="botoes-doencas-endemicas">\n\n            <p class="{{ propBtn1 }} dengue" (click) = \'showDengue()\'>Dengue</p>\n\n            <p class="{{ propBtn2 }} leptospirose" (click) = \'showLep()\'>Leptospirose</p>\n\n          </div>\n\n\n\n          <p class="letrinha2" [hidden] = hiddentxt>Clique na doença para ter mais informações</p>\n\n        </div>\n\n        \n\n        <ion-card  [hidden]= cardLep>\n\n          <ion-card-content>\n\n            <p class="paragrafo-doencas">\n\n              <b>Profilaxia e recomendações:</b> evite o contato com água ou lama de enchentes ou esgotos, ou qualquer outro que possa estar contaminado pela urina dos ratos. Procure o posto de saúde mais próximo em caso de suspeita de contaminação. <br><br>\n\n              <b>Sinais e sintomas:</b> o período de incubação da doença varia de 1 a 30 dias, sendo mais frequente entre 5 a 14 dias. <br><br>\n\n              <b>Fase precoce (leptospirêmica):</b> Febre abrupta; Dores de cabeça; Dores e desconforto nos músculos. <br><br>\n\n              <b>Fase tardia (fase imune):</b> Ictericia (pele amarelada ou alaranjada); Insuficiência renal; Hemorragia (principalmente pulmonar).\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card  [hidden]= cardDengue>\n\n          <ion-card-content>\n\n            <p class="paragrafo-doencas">\n\n                A dengue é uma doença causada por um vírus e transmitida por um mosquito denominado Aedes aegypti, com 3 a 5 dias de incubação. <br><br>\n\n                <b>Profilaxia e recomendações:</b> uso de repelente é indispensável para evitar a doença, sendo alguns específicos para este. Deve-se tomar cuidado, principalmente, no verão. Evitar antitérmicos que contenham ácido acetilsalicílico e antiinflamatórios. Em caso de suspeita da doença, procure o posto médico mais próximo. <br> <br>\n\n                <b>Sinais e sintomas:</b> Febre alta; Cefaleia; Dor retroorbitária; Mialgia; Artralgia; Náuseas e vômitos; Diarreia; Exantema; Manifestações hemorrágicas.\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </div>\n\n    \n\n  </body>\n\n</ion-content>  '/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\cidade-modal\cidade-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], CidadeModalPage);
    return CidadeModalPage;
}());

//# sourceMappingURL=cidade-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map