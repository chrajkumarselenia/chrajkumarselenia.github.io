webpackJsonp(["components.module"],{

/***/ "../../../../../src/app/components/activealerts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <h4>Tickets - Active alerts</h4>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-danger\">\r\n                  <i class=\"fa fa-align-justify\"></i> Beneficiaries Active Alerts\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>ID</th>\r\n                        <th>Description</th>\r\n                         <th>Location</th> \r\n                        <th>Created</th>\r\n                        <th>IMEI</th>\r\n                        <th>Type</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let ab of ActiveAlerts.ListData | paginate: { itemsPerPage: 10, currentPage: p }\" >\r\n                        <!-- <ul  *ngFor=\"let x of ActiveAlerts.ListData\">\r\n                          <li>MySel</li>\r\n                        </ul> -->\r\n                        <td>{{ab.Id}}</td>\r\n                        <td>{{ab.PersonFullName}}<br/>\r\n                        <span *ngFor=\"let a of ab.Alerts\">\r\n                            <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==10?true:false\">geofence</span>\r\n                            <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==12?true:false\">Panic</span>\r\n                            <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==1?true:false\">Connection</span>\r\n                          </span>\r\n                        </td>\r\n                        <td><button class=\"btn btn-primary\">View Location</button></td>\r\n                        <td>{{ab.Created}}</td>\r\n                        <td>{{ab.IMEI}}</td>                   \r\n                        <td>\r\n                            <span class=\"badge badge-success\" *ngIf=\"ab.WithAlerts\">Device</span>\r\n                            <span class=\"badge badge-danger\" *ngIf=\"!ab.WithAlerts\">User</span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <!-- <ul class=\"pagination\">\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"\">Prev</a></li>\r\n                    <li class=\"page-item active\">\r\n                      <a class=\"page-link\" href=\"#\">1</a>\r\n                    </li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                  </ul> -->\r\n                  <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                  \r\n<!-- <input type=\"button\" (click)=\"getStart()\" value=\"Start\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getPrevious()\" value=\"Previous >>\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getNext()\" value=\"Next >>\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getEnd()\" value=\"End\"> -->\r\n                  <!-- <div>\r\n                      <pagination-controls  id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"page = $event\"></pagination-controls>\r\n                    </div> -->\r\n                       \r\n                    <ul class=\"pagination\">\r\n                      <li class=\"page-link\" (click)=\"getStart()\">start</li>\r\n                     \r\n                       <li class=\"page-link\" (click)=\"getPrevious()\"></li> \r\n                      \r\n                      <li class=\"page-item\" (click)=\"getNext()\" class=\"page-link\" >>></li>\r\n                      <li class=\"page-item\" class=\"page-link\" (click)=\"getEnd()\">End</li>\r\n                    </ul>        \r\n                                \r\n                       \r\n                      \r\n                                  <!-- pager -->\r\n                      <!--             <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                          <a (click)=\"setPage(1)\">First</a>\r\n                                      </li>\r\n                                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                                      </li>\r\n                                      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                          <a (click)=\"setPage(page)\">{{page}}</a>\r\n                                      </li>\r\n                                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                                      </li>\r\n                                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                          <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                                      </li>\r\n                                  </ul> -->\r\n                            \r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div><!--/.row-->\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/activealerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivealertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_service__ = __webpack_require__("../../../../../src/app/components/components.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { PagerService } from '../components/PagerService';
var ActivealertsComponent = (function () {
    // // pager object
    // pager: any = {};
    // // paged items
    // pagedItems: any[];
    // totalRec : number;
    // page: number = 1;
    function ActivealertsComponent(service, router, AativatedRoute) {
        this.service = service;
        this.router = router;
        this.AativatedRoute = AativatedRoute;
        this.page = 1;
        this.tootlepage = 1;
        //   this.service.GetTickets().subscribe((data)=>{
        //  console.log(data);
        //  this.ActiveAlerts=data;
        //  //console.log(this.ActiveAlerts.ListData);
        // //  console.log(data.)
        // //  this.totalRec = this.ActiveAlerts.ListData.length;
        // //  console.log(this.totalRec);
        // //  this.setPage(1);
        // }),error=>{
        //   console.log(error);
        // }
    }
    ActivealertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetTickets(this.page).subscribe(function (data) {
            //console.log(data);TotalPages
            _this.ActiveAlerts = data;
            console.log(_this.ActiveAlerts);
            _this.Result = _this.ActiveAlerts.Pagination.TotalPages;
            alert(_this.Result);
        }), function (error) {
            console.log(error);
        };
    };
    ActivealertsComponent.prototype.getNext = function () {
        var _this = this;
        debugger;
        this.tootlepage = this.tootlepage + 1;
        for (this.tootlepage; this.tootlepage <= this.Result; this.tootlepage++) {
            this.service.GetTickets(this.tootlepage).subscribe(function (data) {
                //console.log(data);TotalPages
                _this.ActiveAlerts = data;
                console.log(_this.ActiveAlerts);
                //this.Result=this.ActiveAlerts.Pagination.TotalPages;
            });
            break;
        }
    };
    ActivealertsComponent.prototype.getPrevious = function () {
        var _this = this;
        alert(this.tootlepage);
        this.tootlepage = this.tootlepage - 1;
        for (this.tootlepage; this.tootlepage <= this.Result; this.tootlepage--) {
            this.service.GetTickets(this.tootlepage).subscribe(function (data) {
                //console.log(data);TotalPages
                _this.ActiveAlerts = data;
                console.log(_this.ActiveAlerts);
                //this.Result=this.ActiveAlerts.Pagination.TotalPages;
            });
            break;
        }
    };
    ActivealertsComponent.prototype.getStart = function () {
        var _this = this;
        this.tootlepage = 1;
        this.service.GetTickets(this.tootlepage).subscribe(function (data) {
            //console.log(data);TotalPages
            _this.ActiveAlerts = data;
            console.log(_this.ActiveAlerts);
            //this.Result=this.ActiveAlerts.Pagination.TotalPages;
        });
    };
    ActivealertsComponent.prototype.getEnd = function () {
        var _this = this;
        this.Result;
        this.service.GetTickets(this.Result).subscribe(function (data) {
            //console.log(data);TotalPages
            _this.ActiveAlerts = data;
            console.log(_this.ActiveAlerts);
            //this.Result=this.ActiveAlerts.Pagination.TotalPages;
        });
    };
    ActivealertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/activealerts.component.html")
        })
        // export interface ActiveAlerts {
        //   ID: string;
        //   Description: string;
        //   Location: string;
        //   Created: Date;
        //   Imei:string;
        //   Type:string;
        // }
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__components_service__["a" /* ComponentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_service__["a" /* ComponentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], ActivealertsComponent);
    return ActivealertsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=activealerts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/addnewinmate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n  <h4>Add New Inmate</h4>\n\n  </div>\n  <!--/.row-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/addnewinmate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewinmateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddnewinmateComponent = (function () {
    function AddnewinmateComponent() {
    }
    AddnewinmateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/addnewinmate.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AddnewinmateComponent);
    return AddnewinmateComponent;
}());

//# sourceMappingURL=addnewinmate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <h4>Inmates List</h4>\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = (function () {
    function CardsComponent() {
    }
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/cards.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());

//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_component__ = __webpack_require__("../../../../../src/app/components/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_component__ = __webpack_require__("../../../../../src/app/components/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_component__ = __webpack_require__("../../../../../src/app/components/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__switches_component__ = __webpack_require__("../../../../../src/app/components/switches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tables_component__ = __webpack_require__("../../../../../src/app/components/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_components_activealerts_component__ = __webpack_require__("../../../../../src/app/components/activealerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_components_pendingtasks_component__ = __webpack_require__("../../../../../src/app/components/pendingtasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_components_resolvedtasks_component__ = __webpack_require__("../../../../../src/app/components/resolvedtasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_viewmap_component__ = __webpack_require__("../../../../../src/app/components/viewmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_components_addnewinmate_component__ = __webpack_require__("../../../../../src/app/components/addnewinmate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_lowlist_component__ = __webpack_require__("../../../../../src/app/components/lowlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_components_midlist_component__ = __webpack_require__("../../../../../src/app/components/midlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_components_normallist_component__ = __webpack_require__("../../../../../src/app/components/normallist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        data: {
            title: 'Components'
        },
        children: [
            {
                path: 'viewmap',
                component: __WEBPACK_IMPORTED_MODULE_10_app_components_viewmap_component__["a" /* ViewmapComponent */],
                data: {
                    title: 'Viewmap'
                }
            },
            {
                path: 'cards',
                component: __WEBPACK_IMPORTED_MODULE_2__cards_component__["a" /* CardsComponent */],
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: __WEBPACK_IMPORTED_MODULE_3__forms_component__["a" /* FormsComponent */],
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'modals',
                component: __WEBPACK_IMPORTED_MODULE_4__modals_component__["a" /* ModalsComponent */],
                data: {
                    title: 'Modals'
                }
            },
            {
                path: 'addnewinmate',
                component: __WEBPACK_IMPORTED_MODULE_11_app_components_addnewinmate_component__["a" /* AddnewinmateComponent */],
                data: {
                    title: 'Addnewinmate'
                }
            },
            {
                path: 'switches',
                component: __WEBPACK_IMPORTED_MODULE_5__switches_component__["a" /* SwitchesComponent */],
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: __WEBPACK_IMPORTED_MODULE_6__tables_component__["a" /* TablesComponent */],
                data: {
                    title: 'Tables'
                }
            },
            {
                path: 'activealerts',
                component: __WEBPACK_IMPORTED_MODULE_7_app_components_activealerts_component__["a" /* ActivealertsComponent */],
                data: {
                    title: 'Activealerts'
                }
            },
            {
                path: 'pendigtasks',
                component: __WEBPACK_IMPORTED_MODULE_8_app_components_pendingtasks_component__["a" /* PendingtasksComponent */],
                data: {
                    title: 'Pendingtasks'
                }
            },
            {
                path: 'resolvedtasks',
                component: __WEBPACK_IMPORTED_MODULE_9_app_components_resolvedtasks_component__["a" /* resolvedtasksComponent */],
                data: {
                    title: 'Resolvedtasks'
                }
            },
            {
                path: 'lowlist',
                component: __WEBPACK_IMPORTED_MODULE_12_app_components_lowlist_component__["a" /* LowlistComponent */],
                data: {
                    title: 'Lowlist'
                }
            },
            {
                path: 'midlist',
                component: __WEBPACK_IMPORTED_MODULE_13_app_components_midlist_component__["a" /* MidListComponent */],
                data: {
                    title: 'Midlist'
                },
            },
            {
                path: 'normallist',
                component: __WEBPACK_IMPORTED_MODULE_14_app_components_normallist_component__["a" /* NormallistComponent */],
                data: {
                    title: 'Normallist'
                },
            }
        ]
    }
];
var ComponentsRoutingModule = (function () {
    function ComponentsRoutingModule() {
    }
    ComponentsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ComponentsRoutingModule);
    return ComponentsRoutingModule;
}());

