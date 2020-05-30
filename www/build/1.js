webpackJsonp([1],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNovasVacinasPageModule", function() { return ModalNovasVacinasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_novas_vacinas__ = __webpack_require__(303);
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

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNovasVacinasPage; });
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


var ModalNovasVacinasPage = /** @class */ (function () {
    function ModalNovasVacinasPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalNovasVacinasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalNovasVacinasPage');
    };
    ModalNovasVacinasPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalNovasVacinasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-novas-vacinas',template:/*ion-inline-start:"C:\Users\User\Documents\Vacimaps\src\pages\modal-novas-vacinas\modal-novas-vacinas.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n  .card-nv-vacina{\n\n    background: #97D9DB;\n\n    width: 330px;\n\n    height: 420px;\n\n    border-radius: 3px;\n\n    box-shadow: none !important;\n\n    padding: 40px 15px;\n\n  }\n\n  .nomes-inputs{\n\n    font-size: 10px;\n\n    font-weight: 550;\n\n  }\n\n  .inputs-vacinas{\n\n    border: 1px solid #02AEB4;\n\n  }\n\n  .botoes-final{\n\n    display: flex;\n\n    flex-direction: column;\n\n    align-items: center;\n\n  }\n\n  .botao-salvar{\n\n    width: 110px;\n\n    height: 47px;\n\n    color: white;\n\n    border-radius: 50pt;\n\n    font-family: roboto;\n\n    font-size: 15px;\n\n    text-transform: uppercase;\n\n    background-color: #53D35B;\n\n    margin-top: 40px;\n\n    font-weight: bolder;\n\n  }\n\n  .botao-cancelar{\n\n    width: 100px;\n\n    height: 37px;\n\n    color: #97D9DB;\n\n    margin-top: 20px;\n\n    border-radius: 50pt;\n\n    font-family: roboto;\n\n    font-size: 15px;\n\n    font-weight: 600;\n\n    background-color: white;\n\n    margin-bottom: 24px;\n\n  }\n\n</style>\n\n\n\n<ion-modal>\n\n  <ion-content padding>\n\n    <!-- Card para cadastrar vacina -->\n\n    <div justify-content-center [hidden]= hiddenFormVacinas class="cad-vacina">\n\n      <ion-card class="card-nv-vacina">\n\n        <ion-label class="nomes-inputs">Nome da Vacina: </ion-label>\n\n        <ion-input type="text" class="inputs-vacinas"></ion-input>\n\n              \n\n        <ion-label class="nomes-inputs">Lote: </ion-label>\n\n        <ion-input type="text" class="inputs-vacinas" [formControl]="formulario.controls[\'vaidarLote\']" [(ngModel)]="lote"></ion-input>\n\n\n\n        <ion-label class="nomes-inputs">Data: </ion-label>\n\n        <ion-datetime [formControl]="formulario.controls[\'validarData\']" display-format="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n\n\n        <div class="botoes-final">\n\n          <button class="botao-salvar" (click)="doPOST()" [disabled]="!formulario.valid" ion-button> Salvar </button>\n\n          <button class="botao-cancelar" (click)="closeModal()" ion-button> Cancelar </button>\n\n        </div>\n\n      </ion-card>\n\n    </div>\n\n  </ion-content>\n\n</ion-modal>\n\n'/*ion-inline-end:"C:\Users\User\Documents\Vacimaps\src\pages\modal-novas-vacinas\modal-novas-vacinas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ModalNovasVacinasPage);
    return ModalNovasVacinasPage;
}());

//# sourceMappingURL=modal-novas-vacinas.js.map

/***/ })

});
//# sourceMappingURL=1.js.map