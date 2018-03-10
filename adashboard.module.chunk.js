webpackJsonp(["adashboard.module"],{

/***/ "../../../../../src/app/adashboard/adashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adashboard_component__ = __webpack_require__("../../../../../src/app/adashboard/adashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__adashboard_component__["a" /* AdashboardComponent */],
        data: {
            title: 'Adashboard'
        }
    }
];
var AdashboardRoutingModule = (function () {
    function AdashboardRoutingModule() {
    }
    AdashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AdashboardRoutingModule);
    return AdashboardRoutingModule;
}());

//# sourceMappingURL=adashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/adashboard/adashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-12 col-lg-12\">\n        <div class=\"card\">\n           \n            <div class=\"card-header bg-success\">\n                Beneficiaries Status In North America\n              \n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n    <div class=\"col-12 col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-body  bg-success\">\n            <i class=\"far fa-smile fa-3x  float-left\"></i>\n            <div class=\"h5  mb-0 mt-2 float-right\">{{ResolvedCount}}<br>Resolved Task</div>\n            <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n          </div>\n          <div class=\"card-footer px-3 py-2\">\n            <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/components/resolvedtasks']\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-4\">\n          <div class=\"card\">\n            <div class=\"card-body  bg-warning\">\n              <i class=\"fa fa-support fa-3x  float-left\"></i>\n              <div class=\"h5  mb-0 mt-2 float-right\">{{PendingCount}}<br>Pending Task</div>\n              <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n            </div>\n            <div class=\"card-footer px-3 py-2\">\n              <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/components/pendigtasks']\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-12 col-lg-4\">\n          <div class=\"card\">\n            <div class=\"card-body  bg-danger\">\n              <i class=\"far fa-frown fa-3x  float-left\"></i>\n              <div class=\"h5  mb-0 mt-2 float-right\">{{ActiveCount}}<br>Actives Alerts</div>\n              <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n            </div>\n            <div class=\"card-footer px-3 py-2\">\n              <a class=\"font-weight-bold font-xs btn-block text-muted\" [routerLink]=\"['/components/activealerts']\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n  </div>\n</div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 col-lg-12\">\n    <div class=\"card\">\n       \n        <div class=\"card-header bg-danger\">\n            Beneficiaries Status In Asia\n          \n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n<div class=\"col-12 col-lg-4\">\n    <div class=\"card\">\n      <div class=\"card-body  bg-success\">\n        <i class=\"far fa-smile fa-3x  float-left\"></i>\n        <div class=\"h5  mb-0 mt-2 float-right\">0<br>Resolved Task</div>\n        <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n      </div>\n      <div class=\"card-footer px-3 py-2\">\n        <a class=\"font-weight-bold font-xs btn-block text-muted\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body  bg-warning\">\n          <i class=\"fa fa-support fa-3x  float-left\"></i>\n          <div class=\"h5  mb-0 mt-2 float-right\">0<br>Pending Task</div>\n          <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-12 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body  bg-danger\">\n          <i class=\"far fa-frown fa-3x  float-left\"></i>\n          <div class=\"h5  mb-0 mt-2 float-right\">0<br>Actives Alerts</div>\n          <!-- <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div> -->\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n    <div class=\"row\">\n        <div class=\"col-12 col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-success\">\n                    Beneficiaries Battery Status in North America\n                  \n                </div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <br/><br/><br/>\n                      <button class=\"bg-danger\"  [routerLink]=\"['/components/lowlist']\">View 00-10%</button><br/><br/>\n                      <button class=\"bg-warning\"  [routerLink]=\"['/components/midlist']\">View 11-35%</button><br/><br/>\n                      <button class=\"bg-success\"  [routerLink]=\"['/components/normallist']\">View 36-100%</button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                  <div class=\"chart-wrapper\">\n                    <canvas baseChart class=\"chart\"\n                    [data]=\"pieChartData\"\n                    [labels]=\"pieChartLabels\"\n                    [chartType]=\"pieChartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n                  </div>\n                </div>\n                </div>\n                </div>\n              </div>\n        </div>\n        <div class=\"col-12 col-lg-6\">\n          <div class=\"card\">\n              <div class=\"card-header bg-danger\">\n                  Beneficiaries Battery Status in Asia\n                \n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <br/><br/><br/>\n                    <button class=\"bg-danger\">View 00-10%</button><br/><br/>\n                    <button class=\"bg-warning\">View 11-35%</button><br/><br/>\n                    <button class=\"bg-success\">View 36-100%</button>\n                </div>\n                <div class=\"col-sm-6\">\n                <div class=\"chart-wrapper\">\n                  <canvas baseChart class=\"chart\"\n                  [data]=\"pie1ChartData\"\n                  [labels]=\"pie1ChartLabels\"\n                  [chartType]=\"pie1ChartType\"\n                  (chartHover)=\"chartHovered($event)\"\n                  (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n              </div>\n              </div>\n              </div>\n            </div>\n      </div>\n    </div>\n  \n  \n  </div>\n   \n"