//# sourceMappingURL=components-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_component__ = __webpack_require__("../../../../../src/app/components/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_component__ = __webpack_require__("../../../../../src/app/components/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__switches_component__ = __webpack_require__("../../../../../src/app/components/switches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tables_component__ = __webpack_require__("../../../../../src/app/components/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_component__ = __webpack_require__("../../../../../src/app/components/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_routing_module__ = __webpack_require__("../../../../../src/app/components/components-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_activealerts_component__ = __webpack_require__("../../../../../src/app/components/activealerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_components_pendingtasks_component__ = __webpack_require__("../../../../../src/app/components/pendingtasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_resolvedtasks_component__ = __webpack_require__("../../../../../src/app/components/resolvedtasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_components_viewmap_component__ = __webpack_require__("../../../../../src/app/components/viewmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_components_addnewinmate_component__ = __webpack_require__("../../../../../src/app/components/addnewinmate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_components_components_service__ = __webpack_require__("../../../../../src/app/components/components.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_components_lowlist_component__ = __webpack_require__("../../../../../src/app/components/lowlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_components_midlist_component__ = __webpack_require__("../../../../../src/app/components/midlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_components_normallist_component__ = __webpack_require__("../../../../../src/app/components/normallist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Forms Component




// Modal Component


// Tabs Component

// Components Routing













