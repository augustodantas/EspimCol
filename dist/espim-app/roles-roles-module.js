(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"],{

/***/ "./src/app/private/models/permission.model.ts":
/*!****************************************************!*\
  !*** ./src/app/private/models/permission.model.ts ***!
  \****************************************************/
/*! exports provided: Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
var Permission = /** @class */ (function () {
    function Permission(event) {
        if (event === void 0) { event = {}; }
        this.name = '';
        this.id = event.id;
        this.name = event.name;
    }
    return Permission;
}());



/***/ }),

/***/ "./src/app/private/roles/add/add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/private/roles/add/add.component.ts ***!
  \****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_app_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.api */ "./src/app/app.api.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_util_util_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/util.form.service */ "./src/app/util/util.form.service.ts");
/* harmony import */ var _dao_dao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dao/dao.service */ "./src/app/private/dao/dao.service.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/permission.model */ "./src/app/private/models/permission.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_focus_invalid_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../directives/focus-invalid-input */ "./src/app/directives/focus-invalid-input.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_input_validations_input_validations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/input-validations/input-validations.component */ "./src/app/components/input-validations/input-validations.component.ts");





















var _c0 = ["formElement"];
function AddComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "private.roles.add.title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddComponent_h1_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "private.roles.add.titleEdit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddComponent_input_validations_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input-validations", 23);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errors", ctx_r3.form.controls["name"].errors);
} }
function AddComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddComponent_div_24_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var permission_r5 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.checkboxHandler($event.target.checked, permission_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var permission_r5 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "permission" + permission_r5.id)("checked", ctx_r4.isChecked(permission_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "permission" + permission_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r5.name);
} }
var AddComponent = /** @class */ (function () {
    function AddComponent(_daoService, _toastr, _formBuilder, _loaderService, route, activeRoute) {
        this._daoService = _daoService;
        this._toastr = _toastr;
        this._formBuilder = _formBuilder;
        this._loaderService = _loaderService;
        this.route = route;
        this.activeRoute = activeRoute;
        this.url = src_app_app_api__WEBPACK_IMPORTED_MODULE_6__["ESPIM_REST_Roles"];
        this.urlPermissions = src_app_app_api__WEBPACK_IMPORTED_MODULE_6__["ESPIM_REST_Permissions"];
        this.permissions = [];
        this.editing = false;
        this.loading = true;
        this.id = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        this.id = this.activeRoute.snapshot.params.id;
        this.form = this._formBuilder.group({
            name: this._formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            permissions: this._formBuilder.array([]),
        });
        if (this.id) {
            this.fetchData(this.id);
        }
        else {
            this.loading = false;
        }
        this.getPermissions();
    };
    AddComponent.prototype.fetchData = function (id) {
        var _this = this;
        this._loaderService.show();
        this._daoService
            .getObject(this.url, id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this._loaderService.hide(); }))
            .subscribe(function (response) {
            _this.form.patchValue(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, response.data));
            response.data.permissions.forEach(function (it) { return _this.checkboxHandler(true, new _models_permission_model__WEBPACK_IMPORTED_MODULE_10__["Permission"](it)); });
        });
    };
    AddComponent.prototype.save = function (event) {
        var _this = this;
        this.form.markAllAsTouched();
        var valid = true;
        if (this.form.valid && valid) {
            this._loaderService.show();
            this.sendRequest()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this._loaderService.hide(); }))
                .subscribe(function (response) {
                if (response.error) {
                    src_app_util_util_form_service__WEBPACK_IMPORTED_MODULE_8__["FormUtil"].setErrorsBackend(_this.form, response);
                }
                else {
                    _this._toastr.success(response.message);
                    _this.route.navigate(['/private/roles/list']);
                }
            }, function (resp) { return src_app_util_util_form_service__WEBPACK_IMPORTED_MODULE_8__["FormUtil"].setErrorsBackend(_this.form, resp.data); });
        }
    };
    AddComponent.prototype.sendRequest = function () {
        var dados = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.form.value);
        dados.permissions = this.permissionIdArray;
        if (this.id) {
            return this._daoService.putObject(this.url + this.id, dados);
        }
        else {
            return this._daoService.postObject(this.url, dados);
        }
    };
    AddComponent.prototype.checkboxHandler = function (checked, permission) {
        if (checked) {
            this.permissionFormArray.push(this._formBuilder.control(permission));
        }
        else {
            var index = this.permissionIdArray.indexOf(permission.id);
            this.permissionFormArray.removeAt(index);
        }
    };
    Object.defineProperty(AddComponent.prototype, "permissionIdArray", {
        get: function () {
            return this.permissionFormArray.value.map(function (permission) { return permission.id; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddComponent.prototype, "permissionFormArray", {
        get: function () {
            return this.form.controls.permissions;
        },
        enumerable: false,
        configurable: true
    });
    AddComponent.prototype.getPermissions = function () {
        var _this = this;
        this._daoService.getObjects(this.urlPermissions).subscribe(function (response) {
            _this.permissions = response.data;
        });
    };
    AddComponent.prototype.isChecked = function (permission) {
        return this.permissionFormArray.value.find(function (value) { return value.id == permission.id; }) ? true : false;
    };
    AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dao_dao_service__WEBPACK_IMPORTED_MODULE_9__["DAOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["esm-roles-add"]], viewQuery: function AddComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formElement = _t.first);
        } }, decls: 32, vars: 8, consts: [[1, "mx-auto", "mt-4", "card", "card-lg", "w-main", "container-fluid"], [1, "row"], [1, "p-0", "mx-auto", "bg-white", "rounded", "col-12", "p-xl-2"], [1, "container-fluid"], [1, "col-12"], ["class", "h4", "translate", "", 4, "ngIf"], ["focusInvalidInput", "", 3, "formGroup", "ngSubmit"], ["formElement", ""], [1, "col-6", "form-group"], [1, "form-label-group"], ["id", "name", "name", "name", "type", "text", "formControlName", "name", 1, "form-control", "border-bottom", 3, "placeholder"], ["for", "text", "translate", ""], ["label", "Nome", 3, "errors", 4, "ngIf"], [1, "row", "mb-5"], [1, "col-12", "form-group"], [1, "h6"], [1, "card", "card-body"], ["class", "col-3 d-flex align-items-center overflow-hidden text-nowrap", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-end"], [1, "col-auto"], ["routerLink", "/private/roles/list", 1, "btn", "btn-success", "btn-lg", "btn-shadow"], ["type", "submit", "name", "saveButton", "translate", "", 1, "btn", "btn-primary", "btn-lg", "btn-shadow", "min-100"], ["translate", "", 1, "h4"], ["label", "Nome", 3, "errors"], [1, "col-3", "d-flex", "align-items-center", "overflow-hidden", "text-nowrap"], ["type", "checkbox", 3, "id", "checked", "click"], [1, "m-0", 3, "for"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddComponent_h1_6_Template, 2, 0, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddComponent_h1_7_Template, 2, 0, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddComponent_Template_form_ngSubmit_8_listener($event) { return ctx.save($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "private.roles.add.name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddComponent_input_validations_17_Template, 1, 1, "input-validations", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Permiss\u00F5es");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddComponent_div_24_Template, 4, 4, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "VOLTAR");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "SALVAR");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 6, "private.roles.add.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["name"].invalid && ctx.form.controls["name"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissions);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _directives_focus_invalid_input__WEBPACK_IMPORTED_MODULE_12__["FocusInvalidInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_input_validations_input_validations_component__WEBPACK_IMPORTED_MODULE_14__["InputValidationsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], encapsulation: 2 });
    return AddComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'esm-roles-add',
                templateUrl: './add.component.html',
            }]
    }], function () { return [{ type: _dao_dao_service__WEBPACK_IMPORTED_MODULE_9__["DAOService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { formElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['formElement']
        }] }); })();


