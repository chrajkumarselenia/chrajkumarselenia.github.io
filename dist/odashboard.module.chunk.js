webpackJsonp(["odashboard.module"],{

/***/ "../../../../../src/app/odashboard/Odashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-12 col-lg-12\">\n    \n      <div class=\"card\">\n        <div class=\"card-header\">\n          Battery Satus\n          <!-- <div class=\"card-actions\">\n            <a href=\"http://www.chartjs.org\">\n              <small class=\"text-muted\">docs</small>\n            </a>\n          </div> -->\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/odashboard/odashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OdashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__odashboard_component__ = __webpack_require__("../../../../../src/app/odashboard/odashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__odashboard_component__["a" /* OdashboardComponent */],
        data: {
            title: 'Odashboard'
        }
    }
];
var OdashboardRoutingModule = (function () {
    function OdashboardRoutingModule() {
    }
    OdashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], OdashboardRoutingModule);
    return OdashboardRoutingModule;
}());

//# sourceMappingURL=odashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/odashboard/odashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_odashboard_odashboard_service__ = __webpack_require__("../../../../../src/app/odashboard/odashboard.service.ts");
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



var OdashboardComponent = (function () {
    function OdashboardComponent(service, translate) {
        var _this = this;
        this.service = service;
        this.translate = translate;
        this.title = 'app';
        this.ActiveCount = 0;
        this.ResolvedCount = 0;
        this.PendingCount = 0;
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [50, 48, 60, 75, 86, 72, 100, 0, 1, 2, 55, 67, 24, 0, 1, 24, 45, 67, 89, 12, 45, 6, 12], label: 'Battery percentage' }
        ];
        this.StatusList = new Array();
        this.pieChartType = 'pie';
        translate.setDefaultLang('en');
        this.service.GetCount().subscribe(function (data) {
            alert('success');
            console.log(data);
            alert(data);
            _this.Mera = data;
            console.log(data);
            for (var _i = 0, _a = _this.Mera; _i < _a.length; _i++) {
                var i = _a[_i];
                alert(i.BatteryPercentage);
                _this.StatusList.push(i.BatteryPercentage);
            }
            console.log(_this.Mera.lowCount);
            _this.barChartData = [
                //{data: [this.Mera.lowCount, this.Mera.mediumCount, 80, 81, 56, 55, 40], label: 'Battery percentage'}
                { data: _this.StatusList, label: 'Battery percentage' }
            ];
        }, function (error) {
            console.log(error);
            alert('failed');
        });
    }
    OdashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/odashboard/Odashboard.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_odashboard_odashboard_service__["a" /* OdashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_odashboard_odashboard_service__["a" /* OdashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
    ], OdashboardComponent);
    return OdashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=odashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/odashboard/odashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdashboardModule", function() { return OdashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__odashboard_component__ = __webpack_require__("../../../../../src/app/odashboard/odashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__odashboard_routing_module__ = __webpack_require__("../../../../../src/app/odashboard/odashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_odashboard_odashboard_service__ = __webpack_require__("../../../../../src/app/odashboard/odashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OdashboardModule = (function () {
    function OdashboardModule() {
    }
    OdashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__odashboard_routing_module__["a" /* OdashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__odashboard_component__["a" /* OdashboardComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5_app_odashboard_odashboard_service__["a" /* OdashboardService */]]
        })
    ], OdashboardModule);
    return OdashboardModule;
}());

//# sourceMappingURL=odashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/odashboard/odashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OdashboardService; });
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


var OdashboardService = (function () {
    function OdashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    OdashboardService.prototype.GetCount = function () {
        //return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/locations/getcountlist');
        return this.httpClient.get('http://localhost:65005/api/Location/BatteryStatus/127');
    };
    OdashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], OdashboardService);
    return OdashboardService;
    var _a;
}());

//# sourceMappingURL=odashboard.service.js.map

/***/ })

});
//# sourceMappingURL=odashboard.module.chunk.js.map