var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__components_routing_module__["a" /* ComponentsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tabs__["a" /* TabsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13_app_components_viewmap_component__["a" /* ViewmapComponent */],
                __WEBPACK_IMPORTED_MODULE_1__cards_component__["a" /* CardsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__modals_component__["a" /* ModalsComponent */],
                __WEBPACK_IMPORTED_MODULE_14_app_components_addnewinmate_component__["a" /* AddnewinmateComponent */],
                __WEBPACK_IMPORTED_MODULE_4__switches_component__["a" /* SwitchesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tables_component__["a" /* TablesComponent */],
                __WEBPACK_IMPORTED_MODULE_12_app_components_resolvedtasks_component__["a" /* resolvedtasksComponent */],
                __WEBPACK_IMPORTED_MODULE_10_app_components_activealerts_component__["a" /* ActivealertsComponent */],
                __WEBPACK_IMPORTED_MODULE_11_app_components_pendingtasks_component__["a" /* PendingtasksComponent */],
                __WEBPACK_IMPORTED_MODULE_18_app_components_lowlist_component__["a" /* LowlistComponent */],
                __WEBPACK_IMPORTED_MODULE_19_app_components_midlist_component__["a" /* MidListComponent */],
                __WEBPACK_IMPORTED_MODULE_20_app_components_normallist_component__["a" /* NormallistComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17_app_components_components_service__["a" /* ComponentsService */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsService; });
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


var ComponentsService = (function () {
    function ComponentsService(httpClient) {
        this.httpClient = httpClient;
    }
    ComponentsService.prototype.GetTickets = function (tootlepage) {
        var toke = '';
        if (sessionStorage.getItem('a_Token') != null) {
            toke = sessionStorage.getItem('a_Token');
        }
        if (sessionStorage.getItem('s_Token') != null) {
            toke = sessionStorage.getItem('s_Token');
        }
        return this.httpClient.post('http://52.52.49.131/dev_api/Tickets/GetByCenterId', { Pagination: { "PageSize": 10, "CurrentPage": tootlepage }, "Sorting": "Id Asc", "Filtering": "TicketStateId==1" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + toke
            })
        });
    };
    ComponentsService.prototype.PendingTicket = function (tootlepage) {
        var toke = '';
        if (sessionStorage.getItem('a_Token') != null) {
            toke = sessionStorage.getItem('a_Token');
        }
        if (sessionStorage.getItem('s_Token') != null) {
            toke = sessionStorage.getItem('s_Token');
        }
        return this.httpClient.post('http://52.52.49.131/dev_api/Tickets/GetByCenterId', { Pagination: { "PageSize": 10, "CurrentPage": tootlepage }, "Sorting": "Id Asc", "Filtering": "TicketStateId==2" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + toke
            })
        });
    };
    ComponentsService.prototype.ResolvedTicket = function (tootlepage) {
        var toke = '';
        if (sessionStorage.getItem('a_Token') != null) {
            toke = sessionStorage.getItem('a_Token');
        }
        if (sessionStorage.getItem('s_Token') != null) {
            toke = sessionStorage.getItem('s_Token');
        }
        return this.httpClient.post('http://52.52.49.131/dev_api/Tickets/GetByCenterId', { Pagination: { "PageSize": 10, "CurrentPage": tootlepage }, "Sorting": "Id Asc", "Filtering": "TicketStateId==3" }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + toke
            })
        });
    };
    ComponentsService.prototype.GetLowlist = function () {
        return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/locations/getlowlist/4');
    };
    ComponentsService.prototype.MidList = function () {
        return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/FennixLocations/getMediumList/4');
    };
    ComponentsService.prototype.NormalList = function () {
        return this.httpClient.get('http://fenn-dev.us-west-2.elasticbeanstalk.com//api/FennixLocations/getNormalList/4');
    };
    ComponentsService.prototype.Test = function () {
        return this.httpClient.post('http://smsgateway.me/api/v3/messages/send', {
            number: ["8688009518", "9492086930", "9866556888", "9885781035"],
            email: "ch.rajkumar@seleniatech.com",
            password: "Bhagya0424",
            device: "82544",
            message: "You battery status is low!"
        }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            }) });
    };
    ComponentsService.prototype.Test1 = function () {
        return this.httpClient.get('http://smslogin.mobi/spanelv2/api.php?username=alivelu&password=ttd.1767&to=9866556888&from=srinivas&message=test');
    };
    ComponentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ComponentsService);
    return ComponentsService;
    var _a;
}());

//# sourceMappingURL=components.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n   <h4>Map History</h4>\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = (function () {
    function FormsComponent() {
    }
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/forms.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());

//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/lowlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-danger\">\r\n                  <i class=\"fa fa-align-justify\"></i>List of Low Battery Beneficiaries \r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                          <th>\r\n                              <input type=\"checkbox\" name=\"all\"/>\r\n                          </th>\r\n                        <th>FullName</th>\r\n                        <th>IMEIn</th>                         \r\n                        <th>Location</th>\r\n                         <th>BattteryPercentage</th>\r\n                        <th>chargeStatus</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let ab of GetLowList\" >\r\n                        <!-- <ul  *ngFor=\"let x of ActiveAlerts.ListData\">\r\n                          <li>MySel</li>\r\n                        </ul> -->\r\n                        <td>\r\n                            <input [(ngModel)]='ab.isChecked' type=\"checkbox\"/>\r\n                        </td>\r\n                        <td>{{ab.FullName}}</td>\r\n                        <td>{{ab.IMEIn}}<br/>\r\n                       \r\n                        </td>\r\n                        <td><button class=\"btn btn-primary\">View Location</button></td>\r\n                        <td>{{ab.battteryPercentage}}</td>\r\n                        <td>{{ab.chargeStatus}}</td>                   \r\n                        <td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <div>\r\n                    <button (click)=\"SMS(GetLowList)\" class=\"btn btn-primary float-right\">Send SmS</button>\r\n                  </div>\r\n                  <!-- <ul class=\"pagination\">\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"\">Prev</a></li>\r\n                    <li class=\"page-item active\">\r\n                      <a class=\"page-link\" href=\"#\">1</a>\r\n                    </li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                  </ul> -->\r\n                  <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                  \r\n                  <!-- <div>\r\n                      <pagination-controls  id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"page = $event\"></pagination-controls>\r\n                    </div> -->\r\n                       \r\n                              \r\n                                \r\n                       \r\n                      \r\n                                  <!-- pager -->\r\n                      <!--             <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                          <a (click)=\"setPage(1)\">First</a>\r\n                                      </li>\r\n                                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                                      </li>\r\n                                      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                          <a (click)=\"setPage(page)\">{{page}}</a>\r\n                                      </li>\r\n                                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                                      </li>\r\n                                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                          <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                                      </li>\r\n                                  </ul> -->\r\n                            \r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div><!--/.row-->\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/lowlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LowlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_service__ = __webpack_require__("../../../../../src/app/components/components.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { PagerService } from '../components/PagerService';
var LowlistComponent = (function () {
    //SmsList:any[];
    function LowlistComponent(service) {
        var _this = this;
        this.service = service;
        this.SmsList = new Array();
        this.service.GetLowlist().subscribe(function (data) {
            alert('success');
            console.log(data);
            _this.GetLowList = data;
        }, function (error) {
            console.log(error);
            alert('failed');
        });
    }
    LowlistComponent.prototype.SMS = function (list) {
        console.log(list);
        if (list.length > 0)
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var i = list_1[_i];
                if (i.isChecked) {
                    this.SmsList.push(i);
                }
            }
        this.service.Test().subscribe(function (data) {
            alert('success');
            console.log(data);
        }, function (error) {
            alert(error);
            console.log(error);
        });
        this.service.Test1().subscribe(function (data) {
            alert('success');
            console.log(data);
        }, function (error) {
            alert(error);
            console.log(error);
        });
    };
    LowlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/lowlist.component.html")
        })
        // export interface ActiveAlerts {
        //   ID: string;
        //   Description: string;
        //   Location: string;
        //   Created: Date;
        //   Imei:string;
        //   Type:string;
        // }
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__components_service__["a" /* ComponentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_service__["a" /* ComponentsService */]) === "function" && _a || Object])
    ], LowlistComponent);
    return LowlistComponent;
    var _a;
}());