/***/ }),

/***/ "./src/app/private/roles/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/roles/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_app_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.api */ "./src/app/app.api.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_swal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/swal.service */ "./src/app/services/swal.service.ts");
/* harmony import */ var _dao_dao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dao/dao.service */ "./src/app/private/dao/dao.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/__ivy_ngcc__/fesm2015/ngx-permissions.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../search/search.component */ "./src/app/private/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/list-header/list-header.component */ "./src/app/private/components/list-header/list-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






















var _c0 = function () { return ["/private/roles/add"]; };
function ListComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "private.roles.list.addButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function ListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nenhum grupo encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c1 = function (a1) { return ["/private/roles/edit", a1]; };
function ListComponent_tr_13_td_4_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var role_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c1, role_r4.id));
} }
function ListComponent_tr_13_td_4_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_tr_13_td_4_a_3_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); var role_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.deleteRole(role_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c2 = function () { return ["ROLES_EDIT"]; };
var _c3 = function () { return ["ROLES_DELETE"]; };
function ListComponent_tr_13_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListComponent_tr_13_td_4_a_2_Template, 2, 3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListComponent_tr_13_td_4_a_3_Template, 2, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c3));
} }
var _c4 = function () { return ["ROLES_EDIT", "ROLES_DELETE"]; };
function ListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListComponent_tr_13_td_4_Template, 4, 4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var role_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, role_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", role_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c4));
} }
function ListComponent_ng_template_14_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c5 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; };
function ListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ListComponent_ng_template_14_tr_0_Template, 5, 0, "tr", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c5));
} }
var _c6 = function () { return ["ROLES_ADD"]; };
var ListComponent = /** @class */ (function () {
    function ListComponent(daoService, _loaderService, _swalService, _toastr) {
        var _this = this;
        this.daoService = daoService;
        this._loaderService = _loaderService;
        this._swalService = _swalService;
        this._toastr = _toastr;
        this.url = src_app_app_api__WEBPACK_IMPORTED_MODULE_6__["ESPIM_REST_Roles"];
        this.loading = true;
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchTerm = '';
        this.search
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.getRoles();
        }))
            .subscribe(function (response) {
            _this.loading = false;
            _this.setRoles(response);
        });
    }
    ListComponent.prototype.handleChange = function ($event, search) {
        if (search === void 0) { search = false; }
        if (search) {
            this.searchTerm = $event;
        }
        this.roles = [];
        this.loading = true;
        this.search.next($event);
    };
    ListComponent.prototype.ngOnInit = function () {
        this.search.next('');
    };
    ListComponent.prototype.getRoles = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('search', this.searchTerm).set('orderBy', 'created_at').set('sortedBy', 'desc');
        return this.daoService.getObjects(this.url, params);
    };
    ListComponent.prototype.setRoles = function (response) {
        this.roles = response.data;
    };
    ListComponent.prototype.deleteRole = function (role) {
        var _this = this;
        this._swalService.confirmDelete(role.name, 'grupo').then(function (result) {
            if (result.isConfirmed) {
                _this._loaderService.show();
                _this.daoService
                    .deleteObject(_this.url, role.id.toString())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this._loaderService.hide(); }))
                    .subscribe(function (resp) {
                    _this.handleChange(resp);
                    _this._toastr.success(resp.message);
                });
            }
        });
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dao_dao_service__WEBPACK_IMPORTED_MODULE_9__["DAOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_swal_service__WEBPACK_IMPORTED_MODULE_8__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["esm-roles-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])], decls: 15, vars: 11, consts: [[1, "px-5", "mx-auto", "mt-4", "mb-5", "card", "card-lg", "w-main"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["translate", "", 1, "h4"], ["class", "btn btn-link align-self-end", "translate", "", 3, "routerLink", 4, "ngxPermissionsOnly"], [3, "doSearch"], [3, "title", "subtitle"], ["class", "alert alert-info", 4, "ngIf"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [3, "ngIf"], ["translate", "", 1, "btn", "btn-link", "align-self-end", 3, "routerLink"], [1, "alert", "alert-info"], ["scope", "row"], [3, "routerLink"], ["width", "100", 4, "ngxPermissionsOnly"], ["width", "100"], [1, "mx-3", "d-flex", "align-items-center"], [3, "routerLink", 4, "ngxPermissionsOnly"], ["href", "javascript:", 4, "ngxPermissionsOnly"], [1, "mr-3", "fas", "fa-edit", "fa-lg", "text-primary"], ["href", "javascript:"], [1, "fas", "fa-trash-alt", "fa-lg", "text-primary", 3, "click"], ["class", "loading", 4, "ngFor", "ngForOf"], [1, "loading"], [1, "loader-bg"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "private.roles.list.pageTitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListComponent_a_4_Template, 2, 2, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "esm-search", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("doSearch", function ListComponent_Template_esm_search_doSearch_5_listener($event) { return ctx.handleChange($event, true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "esm-list-header", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ListComponent_div_10_Template, 2, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ListComponent_tr_13_Template, 5, 6, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ListComponent_ng_template_14_Template, 1, 2, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c6));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, "private.roles.list.listTitle"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "private.roles.list.totalNumber"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.roles.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.roles);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateDirective"], ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_14__["ListHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], encapsulation: 2 });
    return ListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'esm-roles-list',
                templateUrl: './list.component.html',
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]],
            }]
    }], function () { return [{ type: _dao_dao_service__WEBPACK_IMPORTED_MODULE_9__["DAOService"] }, { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: src_app_services_swal_service__WEBPACK_IMPORTED_MODULE_8__["SwalService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/private/roles/roles-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/private/roles/roles-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RolesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesRoutingModule", function() { return RolesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/permissions.guard */ "./src/app/security/permissions.guard.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/private/roles/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/private/roles/list/list.component.ts");







var routes = [
    {
        path: 'list',
        canActivate: [src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionsGuard"]],
        data: {
            permissions: {
                only: ['ROLES_LIST'],
            },
        },
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
    },
    {
        path: 'add',
        canActivate: [src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionsGuard"]],
        data: {
            permissions: {
                only: ['ROLES_ADD'],
            },
        },
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"],
    },
    {
        path: 'edit/:id',
        canActivate: [src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionsGuard"]],
        data: {
            permissions: {
                only: ['ROLES_EDIT'],
            },
        },
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"],
    },
    { path: '**', redirectTo: '/private', pathMatch: 'full' },
];
var RolesRoutingModule = /** @class */ (function () {
    function RolesRoutingModule() {
    }
    RolesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RolesRoutingModule });
    RolesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RolesRoutingModule_Factory(t) { return new (t || RolesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return RolesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RolesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/private/roles/roles.module.ts":
/*!***********************************************!*\
  !*** ./src/app/private/roles/roles.module.ts ***!
  \***********************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.shared.module */ "./src/app/app.shared.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/private/roles/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/private/roles/list/list.component.ts");
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles-routing.module */ "./src/app/private/roles/roles-routing.module.ts");








// imports from dependencies
var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RolesModule });
    RolesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RolesModule_Factory(t) { return new (t || RolesModule)(); }, imports: [[_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _roles_routing_module__WEBPACK_IMPORTED_MODULE_6__["RolesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] });
    return RolesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RolesModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]], imports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _roles_routing_module__WEBPACK_IMPORTED_MODULE_6__["RolesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RolesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _roles_routing_module__WEBPACK_IMPORTED_MODULE_6__["RolesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=roles-roles-module.js.map