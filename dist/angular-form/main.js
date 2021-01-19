(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\framework-portfolio\angular-form\src\main.ts */"zUnb");


/***/ }),

/***/ "1zic":
/*!**********************************************************************!*\
  !*** ./src/app/visibility-checkbox/visibility-checkbox.component.ts ***!
  \**********************************************************************/
/*! exports provided: VisibilityCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityCheckboxComponent", function() { return VisibilityCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1) { return { "fa-eye": a0, "fa-eye-slash": a1 }; };
class VisibilityCheckboxComponent {
    constructor() {
        this._currentState = false;
    }
    writeValue(checked) {
        this._currentState = checked;
    }
    get currentState() {
        return this._currentState;
    }
    set currentState(checked) {
        this._currentState = checked;
        this.propagateChange(checked);
        this.propagateTouch(checked);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    toggleVisibility() {
        this.currentState = !this.currentState;
    }
}
VisibilityCheckboxComponent.ɵfac = function VisibilityCheckboxComponent_Factory(t) { return new (t || VisibilityCheckboxComponent)(); };
VisibilityCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisibilityCheckboxComponent, selectors: [["app-visibility-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => VisibilityCheckboxComponent),
                multi: true
            }])], decls: 1, vars: 4, consts: [[1, "far", 3, "ngClass", "click"]], template: function VisibilityCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisibilityCheckboxComponent_Template_i_click_0_listener() { return ctx.toggleVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, !ctx.currentState, ctx.currentState));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\r\n  transform: scale(1.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2liaWxpdHktY2hlY2tib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ2aXNpYmlsaXR5LWNoZWNrYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisibilityCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visibility-checkbox',
                templateUrl: './visibility-checkbox.component.html',
                styleUrls: ['./visibility-checkbox.component.css'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => VisibilityCheckboxComponent),
                        multi: true
                    }]
            }]
    }], function () { return []; }, null); })();


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

/***/ "Npox":
/*!***********************************************!*\
  !*** ./src/app/services/validator.service.ts ***!
  \***********************************************/
/*! exports provided: ValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorService", function() { return ValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ValidatorService {
    constructor() { }
    emailValidator(control) {
        const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);
        if (isValid)
            return null;
        return { 'incorrect': true };
    }
    passwordValidator(control) {
        const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(control.value);
        if (isValid)
            return null;
        return { 'incorrect': true };
    }
}
ValidatorService.ɵfac = function ValidatorService_Factory(t) { return new (t || ValidatorService)(); };
ValidatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidatorService, factory: ValidatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/validator.service */ "Npox");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _visibility_checkbox_visibility_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visibility-checkbox/visibility-checkbox.component */ "1zic");








