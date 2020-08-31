(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _crestron_dig_press_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crestron/dig-press.directive */ "./src/app/crestron/dig-press.directive.ts");
/* harmony import */ var _crestron_dig_fb_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crestron/dig-fb.directive */ "./src/app/crestron/dig-fb.directive.ts");
/* harmony import */ var _crestron_dig_enable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crestron/dig-enable.directive */ "./src/app/crestron/dig-enable.directive.ts");
/* harmony import */ var _crestron_dig_visible_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crestron/dig-visible.directive */ "./src/app/crestron/dig-visible.directive.ts");
/* harmony import */ var _crestron_ana_send_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crestron/ana-send.directive */ "./src/app/crestron/ana-send.directive.ts");
/* harmony import */ var _crestron_ana_fb_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crestron/ana-fb.directive */ "./src/app/crestron/ana-fb.directive.ts");
/* harmony import */ var _crestron_ser_send_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crestron/ser-send.directive */ "./src/app/crestron/ser-send.directive.ts");
/* harmony import */ var _crestron_ser_fb_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crestron/ser-fb.directive */ "./src/app/crestron/ser-fb.directive.ts");
/* harmony import */ var _crestron_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crestron/modal/modal.component */ "./src/app/crestron/modal/modal.component.ts");











var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'crcom-basic';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 40, vars: 16, consts: [[3, "DigPress", "DigFB"], [3, "DigPress", "DigFB", "DigEnable"], [3, "DigPress", "DigFB", "DigVisible"], ["type", "range", "min", "0", "max", "100", "step", "5", 3, "AnaSend"], ["type", "range", "min", "0", "max", "100", 2, "pointer-events", "none", 3, "AnaFB"], ["type", "text", 3, "SerSend"], [3, "SerFB"], [3, "VisJoin"], [2, "width", "300px", "height", "75px", "margin", "auto", "background", "gray"], [2, "float", "right", 3, "DigPress"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A button that sends data to digital join 10 and changes CSS class to \"active\" when digital FB join 10 is high:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "enable ->");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A button that sends/receives join 11 and is enabled when digital FB join 10 is high:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "show ->");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A button that sends/receives join 12 and is visible when digital FB join 11 is high:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "join 12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "An input slider that sends data to analog join 11:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "A read-only slider (gauge) on analog feedback join 11:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "A text input box that sends data to serial join 11:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "A span element that displays serial fb join 11:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This button opens a modal/popup on FB join 13:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "modal!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-modal", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Button press sends join 13 to close this modal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("DigPress", 10)("DigFB", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("DigPress", 11)("DigFB", 11)("DigEnable", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("DigPress", 12)("DigFB", 12)("DigVisible", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("AnaSend", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("AnaFB", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("SerSend", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("SerFB", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("DigPress", 13)("DigFB", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("VisJoin", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("DigPress", 13);
        } }, directives: [_crestron_dig_press_directive__WEBPACK_IMPORTED_MODULE_1__["DigPressDirective"], _crestron_dig_fb_directive__WEBPACK_IMPORTED_MODULE_2__["DigFbDirective"], _crestron_dig_enable_directive__WEBPACK_IMPORTED_MODULE_3__["DigEnableDirective"], _crestron_dig_visible_directive__WEBPACK_IMPORTED_MODULE_4__["DigVisibleDirective"], _crestron_ana_send_directive__WEBPACK_IMPORTED_MODULE_5__["AnaSendDirective"], _crestron_ana_fb_directive__WEBPACK_IMPORTED_MODULE_6__["AnaFbDirective"], _crestron_ser_send_directive__WEBPACK_IMPORTED_MODULE_7__["SerSendDirective"], _crestron_ser_fb_directive__WEBPACK_IMPORTED_MODULE_8__["SerFbDirective"], _crestron_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"]], styles: [".active[_ngcontent-%COMP%] {\n  background: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqcHZvZ1xcRG93bmxvYWRzXFxjcmNvbS1iYXNpYy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogeWVsbG93O1xyXG59XHJcbiIsIi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG59Il19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _crestron_dig_press_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crestron/dig-press.directive */ "./src/app/crestron/dig-press.directive.ts");
/* harmony import */ var _crestron_dig_enable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crestron/dig-enable.directive */ "./src/app/crestron/dig-enable.directive.ts");
/* harmony import */ var _crestron_dig_visible_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crestron/dig-visible.directive */ "./src/app/crestron/dig-visible.directive.ts");
/* harmony import */ var _crestron_dig_fb_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crestron/dig-fb.directive */ "./src/app/crestron/dig-fb.directive.ts");
/* harmony import */ var _crestron_ana_send_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crestron/ana-send.directive */ "./src/app/crestron/ana-send.directive.ts");
/* harmony import */ var _crestron_ana_fb_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crestron/ana-fb.directive */ "./src/app/crestron/ana-fb.directive.ts");
/* harmony import */ var _crestron_ser_send_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crestron/ser-send.directive */ "./src/app/crestron/ser-send.directive.ts");
/* harmony import */ var _crestron_ser_fb_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crestron/ser-fb.directive */ "./src/app/crestron/ser-fb.directive.ts");
/* harmony import */ var _crestron_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crestron/modal/modal.component */ "./src/app/crestron/modal/modal.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _crestron_dig_press_directive__WEBPACK_IMPORTED_MODULE_3__["DigPressDirective"],
        _crestron_dig_enable_directive__WEBPACK_IMPORTED_MODULE_4__["DigEnableDirective"],
        _crestron_dig_visible_directive__WEBPACK_IMPORTED_MODULE_5__["DigVisibleDirective"],
        _crestron_dig_fb_directive__WEBPACK_IMPORTED_MODULE_6__["DigFbDirective"],
        _crestron_ana_send_directive__WEBPACK_IMPORTED_MODULE_7__["AnaSendDirective"],
        _crestron_ana_fb_directive__WEBPACK_IMPORTED_MODULE_8__["AnaFbDirective"],
        _crestron_ser_send_directive__WEBPACK_IMPORTED_MODULE_9__["SerSendDirective"],
        _crestron_ser_fb_directive__WEBPACK_IMPORTED_MODULE_10__["SerFbDirective"],
        _crestron_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _crestron_dig_press_directive__WEBPACK_IMPORTED_MODULE_3__["DigPressDirective"],
                    _crestron_dig_enable_directive__WEBPACK_IMPORTED_MODULE_4__["DigEnableDirective"],
                    _crestron_dig_visible_directive__WEBPACK_IMPORTED_MODULE_5__["DigVisibleDirective"],
                    _crestron_dig_fb_directive__WEBPACK_IMPORTED_MODULE_6__["DigFbDirective"],
                    _crestron_ana_send_directive__WEBPACK_IMPORTED_MODULE_7__["AnaSendDirective"],
                    _crestron_ana_fb_directive__WEBPACK_IMPORTED_MODULE_8__["AnaFbDirective"],
                    _crestron_ser_send_directive__WEBPACK_IMPORTED_MODULE_9__["SerSendDirective"],
                    _crestron_ser_fb_directive__WEBPACK_IMPORTED_MODULE_10__["SerFbDirective"],
                    _crestron_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/crestron/ana-fb.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/crestron/ana-fb.directive.ts ***!
  \**********************************************/
/*! exports provided: AnaFbDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaFbDirective", function() { return AnaFbDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AnaFbDirective = /** @class */ (function () {
    function AnaFbDirective(el) {
        this.el = el;
    }
    AnaFbDirective.prototype.ngOnInit = function () {
        var _this = this;
        CrComLib.subscribeState('n', String(this.join), function (v) { _this.el.nativeElement.value = v; });
        this.el.nativeElement.value = CrComLib.getState('n', String(this.join));
    };
    AnaFbDirective.prototype.ngOnDestroy = function () {
        // CrComLib.unSubscribeState('n', String(this.join));
    };
    AnaFbDirective.ɵfac = function AnaFbDirective_Factory(t) { return new (t || AnaFbDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    AnaFbDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AnaFbDirective, selectors: [["", "AnaFB", ""]], inputs: { join: ["AnaFB", "join"] } });
    return AnaFbDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnaFbDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[AnaFB]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { join: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['AnaFB']
        }] }); })();


