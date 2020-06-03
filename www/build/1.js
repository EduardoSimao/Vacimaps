webpackJsonp([1],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeModalPageModule", function() { return CidadeModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cidade_modal__ = __webpack_require__(305);
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

/***/ 305:
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
            selector: 'page-cidade-modal',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/cidade-modal/cidade-modal.html"*/'<!--\n  Generated template for the CidadeModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  ion-content{\n    font-family: \'Souliyo-Unicode\', sans-serif;\n    background-color: #97D9DB;\n    height: 618px;\n    top: 49px\n  }\n  body{\n    height: 93%;\n    width: 93%;\n    border-radius: 5px;\n    top: 3%;\n    left: 4%;\n    background-color: white;\n  }\n  h1{\n    color: #47525E;\n    text-align: center;\n    font-size: 18px;\n    font-weight: 900;\n    text-transform: uppercase;\n  }\n  .modal{\n    float: right;\n    color: black;\n    font-size: 20pt;\n    padding-top: 10px;\n    padding-right: 15px;\n  }\n  ion-list{\n    width: 100%;\n    background-color: #F6F5F5;\n  }\n  ion-label{\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #47525E;\n  }\n  .letrinha{\n    font-size: 7px; color: #000000; margin-top: 0px;\n  }\n  .letrinha2{\n    font-size: 7px;\n    color: #47525E;\n    margin-top: 0;\n    text-transform: uppercase;\n  }\n  .sim-nao{\n    background-color: #F95F62;\n    border-radius: 4pt;\n    color: white;\n    text-transform: uppercase;\n    font-weight: 900;\n    width: 30pt;\n    height: 15pt;\n    font-size: 10px;\n    text-align: center;\n    padding-top: 4px;\n  }\n  .doenca{\n    background-color: #909090;\n    border-radius: 4pt;\n    color: white;\n    text-transform: uppercase;\n    font-weight: 900;\n    width: 40pt;\n    height: 15pt;\n    padding-top: 4px;\n    font-size: 10px;\n    text-align: center;\n    margin-bottom: 1px;\n  }\n  .colunas1{\n    background-color: #909090;\n    color: white;\n    font-weight: 900;\n    text-transform: uppercase;\n    padding-top: 3px;\n    height: 15pt;\n    font-size: 10px;\n    border-radius: 4pt;\n    text-align: center;\n  }\n  .colunas2{\n    background-color: #53D35B;\n    color: white;\n    font-weight: 900;\n    text-transform: uppercase;\n    height: 15pt;\n    font-size: 10px;\n    border-radius: 4pt;\n    margin-left: 10px;\n    text-align: center;\n    padding-top: 4px;\n    margin-bottom: 4px;\n    margin-right: 10px;\n  }\n  .dengue{\n    width: 40pt;\n  }\n  .leptospirose{\n    width: 70pt;\n  }\n  .linhas{\n    display: flex;\n    flex-direction: row;\n    width: 210px;\n  }\n  .linhas-2{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .paragrafo-doencas{\n    font-size: 10px;\n  }\n  .div-doencas{\n    display: flex;\n    flex-direction: column;\n    padding: 0px 25px;\n  }\n  .titulo-doencas-endemicas{\n    text-align: center;\n    font-weight: 900;\n    margin-bottom: 0;\n  }\n  .botoes-doencas-endemicas{\n    display: flex;\n    flex-direction: row;\n  }\n  .card-content-md{\n    border: 1px solid #53CED3;\n    padding: 6px;\n  }\n</style>\n\n<ion-content>\n\n<body>\n  <a class="modal" (click)="closeModal()"> X</a>\n\n  <h1>{{ nome_cidade }} - {{ uf_cidade }}</h1>\n\n    <div class="div-doencas">\n\n      <div class="linhas">\n        <ion-label class="">Vacinação obrigatória:</ion-label> \n        <p class="sim-nao">Não</p>\n      </div>\n\n      <div class="linhas">\n        <ion-label class="">Vacinação sugerida:</ion-label>\n        <div class="linhas-2">\n          <p class="doenca">Dengue</p>\n          <p class="letrinha">Pendente</p>\n        </div>\n      </div>\n\n\n      <div class="bloco-doencas">\n        <ion-label class="titulo-doencas-endemicas">Doenças endemicas da região</ion-label>\n\n        <div class="botoes-doencas-endemicas">\n          <p class="{{ propBtn1 }} dengue" (click) = \'showDengue()\'>Dengue</p>\n          <p class="{{ propBtn2 }} leptospirose" (click) = \'showLep()\'>Leptospirose</p>\n        </div>\n\n        <p class="letrinha2" [hidden] = hiddentxt>Clique na doença para ter mais informações</p>\n      </div>\n      \n      <ion-card  [hidden]= cardLep>\n        <ion-card-content>\n          <p class="paragrafo-doencas">\n            <b>Profilaxia e recomendações:</b> evite o contato com água ou lama de enchentes ou esgotos, ou qualquer outro que possa estar contaminado pela urina dos ratos. Procure o posto de saúde mais próximo em caso de suspeita de contaminação. <br><br>\n            <b>Sinais e sintomas:</b> o período de incubação da doença varia de 1 a 30 dias, sendo mais frequente entre 5 a 14 dias. <br><br>\n            <b>Fase precoce (leptospirêmica):</b> Febre abrupta; Dores de cabeça; Dores e desconforto nos músculos. <br><br>\n            <b>Fase tardia (fase imune):</b> Ictericia (pele amarelada ou alaranjada); Insuficiência renal; Hemorragia (principalmente pulmonar).\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card  [hidden]= cardDengue>\n        <ion-card-content>\n          <p class="paragrafo-doencas">\n              A dengue é uma doença causada por um vírus e transmitida por um mosquito denominado Aedes aegypti, com 3 a 5 dias de incubação. <br><br>\n              <b>Profilaxia e recomendações:</b> uso de repelente é indispensável para evitar a doença, sendo alguns específicos para este. Deve-se tomar cuidado, principalmente, no verão. Evitar antitérmicos que contenham ácido acetilsalicílico e antiinflamatórios. Em caso de suspeita da doença, procure o posto médico mais próximo. <br> <br>\n              <b>Sinais e sintomas:</b> Febre alta; Cefaleia; Dor retroorbitária; Mialgia; Artralgia; Náuseas e vômitos; Diarreia; Exantema; Manifestações hemorrágicas.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  \n</body>\n</ion-content>  '/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/cidade-modal/cidade-modal.html"*/,
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
//# sourceMappingURL=1.js.map