//# sourceMappingURL=lowlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/midlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n        <div class=\"row\">\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header bg-warning\">\r\n                      <i class=\"fa fa-align-justify\"></i> List of Avarage Battery Beneficiaries \r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <table class=\"table\">\r\n                        <thead>\r\n                          <tr>\r\n                              <th>\r\n                                  <input type=\"checkbox\"/>\r\n                              </th>\r\n                            <th>FullName</th>\r\n                            <th>IMEIn</th>                         \r\n                            <th>Location</th>\r\n                             <th>BattteryPercentage</th>\r\n                            <th>chargeStatus</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let ab of MidList\" >\r\n                            <!-- <ul  *ngFor=\"let x of ActiveAlerts.ListData\">\r\n                              <li>MySel</li>\r\n                            </ul> -->\r\n                            <td>\r\n                                <input type=\"checkbox\"/>\r\n                            </td>\r\n                            <td>{{ab.FullName}}</td>\r\n                            <td>{{ab.IMEIn}}<br/>\r\n                           \r\n                            </td>\r\n                            <td><button class=\"btn btn-primary\">View Location</button></td>\r\n                            <td>{{ab.battteryPercentage}}</td>\r\n                            <td>{{ab.chargeStatus}}</td>                   \r\n                            <td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <!-- <ul class=\"pagination\">\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"\">Prev</a></li>\r\n                        <li class=\"page-item active\">\r\n                          <a class=\"page-link\" href=\"#\">1</a>\r\n                        </li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                      </ul> -->\r\n                      <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                      \r\n                      <!-- <div>\r\n                          <pagination-controls  id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"page = $event\"></pagination-controls>\r\n                        </div> -->\r\n                           \r\n                                  \r\n                                    \r\n                           \r\n                          \r\n                                      <!-- pager -->\r\n                          <!--             <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                                          <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                              <a (click)=\"setPage(1)\">First</a>\r\n                                          </li>\r\n                                          <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                              <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                                          </li>\r\n                                          <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                              <a (click)=\"setPage(page)\">{{page}}</a>\r\n                                          </li>\r\n                                          <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                              <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                                          </li>\r\n                                          <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                              <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                                          </li>\r\n                                      </ul> -->\r\n                                \r\n                    </div>\r\n                  </div>\r\n          </div>\r\n        </div><!--/.row-->\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/components/midlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_service__ = __webpack_require__("../../../../../src/app/components/components.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { PagerService } from '../components/PagerService';
var MidListComponent = (function () {
    function MidListComponent(service) {
        var _this = this;
        this.service = service;
        this.service.MidList().subscribe(function (data) {
            alert('success');
            console.log(data);
            _this.MidList = data;
        }, function (error) {
            console.log(error);
            alert('failed');
        });
    }
    MidListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/midlist.component.html")
        })
        // export interface ActiveAlerts {
        //   ID: string;
        //   Description: string;
        //   Location: string;
        //   Created: Date;
        //   Imei:string;
        //   Type:string;
        // }
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__components_service__["a" /* ComponentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_service__["a" /* ComponentsService */]) === "function" && _a || Object])
    ], MidListComponent);
    return MidListComponent;
    var _a;
}());

//# sourceMappingURL=midlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n   <h4>Container List</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalsComponent = (function () {
    function ModalsComponent() {
    }
    ModalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/modals.component.html")
        })
    ], ModalsComponent);
    return ModalsComponent;
}());

