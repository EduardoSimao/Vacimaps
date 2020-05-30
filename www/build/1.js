webpackJsonp([1],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacinaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacinasPageModule", function() { return VacinasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vacinas__ = __webpack_require__(309);
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

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacinasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__perfil_perfil__ = __webpack_require__(306);
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
    function VacinasPage(navCtrl, vacinaModal, toast, profileService, http, appCtrl, VacinaService, formBuilder, navParams, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.vacinaModal = vacinaModal;
        this.toast = toast;
        this.profileService = profileService;
        this.http = http;
        this.appCtrl = appCtrl;
        this.VacinaService = VacinaService;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validarVacina: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            validarData: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            vaidarLote: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
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
    VacinasPage.prototype.dash = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    VacinasPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__perfil_perfil__["a" /* PerfilPage */]);
    };
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
    VacinasPage.prototype.initializeItems = function () {
        this.vacinas = this.user_vacinas;
    };
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
    VacinasPage.prototype.closeModal = function () {
        this.nome_vac = [];
        this.data = "";
        this.lote = '';
        this.id_usuario_vacina = '';
        this.vacina = '';
        this.hiddenFormVacinas = true;
        this.hiddenCardVacinas = false;
    };
    VacinasPage.prototype.doPOST = function () {
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
                .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
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
                .post(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
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
    VacinasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VacinasPage');
    };
    VacinasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vacinas',template:/*ion-inline-start:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/vacinas/vacinas.html"*/'<!--\n  Generated template for the VacinasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>vacinas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/victoria.rodovalho/Documents/Vacimaps/src/pages/vacinas/vacinas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */], __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__["a" /* VacinaService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__perfil_profile_services__["a" /* profileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__["a" /* VacinaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__vacinas_vacina_services__["a" /* VacinaService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */]) === "function" && _k || Object])
    ], VacinasPage);
    return VacinasPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=vacinas.js.map

/***/ })

});
//# sourceMappingURL=1.js.map