(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/security/permissions.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/security/permissions.guard.ts ***!
  \***********************************************/
/*! exports provided: PermissionsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsGuard", function() { return PermissionsGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/__ivy_ngcc__/fesm2015/ngx-permissions.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _util_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/functions */ "./src/app/util/functions.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.service */ "./src/app/security/login/login.service.ts");











var PermissionsGuard = /** @class */ (function () {
    function PermissionsGuard(_ngxPermissionsGuard, _loginService, _toastr, _router) {
        this._ngxPermissionsGuard = _ngxPermissionsGuard;
        this._loginService = _loginService;
        this._toastr = _toastr;
        this._router = _router;
        this.routeURL = '/private';
    }
    PermissionsGuard.prototype.canActivate = function (next, state) {
        return this._checkPermission(this._ngxPermissionsGuard.canActivate(next, state));
    };
    PermissionsGuard.prototype.canActivateChild = function (next, state) {
        return this._checkPermission(this._ngxPermissionsGuard.canActivateChild(next, state));
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    PermissionsGuard.prototype.canLoad = function (route, segments) {
        return this._checkPermission(this._ngxPermissionsGuard.canLoad(route));
    };
    PermissionsGuard.prototype._checkPermission = function (loaded) {
        var _this = this;
        if (!this._loginService.isLoggedIn()) {
            return false;
        }
        if (Object(_util_functions__WEBPACK_IMPORTED_MODULE_4__["isBoolean"])(loaded)) {
            if (!loaded) {
                this._showDenyMessage();
                return false;
            }
            return true;
        }
        return loaded
            .then(function (load) {
            if (!load) {
                _this._showDenyMessage();
                return false;
            }
            return true;
        })
            .catch(function () {
            _this._showDenyMessage();
            return false;
        });
    };
    PermissionsGuard.prototype._showDenyMessage = function () {
        this._toastr.warning('Você não tem permissão para acessar esta página.', 'Acesso Negado!');
        this._router.navigate([this.routeURL]);
    };
    PermissionsGuard.ɵfac = function PermissionsGuard_Factory(t) { return new (t || PermissionsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    PermissionsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PermissionsGuard, factory: PermissionsGuard.ɵfac, providedIn: 'root' });
    return PermissionsGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"] }, { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map