/***/ }),

/***/ "./src/app/crestron/ana-send.directive.ts":
/*!************************************************!*\
  !*** ./src/app/crestron/ana-send.directive.ts ***!
  \************************************************/
/*! exports provided: AnaSendDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaSendDirective", function() { return AnaSendDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AnaSendDirective = /** @class */ (function () {
    function AnaSendDirective(el) {
        this.el = el;
    }
    AnaSendDirective.prototype.onInput = function () {
        CrComLib.publishEvent('n', String(this.join), Number(this.el.nativeElement.value));
    };
    AnaSendDirective.ɵfac = function AnaSendDirective_Factory(t) { return new (t || AnaSendDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    AnaSendDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AnaSendDirective, selectors: [["", "AnaSend", ""]], hostBindings: function AnaSendDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AnaSendDirective_input_HostBindingHandler() { return ctx.onInput(); });
        } }, inputs: { join: ["AnaSend", "join"] } });
    return AnaSendDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnaSendDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[AnaSend]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { join: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['AnaSend']
        }], onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "./src/app/crestron/dig-enable.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/crestron/dig-enable.directive.ts ***!
  \**************************************************/
/*! exports provided: DigEnableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigEnableDirective", function() { return DigEnableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DigEnableDirective = /** @class */ (function () {
    function DigEnableDirective(el) {
        this.el = el;
    }
    DigEnableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.setEnabled(CrComLib.getState('b', String(this.join)));
        CrComLib.subscribeState('b', String(this.join), function (v) { _this.setEnabled(v); });
    };
    DigEnableDirective.prototype.ngOnDestroy = function () {
    };
    DigEnableDirective.prototype.setEnabled = function (enJoin) {
        if (enJoin) {
            this.el.nativeElement.disabled = false;
        }
        else {
            this.el.nativeElement.disabled = true;
        }
    };
    DigEnableDirective.ɵfac = function DigEnableDirective_Factory(t) { return new (t || DigEnableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    DigEnableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DigEnableDirective, selectors: [["", "DigEnable", ""]], inputs: { join: ["DigEnable", "join"] } });
    return DigEnableDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigEnableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[DigEnable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { join: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['DigEnable']
        }] }); })();