//# sourceMappingURL=modals.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/normallist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n        <div class=\"row\">\r\n         \r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header bg-success\">\r\n                      <i class=\"fa fa-align-justify\"></i>List of Normal Battery Beneficiaries  \r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <table class=\"table\">\r\n                        <thead>\r\n                          <tr>\r\n                              <th>\r\n                                  <input type=\"checkbox\"/>\r\n                              </th>\r\n                            <th>FullName</th>\r\n                            <th>IMEIn</th>                         \r\n                            <th>Location</th>\r\n                             <th>BattteryPercentage</th>\r\n                            <th>chargeStatus</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let ab of NormalList\" >\r\n                            <!-- <ul  *ngFor=\"let x of ActiveAlerts.ListData\">\r\n                              <li>MySel</li>\r\n                            </ul> -->\r\n                            <td>\r\n                                <input type=\"checkbox\"/>\r\n                            </td>\r\n                            <td>{{ab.FullName}}</td>\r\n                            <td>{{ab.IMEIn}}<br/>\r\n                           \r\n                            </td>\r\n                            <td><button class=\"btn btn-primary\">View Location</button></td>\r\n                            <td>{{ab.battteryPercentage}}</td>\r\n                            <td>{{ab.chargeStatus}}</td>                   \r\n                            <td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <!-- <ul class=\"pagination\">\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"\">Prev</a></li>\r\n                        <li class=\"page-item active\">\r\n                          <a class=\"page-link\" href=\"#\">1</a>\r\n                        </li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                      </ul> -->\r\n                      <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                      \r\n                      <!-- <div>\r\n                          <pagination-controls  id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"page = $event\"></pagination-controls>\r\n                        </div> -->\r\n                           \r\n                                  \r\n                                    \r\n                           \r\n                          \r\n                                      <!-- pager -->\r\n                          <!--             <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                                          <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                              <a (click)=\"setPage(1)\">First</a>\r\n                                          </li>\r\n                                          <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                              <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                                          </li>\r\n                                          <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                              <a (click)=\"setPage(page)\">{{page}}</a>\r\n                                          </li>\r\n                                          <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                              <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                                          </li>\r\n                                          <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                              <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                                          </li>\r\n                                      </ul> -->\r\n                                \r\n                    </div>\r\n                  </div>\r\n          </div>\r\n        </div><!--/.row-->\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/components/normallist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormallistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_service__ = __webpack_require__("../../../../../src/app/components/components.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { PagerService } from '../components/PagerService';
var NormallistComponent = (function () {
    function NormallistComponent(service) {
        var _this = this;
        this.service = service;
        this.service.NormalList().subscribe(function (data) {
            alert('success');
            console.log(data);
            _this.NormalList = data;
        }, function (error) {
            console.log(error);
            alert('failed');
        });
    }
    NormallistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/normallist.component.html")
        })
        // export interface ActiveAlerts {
        //   ID: string;
        //   Description: string;
        //   Location: string;
        //   Created: Date;
        //   Imei:string;
        //   Type:string;
        // }
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__components_service__["a" /* ComponentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_service__["a" /* ComponentsService */]) === "function" && _a || Object])
    ], NormallistComponent);
    return NormallistComponent;
    var _a;
}());

