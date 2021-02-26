(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Big Proj\SketchNest\FrontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "3yZ9":
/*!*********************************************!*\
  !*** ./src/app/services/connect.service.ts ***!
  \*********************************************/
/*! exports provided: ConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return ConnectService; });
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client/dist/socket.io */ "yd8o");
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class ConnectService {
    constructor(http) {
        this.http = http;
    }
    setupSocketConnection() {
        this.socket = socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_0__(this.url);
    }
}
ConnectService.ɵfac = function ConnectService_Factory(t) { return new (t || ConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ConnectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConnectService, factory: ConnectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA4CWFIoh19-WqZ-6UJzCFssFP4jKsGNxs',
        authDomain: 'sketchnest-3d589.firebaseapp.com',
        projectId: 'sketchnest-3d589',
        storageBucket: 'sketchnest-3d589.appspot.com',
        messagingSenderId: '184049527766',
        appId: '1:184049527766:web:af3831c119387417f8d277',
        measurementId: 'G-WB1SWTLQJC',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DohZ":
/*!********************************************************************!*\
  !*** ./src/app/dialog-create-room/dialog-create-room.component.ts ***!
  \********************************************************************/
/*! exports provided: DialogCreateRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCreateRoomComponent", function() { return DialogCreateRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");


class DialogCreateRoomComponent {
    constructor() { }
    ngOnInit() {
    }
}
DialogCreateRoomComponent.ɵfac = function DialogCreateRoomComponent_Factory(t) { return new (t || DialogCreateRoomComponent)(); };
DialogCreateRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogCreateRoomComponent, selectors: [["app-dialog-create-room"]], decls: 11, vars: 0, consts: [["mat-dialog-title", ""], ["type", "text", "placeholder", "Enter room ID..."], ["type", "text", "placeholder", "Enter password..."]], template: function DialogCreateRoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CREATE NEW ROOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"]], styles: ["body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  width: 300px;\n  height: 40px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n  height: 40px;\n  width: 150px;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpYWxvZy1jcmVhdGUtcm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS1yb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client/dist/socket.io */ "yd8o");
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




const SOCKET_ENDPOINT = 'localhost:3000';
class AppComponent {
    constructor() {
        this.title = 'SketchNest';
    }
    ngOnInit() {
        this.setupSocketConnection();
    }
    setupSocketConnection() {
        this.socket = socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_0__(SOCKET_ENDPOINT);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/connect.service */ "3yZ9");
/* harmony import */ var _dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog-example/dialog-example.component */ "flFs");
/* harmony import */ var _dialog_create_room_dialog_create_room_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog-create-room/dialog-create-room.component */ "DohZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "8Y7J");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_connect_service__WEBPACK_IMPORTED_MODULE_11__["ConnectService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_12__["DialogExampleComponent"], _dialog_create_room_dialog_create_room_component__WEBPACK_IMPORTED_MODULE_13__["DialogCreateRoomComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]] }); })();


/***/ }),

/***/ "flFs":
/*!************************************************************!*\
  !*** ./src/app/dialog-example/dialog-example.component.ts ***!
  \************************************************************/