/***/ }),

/***/ "./src/app/crestron/dig-fb.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/crestron/dig-fb.directive.ts ***!
  \**********************************************/
/*! exports provided: DigFbDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigFbDirective", function() { return DigFbDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DigFbDirective = /** @class */ (function () {
    function DigFbDirective(el) {
        this.el = el;
    }
    DigFbDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.setFB(CrComLib.getState('b', String(this.join)));
        CrComLib.subscribeState('b', String(this.join), function (v) { _this.setFB(v); });
    };
    DigFbDirective.prototype.ngOnDestroy = function () {
    };
    DigFbDirective.prototype.setFB = function (fbJoin) {
        if (fbJoin) {
            if (!this.el.nativeElement.classList.contains('active')) {
                this.el.nativeElement.classList.add('active');
            }
        }
        else {
            if (this.el.nativeElement.classList.contains('active')) {
                this.el.nativeElement.classList.remove('active');
            }
        }
    };
    DigFbDirective.ɵfac = function DigFbDirective_Factory(t) { return new (t || DigFbDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    DigFbDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DigFbDirective, selectors: [["", "DigFB", ""]], inputs: { join: ["DigFB", "join"] } });
    return DigFbDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigFbDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[DigFB]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { join: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['DigFB']
        }] }); })();


