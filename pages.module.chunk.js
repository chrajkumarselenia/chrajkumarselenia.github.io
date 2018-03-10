webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P404Component; });
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

var P404Component = (function () {
    function P404Component() {
    }
    P404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/pages/404.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());

//# sourceMappingURL=404.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  \n"

/***/ }),

/***/ "../../../../../src/app/pages/500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P500Component; });
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

var P500Component = (function () {
    function P500Component() {
    }
    P500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/pages/500.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P500Component);
    return P500Component;
}());

//# sourceMappingURL=500.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n\n          <tabset>\n              <tab heading=\"Login\">\n                  <div class=\"card-group mb-0\">\n                      <div class=\"card p-4\">\n                        \n                        <div class=\"card-body\">\n                          <h1>Login</h1>\n                          <p class=\"text-muted\">Sign In to your account</p>\n                          <div class=\"input-group mb-3\">\n                            <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                            <input type=\"email\" required class=\"form-control\" [(ngModel)]='Email'  placeholder=\"Email\">\n                          </div>\n                          <div class=\"input-group mb-4\">\n                            <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                            <input type=\"password\" [(ngModel)]='Password' class=\"form-control\" placeholder=\"Password\" required>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-6\">\n                              <button type=\"button\" (click)=\"Login(Email,Password)\" class=\"btn btn-primary px-4\">Login</button>\n                            </div>\n                            <div class=\"col-6 text-right\">\n                              <button type=\"button\" aria-readonly=\"true\" class=\"btn btn-link px-0\">Forgot password?</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n                        <div class=\"card-body text-center\">\n                          <div>\n                            <h2>Sign up</h2>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                            <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n              </tab>\n              <tab heading=\"Login As Beneficiary\">\n                  <div class=\"card-group mb-0\">\n                      <div class=\"card p-4\">\n                        \n                        <div class=\"card-body\">\n                          <h3>Login As Beneficiary</h3>\n                          <p class=\"text-muted\">Sign In to your account</p>\n                          <div class=\"input-group mb-3\">\n                            <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                            <input type=\"email\" required class=\"form-control\" [(ngModel)]='DocumentId'  placeholder=\"DocumentId\">\n                          </div>\n                          <div class=\"input-group mb-4\">\n                            <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                            <input type=\"password\" [(ngModel)]='Phone' class=\"form-control\" placeholder=\"Phone\" required>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-6\">\n                              <button type=\"button\" (click)=\"LoginBen(DocumentId,Phone)\" class=\"btn btn-primary px-4\">Login</button>\n                            </div>\n                            <div class=\"col-6 text-right\">\n                              <button type=\"button\" aria-readonly=\"true\" class=\"btn btn-link px-0\">Forgot password?</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n                        <div class=\"card-body text-center\">\n                          <div>\n                            <h2>Sign up  As Beneficiary</h2>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                            <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n              </tab>\n              \n            </tabset>\n        <!-- <div class=\"card-group mb-0\">\n          <div class=\"card p-4\">\n            \n            <div class=\"card-body\">\n              <h1>Login</h1>\n              <p class=\"text-muted\">Sign In to your account</p>\n              <div class=\"input-group mb-3\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"email\" required class=\"form-control\" [(ngModel)]='Email'  placeholder=\"Email\">\n              </div>\n              <div class=\"input-group mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input type=\"password\" [(ngModel)]='Password' class=\"form-control\" placeholder=\"Password\" required>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <button type=\"button\" (click)=\"Login(Email,Password)\" class=\"btn btn-primary px-4\">Login</button>\n                </div>\n                <div class=\"col-6 text-right\">\n                  <button type=\"button\" aria-readonly=\"true\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n            <div class=\"card-body text-center\">\n              <div>\n                <h2>Sign up</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n              </div>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_service__ = __webpack_require__("../../../../../src/app/pages/pages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_storage_services_service__ = __webpack_require__("../../../../../src/app/services/session-storage-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(service, router, AativatedRoute, sessionstore) {
        this.service = service;
        this.router = router;
        this.AativatedRoute = AativatedRoute;
        this.sessionstore = sessionstore;
    }
    //     let tkn=sessionStorage.getItem('a_Token');
    //     alert(tkn);
    // if(tkn==null){
    //   this.router.navigate(['/']);
    // }
    //}
    LoginComponent.prototype.LoginBen = function (DocumentId, Phone) {
        var _this = this;
        this.service.Loginb(DocumentId, Phone).subscribe(function (data) {
            alert('success');
            sessionStorage.setItem('o_Token', 'f189d80eea148b9c10bd80ba6eea572709f62b48eed8aad359d9f72baf408052');
            sessionStorage.setItem('ownerID', '3');
            // this.sessionstore.StoreOperatorData(this.LogData);
            debugger;
            if (sessionStorage.getItem('o_Token') != null) {
                _this.token = sessionStorage.getItem('o_Token');
                _this.router.navigate(['/odashboard']);
            }
        }, function (error) {
            alert('failed');
        });
    };
    ;
    LoginComponent.prototype.Login = function (Email, Password) {
        var _this = this;
        this.service.Login(Email, Password).subscribe(function (data) {
            if (data != null)
                _this.LogData = data;
            if (_this.LogData.SingleData != null) {
                //this.sessionstore.StoreAdminData(this.LogData);
                if (_this.LogData.SingleData.OwnerUserId == 1) {
                    console.log(_this.LogData.SingleData.Token);
                    sessionStorage.setItem('a_Token', _this.LogData.SingleData.Token);
                    sessionStorage.setItem('ownerID', _this.LogData.SingleData.OwnerUserId);
                    console.log('atoke:' + _this.LogData.SingleData.OwnerUserId);
                    if (sessionStorage.getItem('a_Token') != null) {
                        _this.token = sessionStorage.getItem('a_Token');
                        _this.router.navigate(['/adashboard']);
                    }
                }
                if (_this.LogData.SingleData.OwnerUserId == 2) {
                    //this.sessionstore.StoreSuperAdminData(this.LogData);
                    console.log(_this.LogData.SingleData.Token);
                    sessionStorage.setItem('s_Token', _this.LogData.SingleData.Token);
                    sessionStorage.setItem('ownerID', _this.LogData.SingleData.OwnerUserId);
                    console.log('stoke:' + _this.LogData.SingleData.OwnerUserId);
                    debugger;
                    if (sessionStorage.getItem('s_Token') != null) {
                        _this.token = sessionStorage.getItem('s_Token');
                        _this.router.navigate(['/dashboard']);
                    }
                }
                if (_this.LogData.SingleData.OwnerUserId == 3) {
                    sessionStorage.setItem('o_Token', _this.LogData.SingleData.Token);
                    sessionStorage.setItem('ownerID', _this.LogData.SingleData.OwnerUserId);
                    // this.sessionstore.StoreOperatorData(this.LogData);
                    debugger;
                    if (sessionStorage.getItem('o_Token') != null) {
                        _this.token = sessionStorage.getItem('o_Token');
                        _this.router.navigate(['/odashboard']);
                    }
                }
            }
            else {
                alert(_this.LogData.Error.Text);
            }
        }, function (error) {
            alert("failed");
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/pages/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_storage_services_service__["a" /* SessionStorageServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_storage_services_service__["a" /* SessionStorageServicesService */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

// import { Component } from '@angular/core';
// import { PagesService } from './pages.service';
// import{Router, ActivatedRoute} from '@angular/router';
// @Component({
//   templateUrl: 'login.component.html'
// })
// export class LoginComponent {
//   LogData:any;
//    constructor(private service:PagesService,private router:Router,private AativatedRoute:ActivatedRoute) { }
//    Login(Email,Password){
//  this.service.Login(Email,Password).subscribe((data)=>{
//    if(data!=null)
//    this.LogData=data;
//    if(this.LogData.SingleData!=null){
//    alert('success');
//    sessionStorage.setItem('Token',this.LogData.SingleData.Token);
//    var Token=sessionStorage.getItem('Token');
//    //alert(Token);
//    alert(this.LogData.SingleData.OwnerUserId);
//    if(this.LogData.SingleData.OwnerUserId==1){
//      alert(this.LogData.SingleData.UserTypeId);
//    this.router.navigate(['/adashboard']);
//  }
//   else if(this.LogData.SingleData.OwnerUserId==2){
//     this.router.navigate(['/dashboard']);
//   }
//   else if(this.LogData.SingleData.OwnerUserId==3){
//     this.router.navigate(['/odashboard']);
//   }
// }else{
//   alert(this.LogData.Error.Text);
// }
// },
// (error)=>{
//   alert("failed");
//   console.log(error);
// }
// );
// }
// }
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__404_component__ = __webpack_require__("../../../../../src/app/pages/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__500_component__ = __webpack_require__("../../../../../src/app/pages/500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/pages/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__("../../../../../src/app/pages/register.component.ts");
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
            title: 'Example Pages'
        },
        children: [
            {
                path: '404',
                component: __WEBPACK_IMPORTED_MODULE_2__404_component__["a" /* P404Component */],
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: __WEBPACK_IMPORTED_MODULE_3__500_component__["a" /* P500Component */],
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */],
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());

//# sourceMappingURL=pages-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__404_component__ = __webpack_require__("../../../../../src/app/pages/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__500_component__ = __webpack_require__("../../../../../src/app/pages/500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/pages/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/pages/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_service__ = __webpack_require__("../../../../../src/app/pages/pages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__pages_routing_module__["a" /* PagesRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__["a" /* TabsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__404_component__["a" /* P404Component */],
                __WEBPACK_IMPORTED_MODULE_2__500_component__["a" /* P500Component */],
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__pages_service__["a" /* PagesService */]]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesService; });
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


var PagesService = (function () {
    function PagesService(httpClient) {
        this.httpClient = httpClient;
    }
    PagesService.prototype.Login = function (Email, Password) {
        return this.httpClient.post('https://52.52.49.131/dev_api/users/login', { EMAIL: Email, PASSWORD: Password });
    };
    PagesService.prototype.Loginb = function (DocumentId, Phone) {
        //this.url='http://52.52.49.131/api/Location/BatteryStatus/+PersonId';
        //return this.httpClient.post('http://52.52.49.131/api/Locations/Login',{DocumentId:DocumentId,Phone:Phone});
        return this.httpClient.post('https://localhost:65005/api/Locations/Login', { DocumentId: DocumentId, Phone: Phone });
    };
    PagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], PagesService);
    return PagesService;
    var _a;
}());

//# sourceMappingURL=pages.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card mx-4\">\n          <div class=\"card-body p-4\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <div class=\"input-group mb-4\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n            </div>\n\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n          </div>\n          <div class=\"card-footer p-4\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/pages/register.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.component.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map