const _c0 = function (a0) { return { highlighted: a0 }; };
class AppComponent {
    constructor(validatorService) {
        this.validatorService = validatorService;
        this.isEmailInputTouched = false;
        this.isEmailInputValid = false;
        this.isEmailIncorrect = false;
        this.emailLabel = 'Email Address';
        this.isPasswordInputTouched = false;
        this.isPasswordInputValid = false;
        this.isPasswordIncorrect = false;
        this.passwordLabel = 'Password';
        this.passwordType = 'password';
        this.isRemebered = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ngOnInit() {
        this.loginInfoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validatorService.emailValidator]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validatorService.passwordValidator]),
            visibilityCheckbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.subscription.add(this.loginInfoControl.controls.email.statusChanges.subscribe(status => {
            if (status === 'VALID') {
                this.isEmailInputValid = true;
                this.isEmailIncorrect = false;
                this.emailLabel = "Email Address";
            }
            else {
                this.isEmailInputValid = false;
                this.isEmailIncorrect = true;
                this.emailLabel = "Plese, input corect part followed before and after '@'";
            }
        }));
        this.subscription.add(this.loginInfoControl.controls.password.statusChanges.subscribe(status => {
            if (status === 'VALID') {
                this.isPasswordInputValid = true;
                this.isPasswordIncorrect = false;
                this.passwordLabel = "Password";
            }
            else {
                this.isPasswordInputValid = false;
                this.isPasswordIncorrect = true;
                this.passwordLabel = "Plese, include minimum eight characters, at least one letter and one number";
            }
        }));
        this.subscription.add(this.loginInfoControl.controls.visibilityCheckbox.valueChanges.subscribe(status => {
            status ? this.passwordType = 'text' : this.passwordType = 'password';
        }));
    }
    onEmailBlur() {
        this.isEmailInputTouched = true;
        this.isEmailIncorrect = (this.isEmailInputTouched && !this.isEmailInputValid);
        if (this.isEmailIncorrect) {
            this.emailLabel = "Plese, input corect part followed before and after '@'";
        }
        else {
            this.emailLabel = "Email Address";
        }
    }
    onPasswordBlur() {
        this.isPasswordInputTouched = true;
        this.isPasswordIncorrect = (this.isPasswordInputTouched && !this.isPasswordInputValid);
        if (this.isPasswordIncorrect) {
            this.passwordLabel = "Plese, include minimum eight characters, at least one letter and one number";
        }
        else {
            this.passwordLabel = "Password";
        }
    }
    ngAfterContentInit() {
        if (localStorage.getItem('log')) {
            const userInfo = JSON.parse(atob(localStorage.getItem('log')));
            this.loginInfoControl.controls.email.setValue(userInfo.email);
            this.loginInfoControl.controls.password.setValue(userInfo.password);
            this.isRemebered = true;
        }
    }
    onSubmit(remembranceTarget) {
        console.log(this.loginInfoControl.controls.visibilityCheckbox);
        if (this.loginInfoControl.controls.password.valid && this.loginInfoControl.controls.email.valid) {
            const userInfo = {
                email: this.loginInfoControl.controls.email.value,
                password: this.loginInfoControl.controls.password.value
            };
            if (remembranceTarget.checked) {
                localStorage.setItem('log', btoa(JSON.stringify(userInfo)));
            }
            else
                localStorage.setItem('log', '');
            alert(`email: ${userInfo.email}\npassword: ${userInfo.password}`);
            document.location.reload();
        }
        else {
            alert('Please, enter all fields correctly');
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validator_service__WEBPACK_IMPORTED_MODULE_3__["ValidatorService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 11, consts: [[1, "main-container__form", 3, "formGroup"], ["for", "email", 1, "form__label", 3, "ngClass"], ["type", "email", "placeholder", "example@address.com", "name", "email", "formControlName", "email", "autocomplete", "on", 1, "form__input", 3, "blur"], ["emailInput", ""], ["for", "password", 1, "form__label", 3, "ngClass"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "name", "password", "formControlName", "password", "autocomplete", "on", 1, "form__input", 3, "type", "blur"], ["passwordInput", ""], [1, "form__checkbox-container"], ["type", "checkbox", "checked", "", "name", "remembrance", 1, "checkbox-container__checkbox-remembrance", 3, "checked"], ["remembranceInput", ""], ["for", "remembrance", 1, "checkbox-container__remembrance-label"], ["formControlName", "visibilityCheckbox", 1, "checkbox-container__visibility-icon"], [1, "form__button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AppComponent_Template_input_blur_3_listener() { return ctx.onEmailBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AppComponent_Template_input_blur_7_listener() { return ctx.onPasswordBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remeber me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-visibility-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.onSubmit(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginInfoControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isEmailIncorrect));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emailLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isPasswordIncorrect));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isRemebered);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _visibility_checkbox_visibility_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["VisibilityCheckboxComponent"]], styles: [".main-container__form[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  height: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  background: linear-gradient(to right, rgba(62, 137, 177, .75), rgba(62, 193, 123, .65));\r\n  padding: 25px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 2px rgba(44, 89, 114, .8);\r\n}\r\n\r\n.form__label[_ngcontent-%COMP%] {\r\n  font-size: .7rem;\r\n  line-height: .7rem;\r\n}\r\n\r\n.form__input[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 3px;\r\n  padding: 5px 15px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.form__button[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to left, rgba(9, 85, 126, .75), rgba(62, 193, 123, .65));\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 3px;\r\n  color: #FFF;\r\n  font-size: 1.3rem;\r\n  letter-spacing: 1px;\r\n  cursor: pointer;\r\n  box-shadow: 0 5px 0 0 rgba(0, 0, 0, .35);\r\n  transition: all .1s;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.form__button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 4px 0 0 rgba(0, 0, 0, .35);\r\n}\r\n\r\n.form__button[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 2px 0 0 rgba(0, 0, 0, .35);\r\n}\r\n\r\n.form__checkbox-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.checkbox-container__checkbox-remembrance[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  transform: scale(1.22);\r\n}\r\n\r\n.checkbox-container__remembrance-label[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n\r\n.checkbox-container__visibility-icon[_ngcontent-%COMP%] {\r\n  opacity: .9;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n  color: rgba(192, 0, 0, .774);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3Qix1RkFBdUY7RUFDdkYsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvRkFBb0Y7RUFDcEYsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJfX2Zvcm0ge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNjIsIDEzNywgMTc3LCAuNzUpLCByZ2JhKDYyLCAxOTMsIDEyMywgLjY1KSk7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDQ0LCA4OSwgMTE0LCAuOCk7XHJcbn1cclxuXHJcbi5mb3JtX19sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAuN3JlbTtcclxuICBsaW5lLWhlaWdodDogLjdyZW07XHJcbn1cclxuXHJcbi5mb3JtX19pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmZvcm1fX2J1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoOSwgODUsIDEyNiwgLjc1KSwgcmdiYSg2MiwgMTkzLCAxMjMsIC42NSkpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDVweCAwIDAgcmdiYSgwLCAwLCAwLCAuMzUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMXM7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9ybV9fYnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDRweCAwIDAgcmdiYSgwLCAwLCAwLCAuMzUpO1xyXG59XHJcblxyXG4uZm9ybV9fYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoMCwgMCwgMCwgLjM1KTtcclxufVxyXG5cclxuLmZvcm1fX2NoZWNrYm94LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lcl9fY2hlY2tib3gtcmVtZW1icmFuY2Uge1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjIpO1xyXG59XHJcblxyXG4uY2hlY2tib3gtY29udGFpbmVyX19yZW1lbWJyYW5jZS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lcl9fdmlzaWJpbGl0eS1pY29uIHtcclxuICBvcGFjaXR5OiAuOTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgY29sb3I6IHJnYmEoMTkyLCAwLCAwLCAuNzc0KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_validator_service__WEBPACK_IMPORTED_MODULE_3__["ValidatorService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/validator.service */ "Npox");
/* harmony import */ var _visibility_checkbox_visibility_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visibility-checkbox/visibility-checkbox.component */ "1zic");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_validator_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _visibility_checkbox_visibility_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["VisibilityCheckboxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _visibility_checkbox_visibility_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["VisibilityCheckboxComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                providers: [_services_validator_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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