/***/ }),

/***/ "./src/app/crestron/dig-press.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/crestron/dig-press.directive.ts ***!
  \*************************************************/
/*! exports provided: DigPressDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigPressDirective", function() { return DigPressDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DigPressDirective = /** @class */ (function () {
    function DigPressDirective(el) {
        this.el = el;
    }
    DigPressDirective.prototype.onTouchStart = function () {
        var _this = this;
        if (this.el.nativeElement.disabled !== true) {
            // this.crcom.press(this.join);
            CrComLib.publishEvent('b', String(this.join), true);
            this.disable = true;
            this.timerID = setTimeout(function () { return _this.disable = false; }, 10);
        }
    };
    DigPressDirective.prototype.onTouchEnd = function (e) {
        var _this = this;
        if (this.el.nativeElement.disabled !== true) {
            e.preventDefault();
            // this.crcom.release(this.join);
            CrComLib.publishEvent('b', String(this.join), false);
            this.disable = true;
            this.timerID = setTimeout(function () { return _this.disable = false; }, 10);
        }
    };
    DigPressDirective.prototype.onTouchCancel = function () {
        var _this = this;
        if (this.el.nativeElement.disabled !== true) {
            // this.crcom.release(this.join);
            CrComLib.publishEvent('b', String(this.join), false);
            this.disable = true;
            this.timerID = setTimeout(function () { return _this.disable = false; }, 10);
        }
    };
    DigPressDirective.prototype.onMouseDown = function () {
        if (!this.disable) {
            // this.crcom.press(this.join);
            CrComLib.publishEvent('b', String(this.join), true);
        }
    };
    DigPressDirective.prototype.onMouseUp = function () {
        if (!this.disable) {
            // this.crcom.release(this.join);
            CrComLib.publishEvent('b', String(this.join), false);
        }
    };
    DigPressDirective.prototype.onMouseLeave = function () {
        if (!this.disable) {
            // this.crcom.release(this.join);
            CrComLib.publishEvent('b', String(this.join), false);
        }
    };
    DigPressDirective.ɵfac = function DigPressDirective_Factory(t) { return new (t || DigPressDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    DigPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DigPressDirective, selectors: [["", "DigPress", ""]], hostBindings: function DigPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function DigPressDirective_touchstart_HostBindingHandler() { return ctx.onTouchStart(); })("touchend", function DigPressDirective_touchend_HostBindingHandler($event) { return ctx.onTouchEnd($event); })("touchcancel", function DigPressDirective_touchcancel_HostBindingHandler() { return ctx.onTouchCancel(); })("mousedown", function DigPressDirective_mousedown_HostBindingHandler() { return ctx.onMouseDown(); })("mouseup", function DigPressDirective_mouseup_HostBindingHandler() { return ctx.onMouseUp(); })("mouseleave", function DigPressDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } }, inputs: { join: ["DigPress", "join"] } });
    return DigPressDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigPressDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[DigPress]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { join: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['DigPress']
        }], onTouchStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart']
        }], onTouchEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchend', ['$event']]
        }], onTouchCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchcancel']
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown']
        }], onMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "./src/app/crestron/dig-visible.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/crestron/dig-visible.directive.ts ***!
  \***************************************************/
/*! exports provided: DigVisibleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigVisibleDirective", function() { return DigVisibleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DigVisibleDirective = /** @class */ (function () {
    function DigVisibleDirective(el) {
        this.el = el;
    }
    DigVisibleDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.setVisibility(CrComLib.getState('b', String(this.join)));
        CrComLib.subscribeState('b', String(this.join), function (v) { _this.setVisibility(v); });
    };
    DigVisibleDirective.prototype.ngOnDestroy = function () {
    };
    DigVisibleDirective.prototype.setVisibility = function (visJoin) {
        if (visJoin) {
            this.el.nativeElement.style.visibility = 'visible';
        }
        else {
            this.el.nativeElement.style.visibility = 'hidden';
        }
    };
    DigVisibleDirective.ɵfac = function DigVisibleDirective_Factory(t) { return new (t || DigVisibleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    DigVisibleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DigVisibleDirective, selectors: [["", "DigVisible", ""]], inputs: { join: ["DigVisible", "join"] } });
    return DigVisibleDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigVisibleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[DigVisible]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { join: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['DigVisible']
        }] }); })();


