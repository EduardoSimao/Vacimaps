webpackJsonp([1],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(292);
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function ConfiguracoesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesPage');
    };
    ConfiguracoesPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\configuracoes\configuracoes.html"*/'<style>\n\n  @font-face {\n\n      font-family: Souliyo-Regular;\n\n      src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n  }\n\n  ion-content{\n\n    font-family: \'Souliyo Regular\', sans-serif; height:70%; width:95%; border-radius: 5px; top: 7%; left: 3%; \n\n  }\n\n  h1{\n\n      color: black; text-align: center; font-size: 18px; font-weight: 100; font-style: normal; line-height: normal; padding-top: 10px;\n\n    }\n\n  .div-config{\n\n    background-color: #F6F5F5;  \n\n  }\n\n  .input-email{\n\n    text-align: center; font-size: 12px; color: #C4C4C4;\n\n  }\n\n \n\n  ion-input{\n\n    left: 4px; height: 30px; \n\n  }\n\n  input::placeholder{\n\n    text-align: center; color: #B3B3B3; font-size: 12px; background-color: #FFFFFF; height: 30px;\n\n  }\n\n  p{\n\n    font-size: 12px; color: #C4C4C4; \n\n  }\n\n  .btn-salvar{\n\n    width: 50px; \n\n    height: 20px; \n\n    font-size: 12px; \n\n    align-items: center; \n\n    margin-left: 15px; \n\n    margin-top: 60px; \n\n    align-content: flex-end; \n\n    background-color: #4FBA6E;\n\n    float: right;\n\n    color: #FFFFFF;\n\n  }\n\n  .btn-back{\n\n    color: #12614C; font-size: 10px;\n\n  }\n\n  ion-icon {\n\n    font-size: 160px;\n\n    vertical-align: auto;\n\n  }\n\n  a{\n\n    color: gray;\n\n  }\n\n</style>\n\n\n\n<ion-content>\n\n  <body>\n\n\n\n      <a (click)="closeModal()"> <ion-icon name="close" style="font-size: 30px; float: right; padding-top: 10px;"></ion-icon></a>\n\n\n\n    <h1>Configurações</h1>\n\n    \n\n    <div class="div-config">\n\n      <p>E-mail</p>\n\n      <ion-input class="input-email" type="email" placeholder="joao_silva@email.com.br" disabled></ion-input>\n\n\n\n      <p>Alterar senha</p>\n\n        <ion-input  type="password" placeholder="Digite a senha atual"></ion-input>\n\n    \n\n        <ion-input type="password" placeholder="Digite a nova senha"></ion-input>\n\n\n\n        <ion-input type="password" placeholder="Confirme a nova senha"></ion-input>\n\n      <br>\n\n    </div>\n\n\n\n    <button ion-button class="btn-salvar" (click)="save()" color="light">Salvar</button>\n\n  </body>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\configuracoes\configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ })

});
//# sourceMappingURL=1.js.map