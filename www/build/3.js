webpackJsonp([3],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNovasVacinasPage; });
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


var ModalNovasVacinasPage = /** @class */ (function () {
    function ModalNovasVacinasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalNovasVacinasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalNovasVacinasPage');
    };
    ModalNovasVacinasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-novas-vacinas',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal-novas-vacinas/modal-novas-vacinas.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  .card-nv-vacina{\n    background: #97D9DB;\n    width: 330px;\n    height: 420px;\n    border-radius: 3px;\n    box-shadow: none !important;\n    padding: 40px 15px;\n  }\n  .nomes-inputs{\n    font-size: 10px;\n    font-weight: 550;\n  }\n  .inputs-vacinas{\n    border: 1px solid #02AEB4;\n  }\n  .botoes-final{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .botao-salvar{\n    width: 110px;\n    height: 47px;\n    color: white;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    text-transform: uppercase;\n    background-color: #53D35B;\n    margin-top: 40px;\n    font-weight: bolder;\n  }\n  .botao-cancelar{\n    width: 100px;\n    height: 37px;\n    color: #97D9DB;\n    margin-top: 20px;\n    border-radius: 50pt;\n    font-family: roboto;\n    font-size: 15px;\n    font-weight: 600;\n    background-color: white;\n    margin-bottom: 24px;\n  }\n</style>\n\n<ion-modal>\n  <ion-content padding>\n    <!-- Card para cadastrar vacina -->\n    <div justify-content-center [hidden]= hiddenFormVacinas class="cad-vacina">\n      <ion-card class="card-nv-vacina">\n        <ion-label class="nomes-inputs">Nome da Vacina: </ion-label>\n        <ion-input type="text" class="inputs-vacinas"></ion-input>\n              \n        <ion-label class="nomes-inputs">Lote: </ion-label>\n        <ion-input type="text" class="inputs-vacinas" [formControl]="formulario.controls[\'vaidarLote\']" [(ngModel)]="lote"></ion-input>\n\n        <ion-label class="nomes-inputs">Data: </ion-label>\n        <ion-datetime [formControl]="formulario.controls[\'validarData\']" display-format="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n        <div class="botoes-final">\n          <button class="botao-salvar" (click)="doPOST()" [disabled]="!formulario.valid" ion-button> Salvar </button>\n          <button class="botao-cancelar" (click)="closeModal()" ion-button> Cancelar </button>\n        </div>\n      </ion-card>\n    </div>\n  </ion-content>\n</ion-modal>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/modal-novas-vacinas/modal-novas-vacinas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalNovasVacinasPage);
    return ModalNovasVacinasPage;
}());

//# sourceMappingURL=modal-novas-vacinas.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNovasVacinasPageModule", function() { return ModalNovasVacinasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_novas_vacinas__ = __webpack_require__(218);
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

/***/ })

});
//# sourceMappingURL=3.js.map