/*! exports provided: DialogExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExampleComponent", function() { return DialogExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");


class DialogExampleComponent {
    constructor() { }
    ngOnInit() {
    }
}
DialogExampleComponent.ɵfac = function DialogExampleComponent_Factory(t) { return new (t || DialogExampleComponent)(); };
DialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogExampleComponent, selectors: [["app-dialog-example"]], decls: 15, vars: 0, consts: [["mat-dialog-title", ""], ["type", "email", "placeholder", "Email...."], ["type", "text", "placeholder", "https://jamboard.google.com/d/1F-xEZIwXmf_v_wLyowXXHM16E2Bkb-PB_AUWouAL5zo/edit?usp=sharing"]], template: function DialogExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Share with your friends and groups?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "___________Or___________");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get the link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Copy link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Only added users will receive this link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]], styles: ["body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 300px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100px;\n  background: blue;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpYWxvZy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImRpYWxvZy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG5cclxufVxyXG5pbnB1dHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIFxyXG59XHJcbmJ1dHRvbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





function NavbarComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "register");
} }
function NavbarComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.auth.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "login");
} }
function NavbarComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "home");
} }
class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.auth.logout();
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 24, vars: 4, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Oswald:wght@200;300;400;500;600;700&family=Ultra&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"], ["id", "header-1"], [1, "navbar", "bg-custom", "navbar-expand-sm", "navbar-dark", "fixed-top", "py-0"], ["href", "#", 1, "navbar-brand", "py-2"], ["src", "https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.15752-9/152957362_1400385440293685_8382703701793146260_n.png?_nc_cat=101&ccb=3&_nc_sid=ae9488&_nc_ohc=Ng06sIqqRpoAX-yZ8Dw&_nc_ht=scontent.fsgn5-1.fna&oh=1057fccc79ee06c4d446c53ee6d006b8&oe=605860B4", "width", "155"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse", "text-center"], ["id", "listed", 1, "navbar-nav", "font-weight-bold", "ml-auto", "flex-row"], [1, "nav-item", "my-2", "b1", "ml-3"], ["class", "nav-link d-inline active", 3, "routerLink", 4, "ngIf"], ["style", "border-radius: 50%", "height", "50px", 3, "src", 4, "ngIf"], [1, "nav-item", "my-2", "ml-3", "b2"], ["class", "navdn", 3, "routerLink", 4, "ngIf"], ["class", "navdn", 3, "routerLink", "click", 4, "ngIf"], [1, "nav-link", "d-inline", "active", 3, "routerLink"], ["height", "50px", 2, "border-radius", "50%", 3, "src"], [1, "navdn", 3, "routerLink"], [1, "navdn", 3, "routerLink", "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ELRadio Mobile Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavbarComponent_a_18_Template, 2, 1, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NavbarComponent_img_19_Template, 1, 1, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NavbarComponent_a_21_Template, 2, 1, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NavbarComponent_a_23_Template, 2, 1, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".bg-custom[_ngcontent-%COMP%] {\n  background: whitesmoke;\n}\n\n.img-div[_ngcontent-%COMP%] {\n  width: 98%;\n  max-width: 100%;\n  display: block;\n  height: auto;\n  margin: auto;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  \n  margin: auto;\n  display: block;\n}\n\n.image[_ngcontent-%COMP%] {\n  \n  max-width: 99%;\n  height: auto;\n  \n  \n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  \n}\n\n#header-1[_ngcontent-%COMP%]   .bg-custom[_ngcontent-%COMP%] {\n  background: black;\n}\n\n#header-1[_ngcontent-%COMP%]   .b1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ff003d;\n  padding: 7px 20px;\n  border-radius: 5px;\n}\n\n#header-1[_ngcontent-%COMP%]   .b2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 7px 20px;\n  border-radius: 5px;\n  color: #000;\n}\n\n#sec-1[_ngcontent-%COMP%]   .jumbotron-fluid[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  background-image: url(\"https://i.pinimg.com/originals/fa/03/36/fa0336691e8f9bf6f24e193c7f57150f.jpg\");\n  background-size: cover;\n  height: 400px;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n#sec-1[_ngcontent-%COMP%]   .jumbotron-fluid[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 400px;\n  background: rgba(33, 33, 45, 0.75);\n}\n\n#sec-1[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\n#sec-1[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #sec-5[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  position: relative;\n  \n}\n\n#sec-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 50px;\n  width: 80%;\n}\n\n#sec-2[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  background-color: #161718;\n}\n\n#sec-2[_ngcontent-%COMP%]   #sec-5[_ngcontent-%COMP%]   .jumbotron-fluid[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   #sec-5[_ngcontent-%COMP%]   .jumbotron-fluid[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   #sec-5[_ngcontent-%COMP%]   .jumbotron-fluid[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-image: url(\"https://www.verdict.co.uk/wp-content/uploads/2017/11/smartphones.jpg\");\n  background-size: cover;\n  height: 350px;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n#sec-2[_ngcontent-%COMP%]   #sec-5[_ngcontent-%COMP%]   .jumbotron-fluid[_ngcontent-%COMP%]:before, #sec-3[_ngcontent-%COMP%]   #sec-5[_ngcontent-%COMP%]   .jumbotron-fluid[_ngcontent-%COMP%]:before, #sec-4[_ngcontent-%COMP%]   #sec-5[_ngcontent-%COMP%]   .jumbotron-fluid[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 350px;\n  background: rgba(33, 33, 45, 0.75);\n}\n\n#sec-2[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%] {\n  background: #212121;\n}\n\n#sec-2[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ff003d;\n  font-size: 22px;\n}\n\n#sec-2[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n}\n\n#sec-2[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #sec-3[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #sec-4[_ngcontent-%COMP%]   #foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff003d;\n}\n\n@media (min-width: 1200px) {\n  #sec-2[_ngcontent-%COMP%]   #sec-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-2[_ngcontent-%COMP%]   #sec-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-2[_ngcontent-%COMP%]   #sec-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   #sec-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   #sec-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   #sec-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   #sec-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   #sec-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   #sec-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 200px;\n    width: 60%;\n    margin: auto;\n  }\n}\n\n@media (min-width: 1300px) {\n  #sec-2[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    max-width: 1200px;\n  }\n}\n\n@media (max-width: 575px) {\n  #sec-2[_ngcontent-%COMP%]   #header-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], #sec-3[_ngcontent-%COMP%]   #header-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], #sec-4[_ngcontent-%COMP%]   #header-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin: auto;\n    padding-bottom: 10px;\n  }\n}\n\n#btndx[_ngcontent-%COMP%] {\n  width: 100px;\n  border-radius: 10px;\n  height: 35px;\n  background: #ff003d;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxzQkFBQTtBQUFEOztBQUVFO0VBQ0QsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRDs7QUFFRTtFQUNELGVBQUE7RUFDQSxtRUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBQ0U7RUFDRCxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxJQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsSUFBQTtBQUVEOztBQUFFO0VBQ0QsaUJBQUE7QUFHRDs7QUFERTtFQUNELG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUlEOztBQUZFO0VBQ0QsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtEOztBQUhFO0VBQ0Qsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFHQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQU1EOztBQUpFO0VBQ0QsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBT0Q7O0FBTEU7RUFDRCxnQkFBQTtBQVFEOztBQU5FOztFQUVELGtCQUFBO0VBQW9CLDBDQUFBO0FBVXJCOztBQVJFO0VBQ0QsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVdEOztBQVRFOzs7RUFJRCxvQkFBQTtFQUNBLHlCQUFBO0FBV0Q7O0FBUkU7OztFQUNELGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkZBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FBWUQ7O0FBVkU7OztFQUNELFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQWNEOztBQVpFOzs7RUFDRCxtQkFBQTtBQWdCRDs7QUFkRTs7O0VBQ0QsY0FBQTtFQUNBLGVBQUE7QUFrQkQ7O0FBaEJFOzs7RUFDRCxXQUFBO0VBQ0EsZUFBQTtBQW9CRDs7QUFsQkU7OztFQUNELGNBQUE7QUFzQkQ7O0FBbkJFO0VBQ0Q7Ozs7Ozs7OztJQUdFLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUEyQkQ7QUFDRjs7QUF6QkU7RUFDRDs7O0lBQ0UsaUJBQUE7RUE2QkQ7QUFDRjs7QUEzQkU7RUFDRDs7O0lBQ0UsdUJBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7RUErQkQ7QUFDRjs7QUE1QkU7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0YsbUJBQUE7RUFDQSxZQUFBO0FBK0JEIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jdXN0b20ge1xyXG5cdC8vYmFja2dyb3VuZDogI2VmZWZlZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgfVxyXG4gIC5pbWctZGl2IHtcclxuXHR3aWR0aDogOTglO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdC8vYmFja2dyb3VuZDp3aGl0ZTtcclxuICB9XHJcbiAgLmltYWdlIGltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdC8qdGhpcyBpcyB0aGUgb25seSB3YXkgdG8gbWFrZSBpbWFnZSByZXNwb25zaXZlIGluc2lkZSB0aGUgZmxleGJveCovXHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuaW1hZ2Uge1xyXG5cdC8qcmVzcG9uc2l2ZSovXHJcblx0bWF4LXdpZHRoOiA5OSU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdC8qICovXHJcblx0LypjZW50ZXJpemVkKi9cclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0LyogKi9cclxuICB9XHJcbiAgI2hlYWRlci0xIC5iZy1jdXN0b20ge1xyXG5cdGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICB9XHJcbiAgI2hlYWRlci0xIC5iMSBhIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmYwMDNkO1xyXG5cdHBhZGRpbmc6IDdweCAyMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgI2hlYWRlci0xIC5iMiBhIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDdweCAyMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgI3NlYy0xIC5qdW1ib3Ryb24tZmx1aWQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2ZhLzAzLzM2L2ZhMDMzNjY5MWU4ZjliZjZmMjRlMTkzYzdmNTcxNTBmLmpwZ1wiKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGhlaWdodDogNDAwcHg7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICAjc2VjLTEgLmp1bWJvdHJvbi1mbHVpZDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNDAwcHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgzMywgMzMsIDQ1LCAwLjc1KTtcclxuICB9XHJcbiAgI3NlYy0xIHtcclxuXHRtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIH1cclxuICAjc2VjLTEgKixcclxuICAjc2VjLTUgKiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlOyAvKiBNYWtlcyBlbGVtZW50cyBkaXNwbGF5IGFib3ZlIG92ZXJsYXkuICovXHJcbiAgfVxyXG4gICNzZWMtMSBwIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHR3aWR0aDogODAlO1xyXG4gIH1cclxuICAjc2VjLTIsXHJcbiAgI3NlYy0zLFxyXG4gICNzZWMtNCB7XHJcblx0Ly8gbWFyZ2luLXRvcDoyMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxNjE3MTg7XHJcblxyXG4gIFxyXG4gICNzZWMtNSAuanVtYm90cm9uLWZsdWlkIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LnZlcmRpY3QuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTEvc21hcnRwaG9uZXMuanBnXCIpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0aGVpZ2h0OiAzNTBweDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gICNzZWMtNSAuanVtYm90cm9uLWZsdWlkOmJlZm9yZSB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAzNTBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDMzLCAzMywgNDUsIDAuNzUpO1xyXG4gIH1cclxuICAjZm9vdCB7XHJcblx0YmFja2dyb3VuZDogcmdiKDMzLCAzMywgMzMpO1xyXG4gIH1cclxuICAjZm9vdCBwIHtcclxuXHRjb2xvcjogI2ZmMDAzZDtcclxuXHRmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG4gICNmb290IGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgI2Zvb3QgYTpob3ZlciB7XHJcblx0Y29sb3I6ICNmZjAwM2Q7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHQjc2VjLTIgcCxcclxuXHQjc2VjLTMgcCxcclxuXHQjc2VjLTQgcCB7XHJcblx0ICBtYXJnaW4tdG9wOiAyMDBweDtcclxuXHQgIHdpZHRoOiA2MCU7XHJcblx0ICBtYXJnaW46IGF1dG87XHJcblx0fVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XHJcblx0LnRvdGFsIHtcclxuXHQgIG1heC13aWR0aDogMTIwMHB4O1xyXG5cdH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcblx0I2hlYWRlci0xIHVsIHtcclxuXHQgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdCAgbWFyZ2luOiBhdXRvO1xyXG5cdCAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbiAgfVxyXG4gICNidG5keHtcclxuXHQgIHdpZHRoOiAxMDBweDtcclxuXHQgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0ICBoZWlnaHQ6IDM1cHg7XHJcblx0YmFja2dyb3VuZDogI2ZmMDAzZDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuIl19 */"] });
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





