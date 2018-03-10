webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n    <div class=\"col-6 col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-body p-3 clearfix  bg-success\">\n            <i class=\"far fa-smile fa-5x  float-left\"></i>\n             <div class=\"h5  mb-0 mt-2 float-right\">{{ResolvedCount}}<br> {{ 'demo.ResolvedTask' | translate }}</div>\n            <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n          </div>\n          <div class=\"card-footer px-3 py-2\">\n            <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/components/resolvedtasks']\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6 col-lg-4\">\n          <div class=\"card\">\n            <div class=\"card-body p-3 clearfix bg-warning\">\n              <i class=\"fa fa-support fa-5x  float-left\"></i>\n              <div class=\"h5  mb-0 mt-2 float-right\">{{PendingCount}}<br> {{ 'demo.Pendingtask' | translate }}</div>\n              <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n            </div>\n            <div class=\"card-footer px-3 py-2\">\n              <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/components/pendigtasks']\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-6 col-lg-4\">\n          <div class=\"card\">\n            <div class=\"card-body p-3 clearfix bg-danger\">\n              <i class=\"far fa-frown fa-5x  float-left\"></i>\n              <div class=\"h5  mb-0 mt-2 float-right\">{{ActiveCount}}<br> {{ 'demo.Activealerts' | translate }}</div>\n              <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n            </div>\n            <div class=\"card-footer px-3 py-2\">\n              <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/components/activealerts']\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n            </div>\n          </div>\n        </div>\n    </div>\n  \n    <div class=\"row\">\n        <div class=\"col-6 col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-danger\">\n                    Beneficiaries Battery Status\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                  <div class=\"col-sm-4\">\n                    <br/><br/><br/>\n                    <button class=\"bg-danger\"  [routerLink]=\"['/components/lowlist']\">View 00-10%</button><br/><br/>\n                    <button class=\"bg-warning\"  [routerLink]=\"['/components/midlist']\">View 11-35%</button><br/><br/>\n                    <button class=\"bg-success\"  [routerLink]=\"['/components/normallist']\">View 36-100%</button>\n                </div>\n                  <div class=\"col-sm-8\">\n                  <div class=\"chart-wrapper\">\n                    <canvas baseChart class=\"chart\"\n                    [data]=\"pieChartData\"\n                    [colors]=\"pieChartColor\"\n                    [labels]=\"pieChartLabels\"\n                    [chartType]=\"pieChartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n                  </div>\n                </div>\n                </div>\n                </div>\n              </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(service, translate) {
        var _this = this;
        this.service = service;
        this.translate = translate;
        this.title = 'app';
        this.ActiveCount = 0;
        this.ResolvedCount = 0;
        this.PendingCount = 0;
        this.pieChartLabels = ['00-10%', '10-35%', '35-100%'];
        this.pieChartData = [200, 500, 100];
        this.pieChartColor = [{ backgroundColor: ["#f86c6b ", "#ffc107 ", "#4dbd74 "] }, { HoverColor: ["#f86c6b ", "#ffc107 ", "#4dbd74 "] }];
        this.pieChartType = 'pie';
        translate.setDefaultLang('en');
        this.service.GetCount().subscribe(function (data) {
            alert('success');
            console.log(data);
            alert(data);
            _this.Mera = data;
            console.log(_this.Mera.lowCount);
            _this.pieChartData = [_this.Mera.lowCount, _this.Mera.mediumCount, _this.Mera.NormalCount];
        }, function (error) {
            console.log(error);
            alert('failed');
        });
        this.service.GetTicketsAlerts().subscribe(function (data) {
            console.log(data);
            _this.ActiveAlerts = data;
            _this.ActiveCount = _this.ActiveAlerts.SingleData;
            console.log('ActiveAlerts' + _this.ActiveAlerts.SingleData);
        }), function (error) {
            console.log(error);
        };
        this.service.GetTicketsByPending().subscribe(function (data) {
            _this.PendingAlerts = data;
            _this.PendingCount = _this.PendingAlerts.SingleData;
            console.log('PendingAlerts' + _this.PendingAlerts.SingleData);
        }), function (error) {
            console.log(error);
        };
        this.service.GetTicketsByResolved().subscribe(function (data) {
            _this.ResolvedAlerts = data;
            _this.ResolvedCount = _this.ResolvedAlerts.SingleData;
            console.log('ResolvedCount' + _this.ResolvedAlerts.SingleData);
        }), function (error) {
            console.log(error);
        };
    }
    DashboardComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "./assets/i18n/", ".json");
}
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5_app_dashboard_dashboard_service__["a" /* DashboardService */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardService = (function () {
    function DashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    DashboardService.prototype.GetCount = function () {
        return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/FennixLocations/GetCentersCountList?centerID=4');
    };
    DashboardService.prototype.GetTicketsAlerts = function () {
        var Filtering = "TicketStateId == 1";
        return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId', { Filtering: "TicketStateId == 1" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('s_Token')
            })
        });
    };
    DashboardService.prototype.GetTicketsByPending = function () {
        var Filtering = "TicketStateId == 2";
        return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId', { Filtering: "TicketStateId == 2" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('s_Token')
            })
        });
    };
    DashboardService.prototype.GetTicketsByResolved = function () {
        return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId', { Filtering: "TicketStateId == 3" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('s_Token')
            })
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], DashboardService);
    return DashboardService;
    var _a;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map