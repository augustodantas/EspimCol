(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/private/users/add/add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/private/users/add/add.component.ts ***!
  \****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_app_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.api */ "./src/app/app.api.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_util_util_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/util/util.form.service */ "./src/app/util/util.form.service.ts");
/* harmony import */ var _dao_dao_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dao/dao.service */ "./src/app/private/dao/dao.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_focus_invalid_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../directives/focus-invalid-input */ "./src/app/directives/focus-invalid-input.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_input_validations_input_validations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/input-validations/input-validations.component */ "./src/app/components/input-validations/input-validations.component.ts");





















var _c0 = ["formElement"];
function AddComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "private.users.add.title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddComponent_h1_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "private.users.add.titleEdit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddComponent_input_validations_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input-validations", 22);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errors", ctx_r3.form.controls["name"].errors);
} }
function AddComponent_input_validations_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input-validations", 22);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errors", ctx_r4.form.controls["email"].errors);
} }
function AddComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var role_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", role_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](role_r6.name);
} }
var AddComponent = /** @class */ (function () {
    function AddComponent(_daoService, _toastr, _formBuilder, _loaderService, route, activeRoute) {
        this._daoService = _daoService;
        this._toastr = _toastr;
        this._formBuilder = _formBuilder;
        this._loaderService = _loaderService;
        this.route = route;
        this.activeRoute = activeRoute;
        this.url = src_app_app_api__WEBPACK_IMPORTED_MODULE_7__["ESPIM_REST_Users"];
        this.urlRoles = src_app_app_api__WEBPACK_IMPORTED_MODULE_7__["ESPIM_REST_Roles"];
        this.roles = [];
        this.editing = false;
        this.loading = true;
        this.id = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        this.id = this.activeRoute.snapshot.params.id;
        this.form = this._formBuilder.group({
            name: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            roles: this._formBuilder.control([], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.fetchData(this.id);
        this.getUsers();
    };
    AddComponent.prototype.fetchData = function (id) {
        var _this = this;
        this._loaderService.show();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('include', 'roles');
        this._daoService
            .getObject(this.url, id, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this._loaderService.hide(); }))
            .subscribe(function (response) {
            response.data.roles = response.data.roles.map(function (role) { return role.id; });
            _this.form.patchValue(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, response.data));
        });
    };
    AddComponent.prototype.save = function (event) {
        var _this = this;
        this.form.markAllAsTouched();
        var valid = true;
        if (this.form.valid && valid) {
            this._loaderService.show();
            this.sendRequest()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this._loaderService.hide(); }))
                .subscribe(function (response) {
                if (response.error) {
                    src_app_util_util_form_service__WEBPACK_IMPORTED_MODULE_9__["FormUtil"].setErrorsBackend(_this.form, response);
                }
                else {
                    _this._toastr.success(response.message);
                    _this.route.navigate(['/private/users/list']);
                }
            }, function (resp) { return src_app_util_util_form_service__WEBPACK_IMPORTED_MODULE_9__["FormUtil"].setErrorsBackend(_this.form, resp.data); });
        }
    };
    AddComponent.prototype.sendRequest = function () {
        var dados = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.form.value);
        return this._daoService.putObject(this.url + this.id, dados);
    };
    AddComponent.prototype.getUsers = function () {
        var _this = this;
        this._daoService.getObjects(this.urlRoles).subscribe(function (response) {
            _this.roles = response.data;
        });
    };
    AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dao_dao_service__WEBPACK_IMPORTED_MODULE_10__["DAOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["esm-roles-add"]], viewQuery: function AddComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.formElement = _t.first);
        } }, decls: 37, vars: 12, consts: [[1, "mx-auto", "mt-4", "card", "card-lg", "w-main", "container-fluid"], [1, "row"], [1, "p-0", "mx-auto", "bg-white", "rounded", "col-12", "p-xl-2"], [1, "container-fluid"], [1, "col-12"], ["class", "h4", "translate", "", 4, "ngIf"], ["focusInvalidInput", "", 3, "formGroup", "ngSubmit"], ["formElement", ""], [1, "col-6", "form-group"], [1, "form-label-group"], ["id", "name", "name", "name", "type", "text", "formControlName", "name", 1, "form-control", "border-bottom", 3, "placeholder"], ["for", "text", "translate", ""], ["label", "Nome", 3, "errors", 4, "ngIf"], ["id", "email", "name", "email", "type", "text", "formControlName", "email", 1, "form-control", "border-bottom", 3, "placeholder"], ["for", "text", "translate", "", 1, "m-0"], ["formControlName", "roles", "multiple", "true", "required", "", 1, "w-100"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-end", "mt-4"], [1, "col-auto"], ["routerLink", "/private/users/list", 1, "btn", "btn-success", "btn-lg", "btn-shadow"], ["type", "submit", "name", "saveButton", "translate", "", 1, "btn", "btn-primary", "btn-lg", "btn-shadow", "min-100"], ["translate", "", 1, "h4"], ["label", "Nome", 3, "errors"], [3, "value"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddComponent_h1_6_Template, 2, 0, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddComponent_h1_7_Template, 2, 0, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddComponent_Template_form_ngSubmit_8_listener($event) { return ctx.save($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "private.users.add.name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AddComponent_input_validations_17_Template, 1, 1, "input-validations", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "private.users.add.email");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddComponent_input_validations_25_Template, 1, 1, "input-validations", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "private.users.add.roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AddComponent_option_29_Template, 2, 2, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "VOLTAR");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "SALVAR");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 8, "private.users.add.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.controls["name"].invalid && ctx.form.controls["name"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 10, "private.users.add.email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.controls["email"].invalid && ctx.form.controls["email"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.roles);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _directives_focus_invalid_input__WEBPACK_IMPORTED_MODULE_12__["FocusInvalidInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _components_input_validations_input_validations_component__WEBPACK_IMPORTED_MODULE_14__["InputValidationsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], encapsulation: 2 });
    return AddComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'esm-roles-add',
                templateUrl: './add.component.html',
            }]
    }], function () { return [{ type: _dao_dao_service__WEBPACK_IMPORTED_MODULE_10__["DAOService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { formElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['formElement']
        }] }); })();