//# sourceMappingURL=normallist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pendingtasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <h4>Tickets - Pending alerts</h4>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-warning\">\r\n                  <i class=\"fa fa-align-justify\"></i> Beneficiaries Pending Alerts\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>ID</th>\r\n                        <th>Description</th>\r\n                        <th>Location</th> \r\n                        <th>Created</th>\r\n                        <th>IMEI</th>\r\n                        <th>Type</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let ab of Pendingtask.ListData\">\r\n                        <td>{{ab.Id}}</td>\r\n                        <td>{{ab.PersonFullName}}\r\n                            <br/>\r\n                        <span *ngFor=\"let a of ab.Alerts\">\r\n                            <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==10?true:false\">geofence</span>\r\n                            <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==12?true:false\">Panic</span>\r\n                            <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==1?true:false\">Connection</span>\r\n                        </span>\r\n\r\n                        </td>\r\n                        <td><button class=\"btn btn-primary\">View Location</button></td>\r\n                        <td>{{ab.Created}}</td>\r\n                        <td>{{ab.IMEI}}</td>\r\n                        <!-- <td>Member</td> -->\r\n                        <td>\r\n                            <span class=\"badge badge-success\" *ngIf=\"ab.WithAlerts\">Device</span>\r\n                            <span class=\"badge badge-danger\" *ngIf=\"!ab.WithAlerts\">User</span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <!-- <ul class=\"pagination\">\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n\r\n                    <li class=\"page-item active\">\r\n                      <a class=\"page-link\" href=\"#\">1</a>\r\n                    </li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                  </ul> -->\r\n                  \r\n<!-- <input type=\"button\" (click)=\"getStart()\" value=\"Start\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getPrevious()\" value=\"Previous >>\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getNext()\" value=\"Next >>\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getEnd()\" value=\"End\"> -->\r\n<ul class=\"pagination\">\r\n  <li class=\"page-link\" (click)=\"getStart()\">start</li>\r\n \r\n   <li class=\"page-link\" (click)=\"getPrevious()\"></li> \r\n  \r\n  <li class=\"page-item\" (click)=\"getNext()\" class=\"page-link\" >>></li>\r\n  <li class=\"page-item\" class=\"page-link\" (click)=\"getEnd()\">End</li>\r\n</ul>  \r\n\r\n</div>\r\n              </div>\r\n      </div>\r\n    </div><!--/.row-->\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/pendingtasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingtasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_service__ = __webpack_require__("../../../../../src/app/components/components.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PendingtasksComponent = (function () {
    function PendingtasksComponent(service, router, AativatedRoute) {
        //   this.service.PendingTicket().subscribe((data)=>{
        //  console.log(data);
        //  this.Pendingtask=data;
        this.service = service;
        this.router = router;
        this.AativatedRoute = AativatedRoute;
        this.tootlepage = 1;
        this.page = 1;
        //  //console.log(this.ActiveAlerts.ListData);
        // //  console.log(data.)
        // //  this.totalRec = this.ActiveAlerts.ListData.length;
        // //  console.log(this.totalRec);
        // //  this.setPage(1);
        // }),error=>{
        //   console.log(error);
        // }
    }
    PendingtasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.PendingTicket(this.page).subscribe(function (data) {
            console.log(data);
            _this.Pendingtask = data;
            //console.log(this.ActiveAlerts.ListData);
            //  console.log(data.)
            //  this.totalRec = this.ActiveAlerts.ListData.length;
            //  console.log(this.totalRec);
            //  this.setPage(1);
            _this.Result = _this.Pendingtask.Pagination.TotalPages;
            alert(_this.Result);
        }), function (error) {
            console.log(error);
        };
    };
    PendingtasksComponent.prototype.getNext = function () {
        var _this = this;
        debugger;
        this.tootlepage = this.tootlepage + 1;
        for (this.tootlepage; this.tootlepage <= this.Result; this.tootlepage++) {
            this.service.PendingTicket(this.tootlepage).subscribe(function (data) {
                //console.log(data);TotalPages
                _this.Pendingtask = data;
                console.log(_this.Pendingtask);
                //this.Result=this.ActiveAlerts.Pagination.TotalPages;
            });
            break;
        }
    };
    PendingtasksComponent.prototype.getPrevious = function () {
        var _this = this;
        alert(this.tootlepage);
        this.tootlepage = this.tootlepage - 1;
        for (this.tootlepage; this.tootlepage <= this.Result; this.tootlepage--) {
            this.service.PendingTicket(this.tootlepage).subscribe(function (data) {
                //console.log(data);TotalPages
                _this.Pendingtask = data;
                console.log(_this.Pendingtask);
                //this.Result=this.ActiveAlerts.Pagination.TotalPages;
            });
            break;
        }
    };
    PendingtasksComponent.prototype.getStart = function () {
        var _this = this;
        this.tootlepage = 1;
        this.service.PendingTicket(this.tootlepage).subscribe(function (data) {
            //console.log(data);TotalPages
            _this.Pendingtask = data;
            console.log(_this.Pendingtask);
            //this.Result=this.ActiveAlerts.Pagination.TotalPages;
        });
    };
    PendingtasksComponent.prototype.getEnd = function () {
        var _this = this;
        this.Result;
        this.service.PendingTicket(this.Result).subscribe(function (data) {
            //console.log(data);TotalPages
            _this.Pendingtask = data;
            console.log(_this.Pendingtask);
            //this.Result=this.ActiveAlerts.Pagination.TotalPages;
        });
    };
    PendingtasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/pendingtasks.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__components_service__["a" /* ComponentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_service__["a" /* ComponentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], PendingtasksComponent);
    return PendingtasksComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=pendingtasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/resolvedtasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <h4>Tickets - Resolved alert</h4>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-success\">\n                  <i class=\"fa fa-align-justify\"></i>  Beneficiaries Resolved alert\n                </div>\n                <div class=\"card-body\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>ID</th>\n                        <th>Description</th>\n                        <th>Location</th> \n                        <th>Created</th>\n                        <th>IMEI</th>\n                        <th>Type</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let ab of ResolvedTask.ListData\">\n                        <td>{{ab.Id}}</td>\n                        <td>{{ab.PersonFullName}}\n                            <br/>\n                            <span *ngFor=\"let a of ab.Alerts\">\n                                <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==10?true:false\">geofence</span>\n                                <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==12?true:false\">Panic</span>\n                                <span class=\"badge badge-danger\" *ngIf=\"a.AlertId==1?true:false\">Connection</span>\n                              </span>\n                        </td>\n                        <td><button class=\"btn btn-primary\">View Location</button></td>\n                        <td>{{ab.Created}}</td>\n                        <td>{{ab.IMEI}}</td>\n                        <!-- <td>Member</td> -->\n                        <td>\n                            <span class=\"badge badge-success\" *ngIf=\"ab.WithAlerts\">Device</span>\n                            <span class=\"badge badge-danger\" *ngIf=\"!ab.WithAlerts\">User</span>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <!-- <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n                    <li class=\"page-item active\">\n                      <a class=\"page-link\" href=\"#\">1</a>\n                    </li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n                  </ul> -->\n                  \n<!-- <input type=\"button\" (click)=\"getStart()\" value=\"Start\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getPrevious()\" value=\"Previous >>\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getNext()\" value=\"Next >>\">&nbsp;&nbsp;<input type=\"button\" (click)=\"getEnd()\" value=\"End\">\n -->\n <ul class=\"pagination\">\n  <li class=\"page-link\" (click)=\"getStart()\">start</li>\n \n   <li class=\"page-link\" (click)=\"getPrevious()\"></li> \n  \n  <li class=\"page-item\" (click)=\"getNext()\" class=\"page-link\" >>></li>\n  <li class=\"page-item\" class=\"page-link\" (click)=\"getEnd()\">End</li>\n</ul> \n                </div>\n              </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/resolvedtasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolvedtasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_service__ = __webpack_require__("../../../../../src/app/components/components.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var resolvedtasksComponent = (function () {
    function resolvedtasksComponent(service, router, AativatedRoute) {
        this.service = service;
        this.router = router;
        this.AativatedRoute = AativatedRoute;
        this.tootlepage = 1;
        this.page = 1;
        //   this.service.ResolvedTicket().subscribe((data)=>{
        //  console.log(data);
        //  this.ResolvedTask=data;
        //  //console.log(this.ActiveAlerts.ListData);
        // //  console.log(data.)
        // //  this.totalRec = this.ActiveAlerts.ListData.length;
        // //  console.log(this.totalRec);
        // //  this.setPage(1);
        // }),error=>{
        //   console.log(error);
        // }
    }
    resolvedtasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.ResolvedTicket(this.page).subscribe(function (data) {
            console.log(data);
            _this.ResolvedTask = data;
            //console.log(this.ActiveAlerts.ListData);
            //  console.log(data.)
            //  this.totalRec = this.ActiveAlerts.ListData.length;
            //  console.log(this.totalRec);
            //  this.setPage(1);
            _this.Result = _this.ResolvedTask.Pagination.TotalPages;
            alert(_this.Result);
        }), function (error) {
            console.log(error);
        };
    };
    resolvedtasksComponent.prototype.getNext = function () {
        var _this = this;
        debugger;
        this.tootlepage = this.tootlepage + 1;
        for (this.tootlepage; this.tootlepage <= this.Result; this.tootlepage++) {
            this.service.ResolvedTicket(this.tootlepage).subscribe(function (data) {
                //console.log(data);TotalPages
                _this.ResolvedTask = data;
                console.log(_this.ResolvedTask);
                //this.Result=this.ActiveAlerts.Pagination.TotalPages;
            });
            break;
        }
    };
    resolvedtasksComponent.prototype.getPrevious = function () {
        var _this = this;
        alert(this.tootlepage);
        this.tootlepage = this.tootlepage - 1;
        for (this.tootlepage; this.tootlepage <= this.Result; this.tootlepage--) {
            this.service.ResolvedTicket(this.tootlepage).subscribe(function (data) {
                //console.log(data);TotalPages
                _this.ResolvedTask = data;
                console.log(_this.ResolvedTask);
                //this.Result=this.ActiveAlerts.Pagination.TotalPages;
            });
            break;
        }
    };
    resolvedtasksComponent.prototype.getStart = function () {
        var _this = this;
        this.tootlepage = 1;
        this.service.ResolvedTicket(this.tootlepage).subscribe(function (data) {
            //console.log(data);TotalPages
            _this.ResolvedTask = data;
            console.log(_this.ResolvedTask);
            //this.Result=this.ActiveAlerts.Pagination.TotalPages;
        });
    };
    resolvedtasksComponent.prototype.getEnd = function () {
        var _this = this;
        this.Result;
        this.service.ResolvedTicket(this.Result).subscribe(function (data) {
            //console.log(data);TotalPages
            _this.ResolvedTask = data;
            console.log(_this.ResolvedTask);
            //this.Result=this.ActiveAlerts.Pagination.TotalPages;
        });
    };
    resolvedtasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/resolvedtasks.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__components_service__["a" /* ComponentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_service__["a" /* ComponentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], resolvedtasksComponent);
    return resolvedtasksComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=resolvedtasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/switches.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <h4>List</h4>\n    \n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/switches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchesComponent = (function () {
    function SwitchesComponent() {
    }
    SwitchesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/switches.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SwitchesComponent);
    return SwitchesComponent;
}());

//# sourceMappingURL=switches.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n   <h4>Map History</h4>\n  </div>\n  <!--/.row-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesComponent = (function () {
    function TablesComponent() {
    }
    TablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/tables.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());

//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/viewmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <h4>View Map</h4>\n    <!-- <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Options</strong>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n          <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-success\">Success</button>\n          <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n          <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n          <button type=\"button\" class=\"btn btn-link\">Link</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>With Icons</strong>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-star\"></i>&nbsp; Primary</button>\n          <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-lightbulb-o\"></i>&nbsp; Secondary</button>\n          <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-magic\"></i>&nbsp; Success</button>\n          <button type=\"button\" class=\"btn btn-warning\"><i class=\"fa fa-map-marker\"></i>&nbsp; Warning</button>\n          <button type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-rss\"></i>&nbsp; Danger</button>\n          <button type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-link\"></i>&nbsp; Link</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Size Large</strong>\n          <small>Add this class\n            <code>.btn-lg</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-primary btn-lg\">Primary</button>\n          <button type=\"button\" class=\"btn btn-secondary btn-lg\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-success btn-lg\">Success</button>\n          <button type=\"button\" class=\"btn btn-info btn-lg\">Info</button>\n          <button type=\"button\" class=\"btn btn-warning btn-lg\">Warning</button>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\">Danger</button>\n          <button type=\"button\" class=\"btn btn-link btn-lg\">Link</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Size Small</strong>\n          <small>Add this class\n            <code>.btn-sm</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-primary btn-sm\">Primary</button>\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-success btn-sm\">Success</button>\n          <button type=\"button\" class=\"btn btn-info btn-sm\">Info</button>\n          <button type=\"button\" class=\"btn btn-warning btn-sm\">Warning</button>\n          <button type=\"button\" class=\"btn btn-danger btn-sm\">Danger</button>\n          <button type=\"button\" class=\"btn btn-link btn-sm\">Link</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Disabled state</strong>\n          <small>Add this\n            <code>disabled=\"disabled\"</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-primary\" disabled=\"disabled\">Primary</button>\n          <button type=\"button\" class=\"btn btn-secondary\" disabled=\"disabled\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-success\" disabled=\"disabled\">Success</button>\n          <button type=\"button\" class=\"btn btn-info\" disabled=\"disabled\">Info</button>\n          <button type=\"button\" class=\"btn btn-warning\" disabled=\"disabled\">Warning</button>\n          <button type=\"button\" class=\"btn btn-danger\" disabled=\"disabled\">Danger</button>\n          <button type=\"button\" class=\"btn btn-link\" disabled=\"disabled\">Link</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Active state</strong>\n          <small>Add this class\n            <code>.active</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-primary active\">Primary</button>\n          <button type=\"button\" class=\"btn btn-secondary active\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-success active\">Success</button>\n          <button type=\"button\" class=\"btn btn-info active\">Info</button>\n          <button type=\"button\" class=\"btn btn-warning active\">Warning</button>\n          <button type=\"button\" class=\"btn btn-danger active\">Danger</button>\n          <button type=\"button\" class=\"btn btn-link active\">Link</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Block Level Buttons</strong>\n          <small>Add this class\n            <code>.btn-block</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-success btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-info btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-warning btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-link btn-lg btn-block\">Block level button</button>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Options</strong>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\n          <button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>\n          <button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>With Icons</strong>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-outline-primary\"><i class=\"fa fa-star\"></i>&nbsp; Primary</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary\"><i class=\"fa fa-lightbulb-o\"></i>&nbsp; Secondary</button>\n          <button type=\"button\" class=\"btn btn-outline-success\"><i class=\"fa fa-magic\"></i>&nbsp; Success</button>\n          <button type=\"button\" class=\"btn btn-outline-warning\"><i class=\"fa fa-map-marker\"></i>&nbsp; Warning</button>\n          <button type=\"button\" class=\"btn btn-outline-danger\"><i class=\"fa fa-rss\"></i>&nbsp; Danger</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Size Large</strong>\n          <small>Add this class\n            <code>.btn-lg</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-outline-primary btn-lg\">Primary</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-lg\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-outline-success btn-lg\">Success</button>\n          <button type=\"button\" class=\"btn btn-outline-info btn-lg\">Info</button>\n          <button type=\"button\" class=\"btn btn-outline-warning btn-lg\">Warning</button>\n          <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Danger</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Size Small</strong>\n          <small>Add this class\n            <code>.btn-sm</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-outline-primary btn-sm\">Primary</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-outline-success btn-sm\">Success</button>\n          <button type=\"button\" class=\"btn btn-outline-info btn-sm\">Info</button>\n          <button type=\"button\" class=\"btn btn-outline-warning btn-sm\">Warning</button>\n          <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Danger</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Disabled state</strong>\n          <small>Add this\n            <code>disabled=\"disabled\"</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" disabled=\"disabled\">Primary</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary\" disabled=\"disabled\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-success\" disabled=\"disabled\">Success</button>\n          <button type=\"button\" class=\"btn btn-outline-info\" disabled=\"disabled\">Info</button>\n          <button type=\"button\" class=\"btn btn-outline-warning\" disabled=\"disabled\">Warning</button>\n          <button type=\"button\" class=\"btn btn-outline-danger\" disabled=\"disabled\">Danger</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Active state</strong>\n          <small>Add this class\n            <code>.active</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-outline-primary active\">Primary</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary active\">Secondary</button>\n          <button type=\"button\" class=\"btn btn-outline-success active\">Success</button>\n          <button type=\"button\" class=\"btn btn-outline-info active\">Info</button>\n          <button type=\"button\" class=\"btn btn-outline-warning active\">Warning</button>\n          <button type=\"button\" class=\"btn btn-outline-danger active\">Danger</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Block Level Buttons</strong>\n          <small>Add this class\n            <code>.btn-block</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-outline-success btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-outline-info btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-outline-warning btn-lg btn-block\">Block level button</button>\n          <button type=\"button\" class=\"btn btn-outline-danger btn-lg btn-block\">Block level button</button>\n        </div>\n      </div>\n    </div> -->\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/viewmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewmapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewmapComponent = (function () {
    function ViewmapComponent() {
    }
    ViewmapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/viewmap.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ViewmapComponent);
    return ViewmapComponent;
}());

//# sourceMappingURL=viewmap.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/bs-modal.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");





var BsModalService = (function () {
    function BsModalService(clf) {
        this.clf = clf;
        // constructor props
        this.config = __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["f" /* modalConfigDefaults */];
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
    }
    /** Shows a modal */
    BsModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["f" /* modalConfigDefaults */], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    BsModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["e" /* TransitionDurations */].BACKDROP : 0);
    };
    BsModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(__WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    BsModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["e" /* TransitionDurations */].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    BsModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var bsModalRef = new __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["a" /* BsModalRef */]();
        var modalContainerRef = modalLoader
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["d" /* ModalOptions */], useValue: this.config })
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["a" /* BsModalRef */], useValue: bsModalRef })
            .attach(__WEBPACK_IMPORTED_MODULE_3__modal_container_component__["a" /* ModalContainerComponent */])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        return bsModalRef;
    };
    BsModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    BsModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    BsModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    BsModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    BsModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    BsModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = (this.originalBodyPadding + this.scrollbarWidth) + "px";
        }
    };
    BsModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    BsModalService.prototype.getScrollbarWidth = function () {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["b" /* ClassName */].SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    BsModalService.prototype._createLoaders = function () {
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    BsModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    BsModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    return BsModalService;
}());
//# sourceMappingURL=bs-modal.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* unused harmony reexport ModalContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* unused harmony reexport ModalBackdropComponent */
/* unused harmony reexport ModalBackdropOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* unused harmony reexport ModalOptions */
/* unused harmony reexport BsModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.component.js");
/* unused harmony reexport ModalDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_module__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__modal_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* unused harmony reexport BsModalService */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-backdrop.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalBackdropOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBackdropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../ngx-bootstrap/utils/ng2-bootstrap-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/utils.class.js");