/***/ }),

/***/ "./src/app/crestron/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/crestron/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var _c0 = ["*"];
var ModalComponent = /** @class */ (function () {
    function ModalComponent(el) {
        this.el = el;
    }
    ModalComponent.prototype.ngOnInit = function () {
        // this.showHide();
        // this.crcom.update.subscribe(() => this.showHide());
        var _this = this;
        this.showHide(CrComLib.getState('b', String(this.VisJoin)));
        CrComLib.subscribeState('b', String(this.VisJoin), function (v) { _this.showHide(v); });
    };
    ModalComponent.prototype.ngOnDestroy = function () {
    };
    ModalComponent.prototype.showHide = function (visState) {
        if (visState) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    };
    ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { VisJoin: "VisJoin" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [["id", "myModal", 1, "modal"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.visible ? "flex" : "none");
        } }, styles: [".modal[_ngcontent-%COMP%] {\n  display: none;\n  \n  position: fixed;\n  \n  z-index: 1;\n  \n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jlc3Ryb24vbW9kYWwvQzpcXFVzZXJzXFxqcHZvZ1xcRG93bmxvYWRzXFxjcmNvbS1iYXNpYy9zcmNcXGFwcFxcY3Jlc3Ryb25cXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3Jlc3Ryb24vbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW1DLHFCQUFBO0FDUXJDIiwiZmlsZSI6InNyYy9hcHAvY3Jlc3Ryb24vbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuIiwiLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn0iXX0= */"] });
    return ModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { VisJoin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/crestron/ser-fb.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/crestron/ser-fb.directive.ts ***!
  \**********************************************/
/*! exports provided: SerFbDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerFbDirective", function() { return SerFbDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SerFbDirective = /** @class */ (function () {
    function SerFbDirective(el) {
        this.el = el;
    }
    SerFbDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.el.nativeElement.innerHTML = CrComLib.getState('s', String(this.join));
        CrComLib.subscribeState('s', String(this.join), function (v) { _this.el.nativeElement.innerHTML = v; });
    };
    SerFbDirective.prototype.ngOnDestroy = function () {
    };
    SerFbDirective.ɵfac = function SerFbDirective_Factory(t) { return new (t || SerFbDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    SerFbDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SerFbDirective, selectors: [["", "SerFB", ""]], inputs: { join: ["SerFB", "join"] } });
    return SerFbDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SerFbDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[SerFB]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { join: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['SerFB']
        }] }); })();


/***/ }),

/***/ "./src/app/crestron/ser-send.directive.ts":
/*!************************************************!*\
  !*** ./src/app/crestron/ser-send.directive.ts ***!
  \************************************************/
/*! exports provided: SerSendDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerSendDirective", function() { return SerSendDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SerSendDirective = /** @class */ (function () {
    function SerSendDirective(el) {
        this.el = el;
    }
    SerSendDirective.prototype.onInput = function () {
        CrComLib.publishEvent('s', String(this.join), this.el.nativeElement.value);
    };
    SerSendDirective.ɵfac = function SerSendDirective_Factory(t) { return new (t || SerSendDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    SerSendDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SerSendDirective, selectors: [["", "SerSend", ""]], hostBindings: function SerSendDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SerSendDirective_input_HostBindingHandler() { return ctx.onInput(); });
        } }, inputs: { join: ["SerSend", "join"] } });
    return SerSendDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SerSendDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[SerSend]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { join: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['SerSend']
        }], onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jpvog\Downloads\crcom-basic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map