class AuthService {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
                console.log(user.displayName);
                console.log('login success! ' + user.displayName);
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    oAuthLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.provider) == new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
            yield this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider());
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.afAuth.signOut().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.router.navigate(['/']);
                localStorage.removeItem('user');
                this.user = null;
            }));
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then((m) => m.LoginModule),
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-register-register-module */ "pages-register-register-module").then(__webpack_require__.bind(null, /*! ./pages/register/register.module */ "fhSy")).then((m) => m.RegisterModule),
    },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then((m) => m.HomeModule),
    },
    {
        path: 'lobby',
        loadChildren: () => Promise.all(/*! import() | pages-lobby-lobby-module */[__webpack_require__.e("default~pages-draw-draw-module~pages-lobby-lobby-module"), __webpack_require__.e("default~pages-history-history-module~pages-lobby-lobby-module"), __webpack_require__.e("pages-lobby-lobby-module")]).then(__webpack_require__.bind(null, /*! ./pages/lobby/lobby.module */ "jnQr")).then((m) => m.LobbyModule),
    },
    {
        path: 'history',
        loadChildren: () => Promise.all(/*! import() | pages-history-history-module */[__webpack_require__.e("default~pages-history-history-module~pages-lobby-lobby-module"), __webpack_require__.e("pages-history-history-module")]).then(__webpack_require__.bind(null, /*! ./pages/history/history.module */ "6F3i")).then((m) => m.HistoryModule),
    },
    {
        path: 'draw',
        loadChildren: () => Promise.all(/*! import() | pages-draw-draw-module */[__webpack_require__.e("default~pages-draw-draw-module~pages-lobby-lobby-module"), __webpack_require__.e("pages-draw-draw-module")]).then(__webpack_require__.bind(null, /*! ./pages/draw/draw.module */ "1CbX")).then((m) => m.DrawModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map