var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].IN, value);
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
                this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].SHOW, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].FADE, this.isAnimated);
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: '',
                    // tslint:disable-next-line
                    host: { 'class': __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ]; };
    return ModalBackdropComponent;
}());
//# sourceMappingURL=modal-backdrop.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../ngx-bootstrap/utils/ng2-bootstrap-config.js");




var ModalContainerComponent = (function () {
    // @HostListener('window:focusin', ['$event'])
    // public enforceFocus($event:any): void {
    //   if (!(this._element.nativeElement === $event.target || this._element.nativeElement.contains($event.target))) {
    //     this._element.nativeElement.focus();
    //   }
    // }
    // @HostListener('focusout', ['$event'])
    // public preventFocusOut($event:any): void {
    //   if (!$event.relatedTarget) {
    //     this._element.nativeElement.focus();
    //   }
    // }
    function ModalContainerComponent(options, _element, bsModalService, _renderer) {
        this.bsModalService = bsModalService;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["c" /* DISMISS_REASONS */].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard && this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["c" /* DISMISS_REASONS */].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].FADE, true);
        }
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.setElementClass(_this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_3__utils_ng2_bootstrap_config__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].SHOW, true);
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["e" /* TransitionDurations */].BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.setElementClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].OPEN, true);
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.setElementClass(this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_3__utils_ng2_bootstrap_config__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].SHOW, false);
        setTimeout(function () {
            _this.isShown = false;
            if (document && document.body && _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.setElementClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* ClassName */].OPEN, false);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["e" /* TransitionDurations */].MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n  ",
                    // tslint:disable-next-line
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1'
                    }
                },] },
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["d" /* ModalOptions */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__bs_modal_service__["a" /* BsModalService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ]; };
    ModalContainerComponent.propDecorators = {
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:keydown.esc',] },],
    };
    return ModalContainerComponent;
}());
//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-options.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClassName; });
/* unused harmony export Selector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TransitionDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DISMISS_REASONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var ModalOptions = (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ModalOptions.ctorParameters = function () { return []; };
    return ModalOptions;
}());
var BsModalRef = (function () {
    function BsModalRef() {
    }
    /**
     * Hides the modal
     */
    BsModalRef.prototype.hide = function () { };
    BsModalRef.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalRef.ctorParameters = function () { return []; };
    return BsModalRef;
}());
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=modal-options.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__("../../../../ngx-bootstrap/utils/facade/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../ngx-bootstrap/utils/ng2-bootstrap-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/utils.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events








var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete) */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired immediately when the hide instance method has been called. */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["c" /* DISMISS_REASONS */].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["c" /* DISMISS_REASONS */].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.classList.contains(__WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* ClassName */].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.setElementClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* ClassName */].OPEN, true);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* ClassName */].IN, false);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* ClassName */].SHOW, false);
        }
        // this._addClassIn = false;
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["f" /* modalConfigDefaults */], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setElementProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* ClassName */].IN, true);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* ClassName */].SHOW, true);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                    _this._renderer.setElementClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* ClassName */].OPEN, false);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = function () {
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
    };
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setElementStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setElementStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */]) {
            return;
        }
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].getComputedStyle(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = (this.originalBodyPadding + this.scrollbarWidth) + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, 'div', void 0);
        scrollDiv.className = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* ClassName */].SCROLLBAR_MEASURER;
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    ModalDirective.propDecorators = {
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown.esc',] },],
    };
    return ModalDirective;
}());
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");







var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule, providers: [__WEBPACK_IMPORTED_MODULE_6__bs_modal_service__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_4__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning__["a" /* PositioningService */]] };
    };
    ModalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalDirective */], __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["a" /* ModalContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["a" /* ModalContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    ModalModule.ctorParameters = function () { return []; };
    return ModalModule;
}());
//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/utils.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("../../../../ngx-bootstrap/utils/facade/browser.js");

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ "../../../../ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

});
//# sourceMappingURL=components.module.chunk.js.map