/***/ }),

/***/ "../../../../../src/app/adashboard/adashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_adashboard_adashboard_service__ = __webpack_require__("../../../../../src/app/adashboard/adashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdashboardComponent = (function () {
    function AdashboardComponent(service) {
        var _this = this;
        this.service = service;
        this.title = 'app';
        this.ActiveCount = 0;
        this.ResolvedCount = 0;
        this.PendingCount = 0;
        this.pieChartLabels = ['00-10%', '10-35%', '35-100%'];
        this.pieChartData = [200, 500, 100];
        this.pieChartType = 'pie';
        this.pie1ChartLabels = ['00-10%', '10-35%', '35-100%', 'NO Beneficiaries'];
        this.pie1ChartData = [0, 0, 0, 1];
        this.pie1ChartType = 'pie';
        this.service.GetCount().subscribe(function (data) {
            alert('success');
            console.log(data);
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
    AdashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/adashboard/adashboard.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_adashboard_adashboard_service__["a" /* AdashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_adashboard_adashboard_service__["a" /* AdashboardService */]) === "function" && _a || Object])
    ], AdashboardComponent);
    return AdashboardComponent;
    var _a;
}());

// onInit(){
//     this.service.GetCount().subscribe((data)=>{
//         alert('success');
//         console.log(data);
//     },
//     (error)=>{
//         console.log(error);
//         alert('failed');
//     });
// } 
//}
//# sourceMappingURL=adashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/adashboard/adashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdashboardModule", function() { return AdashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adashboard_component__ = __webpack_require__("../../../../../src/app/adashboard/adashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adashboard_routing_module__ = __webpack_require__("../../../../../src/app/adashboard/adashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_adashboard_adashboard_service__ = __webpack_require__("../../../../../src/app/adashboard/adashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdashboardModule = (function () {
    function AdashboardModule() {
    }
    AdashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__adashboard_routing_module__["a" /* AdashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__adashboard_component__["a" /* AdashboardComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6_app_adashboard_adashboard_service__["a" /* AdashboardService */]]
        })
    ], AdashboardModule);
    return AdashboardModule;
}());

//# sourceMappingURL=adashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/adashboard/adashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_session_storage_services_service__ = __webpack_require__("../../../../../src/app/services/session-storage-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdashboardService = (function () {
    function AdashboardService(httpClient, sessionstore) {
        this.httpClient = httpClient;
        this.sessionstore = sessionstore;
    }
    AdashboardService.prototype.GetCount = function () {
        return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/FennixLocations/GetCentersCountList?centerID=4');
    };
    AdashboardService.prototype.GetTicketsAlerts = function () {
        var Filtering = "TicketStateId == 1";
        alert(sessionStorage.getItem('a_Token'));
        return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId', { Filtering: "TicketStateId == 1" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('a_Token')
            })
        });
    };
    AdashboardService.prototype.GetTicketsByPending = function () {
        var Filtering = "TicketStateId == 2";
        alert(sessionStorage.getItem('a_Token'));
        return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId', { Filtering: "TicketStateId == 2" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('a_Token')
            })
        });
    };
    AdashboardService.prototype.GetTicketsByResolved = function () {
        return this.httpClient.post('http://52.52.49.131/dev_api/tickets/CountByCenterId', { Filtering: "TicketStateId == 3" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('a_Token')
            })
        });
    };
    AdashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_session_storage_services_service__["a" /* SessionStorageServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_session_storage_services_service__["a" /* SessionStorageServicesService */]) === "function" && _b || Object])
    ], AdashboardService);
    return AdashboardService;
    var _a, _b;
}());

//# sourceMappingURL=adashboard.service.js.map

/***/ })

});
//# sourceMappingURL=adashboard.module.chunk.js.map