/***/ }),

/***/ "./src/app/private/users/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/users/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.api */ "./src/app/app.api.ts");
/* harmony import */ var _dao_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dao/dao.service */ "./src/app/private/dao/dao.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../search/search.component */ "./src/app/private/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/list-header/list-header.component */ "./src/app/private/components/list-header/list-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/__ivy_ngcc__/fesm2015/ngx-permissions.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm5/ngx-bootstrap-pagination.js");

















function ListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nenhum usu\u00E1rio encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c0 = function (a1) { return ["/private/users/edit", a1]; };
function ListComponent_tr_12_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, user_r5.id));
} }
var _c1 = function () { return ["USERS_EDIT"]; };
function ListComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ListComponent_tr_12_td_6_Template, 4, 3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, user_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", user_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", user_r5.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
} }
function ListComponent_ng_template_13_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c2 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; };
function ListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ListComponent_ng_template_13_tr_0_Template, 5, 0, "tr", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
} }
function ListComponent_pagination_15_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListComponent_pagination_15_Template_pagination_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.page = $event; })("pageChanged", function ListComponent_pagination_15_Template_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.handleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("totalItems", ctx_r3.total)("ngModel", ctx_r3.page)("disabled", !ctx_r3.total)("maxSize", 15)("boundaryLinks", true);
} }
function ListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var ListComponent = /** @class */ (function () {
    function ListComponent(daoService) {
        var _this = this;
        this.daoService = daoService;
        this.url = src_app_app_api__WEBPACK_IMPORTED_MODULE_5__["ESPIM_REST_Users"];
        this.loading = true;
        this.page = 1;
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchTerm = '';
        this.search
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.getUsers();
        }))
            .subscribe(function (response) {
            _this.loading = false;
            _this.setUsers(response);
        });
    }
    ListComponent.prototype.handleChange = function ($event, search) {
        if (search === void 0) { search = false; }
        if (search) {
            this.total = null;
            this.searchTerm = $event;
            this.page = 1;
        }
        this.users = [];
        this.loading = true;
        this.search.next($event);
    };
    ListComponent.prototype.ngOnInit = function () {
        this.search.next('');
    };
    ListComponent.prototype.getUsers = function () {
        var _a;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('search', this.searchTerm)
            .set('page', (_a = this.page) === null || _a === void 0 ? void 0 : _a.toString())
            .set('orderBy', 'created_at')
            .set('sortedBy', 'desc');
        return this.daoService.getObjects(this.url, params);
    };
    ListComponent.prototype.setUsers = function (response) {
        this.users = response.data;
        this.total = response.meta.pagination.total;
        this.pageSize = response.meta.pagination.per_page;
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dao_dao_service__WEBPACK_IMPORTED_MODULE_6__["DAOService"])); };
    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["esm-users-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])], decls: 17, vars: 11, consts: [[1, "px-5", "mx-auto", "mt-4", "mb-5", "card", "card-lg", "w-main"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["translate", "", 1, "h4"], [3, "doSearch"], [3, "title", "subtitle"], ["class", "alert alert-info", 4, "ngIf"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [3, "ngIf"], [1, "p-2"], ["name", "page", 3, "totalItems", "ngModel", "disabled", "maxSize", "boundaryLinks", "ngModelChange", "pageChanged", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-info"], ["scope", "row"], [3, "routerLink"], ["width", "70", 4, "ngxPermissionsOnly"], ["width", "70"], [1, "mx-3", "d-flex", "align-items-center"], [1, "mr-3", "fas", "fa-edit", "fa-lg", "text-primary"], ["class", "loading", 4, "ngFor", "ngForOf"], [1, "loading"], [1, "loader-bg"], ["width", "100"], ["name", "page", 3, "totalItems", "ngModel", "disabled", "maxSize", "boundaryLinks", "ngModelChange", "pageChanged"], [1, "loader-bg", "w-25"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "private.users.list.pageTitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "esm-search", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("doSearch", function ListComponent_Template_esm_search_doSearch_4_listener($event) { return ctx.handleChange($event, true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "esm-list-header", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ListComponent_div_9_Template, 2, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ListComponent_tr_12_Template, 7, 7, "tr", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ListComponent_ng_template_13_Template, 1, 2, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ListComponent_pagination_15_Template, 1, 5, "pagination", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ListComponent_div_16_Template, 4, 0, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, "private.users.list.listTitle"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, "private.users.list.totalNumber"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.users.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total == null);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_10__["ListHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsDirective"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });
    return ListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'esm-users-list',
                templateUrl: './list.component.html',
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]],
            }]
    }], function () { return [{ type: _dao_dao_service__WEBPACK_IMPORTED_MODULE_6__["DAOService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/private/users/users-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/private/users/users-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/permissions.guard */ "./src/app/security/permissions.guard.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/private/users/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/private/users/list/list.component.ts");







var routes = [
    {
        path: 'list',
        canActivate: [src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionsGuard"]],
        data: {
            permissions: {
                only: ['USERS_LIST'],
            },
        },
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
    },
    {
        path: 'edit/:id',
        canActivate: [src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionsGuard"]],
        data: {
            permissions: {
                only: ['USERS_EDIT'],
            },
        },
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"],
    },
    { path: '**', redirectTo: '/private', pathMatch: 'full' },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
    UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UsersRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/private/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/app/private/users/users.module.ts ***!
  \***********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.shared.module */ "./src/app/app.shared.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/private/users/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/private/users/list/list.component.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/private/users/users-routing.module.ts");








// imports from dependencies
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsersModule });
    UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] });
    return UsersModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]], imports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map