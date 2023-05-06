(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["external-applications-external-applications-module"],{

/***/ "./src/app/private/external-applications/add/add.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/private/external-applications/add/add.component.ts ***!
  \********************************************************************/
/*! exports provided: ExternalApplicationAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApplicationAddComponent", function() { return ExternalApplicationAddComponent; });
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
/* harmony import */ var _models_external_application_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/external-application.model */ "./src/app/private/models/external-application.model.ts");
/* harmony import */ var _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parameter/parameter.component */ "./src/app/private/external-applications/parameter/parameter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_focus_invalid_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../directives/focus-invalid-input */ "./src/app/directives/focus-invalid-input.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_input_validations_input_validations_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/input-validations/input-validations.component */ "./src/app/components/input-validations/input-validations.component.ts");























var _c0 = ["formElement"];
function ExternalApplicationAddComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "private.external-applications.add.title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExternalApplicationAddComponent_h1_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "private.external-applications.add.titleEdit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExternalApplicationAddComponent_input_validations_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input-validations", 27);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errors", ctx_r3.form.controls["name"].errors);
} }
function ExternalApplicationAddComponent_input_validations_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input-validations", 28);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errors", ctx_r4.form.controls["package"].errors);
} }
function ExternalApplicationAddComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "esm-parameter", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("remover", function ExternalApplicationAddComponent_div_30_Template_esm_parameter_remover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var i_r8 = ctx.index; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.removerParametro(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var param_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parameter", param_r7)("parameters", ctx_r5.form.get("parameters").value)("index", i_r8);
} }
function ExternalApplicationAddComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nenhum par\u00E2metro cadastrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var ExternalApplicationAddComponent = /** @class */ (function () {
    function ExternalApplicationAddComponent(_daoService, _toastr, _formBuilder, _loaderService, route, activeRoute) {
        this._daoService = _daoService;
        this._toastr = _toastr;
        this._formBuilder = _formBuilder;
        this._loaderService = _loaderService;
        this.route = route;
        this.activeRoute = activeRoute;
        this.urlExternalApplications = src_app_app_api__WEBPACK_IMPORTED_MODULE_6__["ESPIM_REST_ExternalApplications"];
        this.editing = false;
        this.loading = true;
        this.id = '';
    }
    ExternalApplicationAddComponent.prototype.ngOnInit = function () {
        this.id = this.activeRoute.snapshot.params.id;
        this.form = this._formBuilder.group({
            name: this._formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            package: this._formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            parameters: this._formBuilder.array([]),
        });
        if (this.id) {
            this.fetchData(this.id);
        }
        else {
            this.loading = false;
        }
    };
    ExternalApplicationAddComponent.prototype.fetchData = function (id) {
        var _this = this;
        this._loaderService.show();
        this._daoService
            .getObject(this.urlExternalApplications, id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this._loaderService.hide(); }))
            .subscribe(function (response) {
            _this.form.patchValue(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, response.data));
            response.data.parameters.forEach(function (param) {
                _this.adicionarParametro(param);
            });
        });
    };
    ExternalApplicationAddComponent.prototype.novoParametro = function () {
        this.adicionarParametro(new _models_external_application_model__WEBPACK_IMPORTED_MODULE_10__["ExternalApplicationParameter"]());
    };
    ExternalApplicationAddComponent.prototype.adicionarParametro = function (value) {
        this.parametersFormArray.push(this._formBuilder.control(value));
    };
    ExternalApplicationAddComponent.prototype.removerParametro = function (index) {
        this.parametersFormArray.removeAt(index);
    };
    Object.defineProperty(ExternalApplicationAddComponent.prototype, "parametersFormArray", {
        get: function () {
            return this.form.get('parameters');
        },
        enumerable: false,
        configurable: true
    });
    ExternalApplicationAddComponent.prototype.save = function (event) {
        var _this = this;
        this.form.markAllAsTouched();
        var valid = true;
        this.parameterComponents.forEach(function (component) {
            if (!component.validateForm()) {
                valid = false;
            }
        });
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
                    _this.route.navigate(['/private/external-applications/list']);
                }
            }, function (resp) { return src_app_util_util_form_service__WEBPACK_IMPORTED_MODULE_8__["FormUtil"].setErrorsBackend(_this.form, resp.data); });
        }
    };
    ExternalApplicationAddComponent.prototype.sendRequest = function () {
        var dados = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.form.value);
        if (this.id) {
            return this._daoService.putObject(this.urlExternalApplications + this.id, dados);
        }
        else {
            return this._daoService.postObject(this.urlExternalApplications, dados);
        }
    };
    ExternalApplicationAddComponent.ɵfac = function ExternalApplicationAddComponent_Factory(t) { return new (t || ExternalApplicationAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dao_dao_service__WEBPACK_IMPORTED_MODULE_9__["DAOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    ExternalApplicationAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExternalApplicationAddComponent, selectors: [["esm-external-applications-add"]], viewQuery: function ExternalApplicationAddComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_parameter_parameter_component__WEBPACK_IMPORTED_MODULE_11__["ParameterComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.parameterComponents = _t);
        } }, decls: 41, vars: 14, consts: [[1, "mx-auto", "mt-4", "card", "card-lg", "w-main", "container-fluid"], [1, "row"], [1, "p-0", "mx-auto", "bg-white", "rounded", "col-12", "p-xl-2"], [1, "container-fluid"], [1, "col-12"], ["class", "h4", "translate", "", 4, "ngIf"], ["focusInvalidInput", "", 3, "formGroup", "ngSubmit"], ["formElement", ""], [1, "col-6", "form-group"], [1, "form-label-group"], ["id", "name", "name", "name", "type", "text", "formControlName", "name", 1, "form-control", "border-bottom", 3, "placeholder"], ["for", "text", "translate", ""], ["label", "Nome", 3, "errors", 4, "ngIf"], ["id", "package", "name", "package", "type", "text", "formControlName", "package", 1, "form-control", "border-bottom", 3, "placeholder", "readonly"], ["for", "email", "translate", ""], ["label", "Package", 3, "errors", 4, "ngIf"], [1, "row", "mt-4", "mb-5"], [1, "col-12", "form-group"], [1, "h6"], ["class", "mb-2", 4, "ngFor", "ngForOf"], ["class", "alert alert-info", 4, "ngIf"], ["href", "javascript:", 1, "btn", "btn-white", "btn-shadow", 3, "click"], [1, "row", "justify-content-end"], [1, "col-auto"], ["routerLink", "/private/external-applications/list", 1, "btn", "btn-success", "btn-lg", "btn-shadow"], ["type", "submit", "name", "saveButton", "translate", "", 1, "btn", "btn-primary", "btn-lg", "btn-shadow", "min-100"], ["translate", "", 1, "h4"], ["label", "Nome", 3, "errors"], ["label", "Package", 3, "errors"], [1, "mb-2"], [3, "parameter", "parameters", "index", "remover"], [1, "alert", "alert-info"]], template: function ExternalApplicationAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExternalApplicationAddComponent_h1_6_Template, 2, 0, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ExternalApplicationAddComponent_h1_7_Template, 2, 0, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ExternalApplicationAddComponent_Template_form_ngSubmit_8_listener($event) { return ctx.save($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "private.external-applications.add.name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ExternalApplicationAddComponent_input_validations_17_Template, 1, 1, "input-validations", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "private.external-applications.add.package");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ExternalApplicationAddComponent_input_validations_25_Template, 1, 1, "input-validations", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Par\u00E2metros");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ExternalApplicationAddComponent_div_30_Template, 2, 3, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ExternalApplicationAddComponent_div_31_Template, 2, 0, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalApplicationAddComponent_Template_a_click_32_listener() { return ctx.novoParametro(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Adicionar par\u00E2metro");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "VOLTAR");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "SALVAR");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "private.external-applications.add.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["name"].invalid && ctx.form.controls["name"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 12, "private.external-applications.add.package"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["package"].invalid && ctx.form.controls["package"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.form.get("parameters").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("parameters").value.length == 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _directives_focus_invalid_input__WEBPACK_IMPORTED_MODULE_13__["FocusInvalidInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_input_validations_input_validations_component__WEBPACK_IMPORTED_MODULE_15__["InputValidationsComponent"], _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_11__["ParameterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], encapsulation: 2 });
    return ExternalApplicationAddComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExternalApplicationAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'esm-external-applications-add',
                templateUrl: './add.component.html',
            }]
    }], function () { return [{ type: _dao_dao_service__WEBPACK_IMPORTED_MODULE_9__["DAOService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { formElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['formElement']
        }], parameterComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_parameter_parameter_component__WEBPACK_IMPORTED_MODULE_11__["ParameterComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/private/external-applications/external-applications-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/private/external-applications/external-applications-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ExternalApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApplicationRoutingModule", function() { return ExternalApplicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/permissions.guard */ "./src/app/security/permissions.guard.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/private/external-applications/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/private/external-applications/list/list.component.ts");







var routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ExternalApplicationListComponent"],
        canActivate: [src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionsGuard"]],
        data: {
            permissions: {
                only: ['EXTERNAL_APP_LIST'],
            },
        },
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["ExternalApplicationAddComponent"],
        canActivate: [src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionsGuard"]],
        data: {
            permissions: {
                only: ['EXTERNAL_APP_ADD'],
            },
        },
    },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["ExternalApplicationAddComponent"],
        canActivate: [src_app_security_permissions_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionsGuard"]],
        data: {
            permissions: {
                only: ['EXTERNAL_APP_EDIT'],
            },
        },
    },
    { path: '**', redirectTo: '/private', pathMatch: 'full' },
];
var ExternalApplicationRoutingModule = /** @class */ (function () {
    function ExternalApplicationRoutingModule() {
    }
    ExternalApplicationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExternalApplicationRoutingModule });
    ExternalApplicationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExternalApplicationRoutingModule_Factory(t) { return new (t || ExternalApplicationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ExternalApplicationRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExternalApplicationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalApplicationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/private/external-applications/external-applications.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/private/external-applications/external-applications.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ExternalApplicationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApplicationsModule", function() { return ExternalApplicationsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.shared.module */ "./src/app/app.shared.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/private/external-applications/add/add.component.ts");
/* harmony import */ var _external_applications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./external-applications-routing.module */ "./src/app/private/external-applications/external-applications-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/private/external-applications/list/list.component.ts");
/* harmony import */ var _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parameter/parameter.component */ "./src/app/private/external-applications/parameter/parameter.component.ts");









// imports from dependencies
var ExternalApplicationsModule = /** @class */ (function () {
    function ExternalApplicationsModule() {
    }
    ExternalApplicationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExternalApplicationsModule });
    ExternalApplicationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExternalApplicationsModule_Factory(t) { return new (t || ExternalApplicationsModule)(); }, imports: [[_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _external_applications_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExternalApplicationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] });
    return ExternalApplicationsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExternalApplicationsModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["ExternalApplicationAddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ExternalApplicationListComponent"], _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_7__["ParameterComponent"]], imports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _external_applications_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExternalApplicationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExternalApplicationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _external_applications_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExternalApplicationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["ExternalApplicationAddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ExternalApplicationListComponent"], _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_7__["ParameterComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/private/external-applications/list/list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/private/external-applications/list/list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExternalApplicationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApplicationListComponent", function() { return ExternalApplicationListComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_app_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.api */ "./src/app/app.api.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_swal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/swal.service */ "./src/app/services/swal.service.ts");
/* harmony import */ var _dao_dao_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dao/dao.service */ "./src/app/private/dao/dao.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../search/search.component */ "./src/app/private/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/list-header/list-header.component */ "./src/app/private/components/list-header/list-header.component.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/__ivy_ngcc__/fesm2015/ngx-permissions.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm5/ngx-bootstrap-pagination.js");

























function ExternalApplicationListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nenhuma aplica\u00E7\u00E3o externa encontrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c0 = function (a1) { return ["/private/external-applications/edit", a1]; };
function ExternalApplicationListComponent_tr_14_td_4_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var externalApp_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, externalApp_r5.id));
} }
function ExternalApplicationListComponent_tr_14_td_4_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExternalApplicationListComponent_tr_14_td_4_a_3_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); var externalApp_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.deleteExternalApp(externalApp_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c1 = function () { return ["EXTERNAL_APP_EDIT"]; };
var _c2 = function () { return ["EXTERNAL_APP_DELETE"]; };
function ExternalApplicationListComponent_tr_14_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExternalApplicationListComponent_tr_14_td_4_a_2_Template, 2, 3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ExternalApplicationListComponent_tr_14_td_4_a_3_Template, 2, 0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c2));
} }
var _c3 = function () { return ["EXTERNAL_APP_EDIT", "EXTERNAL_APP_DELETE"]; };
function ExternalApplicationListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ExternalApplicationListComponent_tr_14_td_4_Template, 4, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var externalApp_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, externalApp_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", externalApp_r5.name, " - ", externalApp_r5.package, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c3));
} }
function ExternalApplicationListComponent_ng_template_15_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c4 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; };
function ExternalApplicationListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ExternalApplicationListComponent_ng_template_15_tr_0_Template, 5, 0, "tr", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c4));
} }
function ExternalApplicationListComponent_pagination_17_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ExternalApplicationListComponent_pagination_17_Template_pagination_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.page = $event; })("pageChanged", function ExternalApplicationListComponent_pagination_17_Template_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.handleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("totalItems", ctx_r3.total)("ngModel", ctx_r3.page)("disabled", !ctx_r3.total)("maxSize", 15)("boundaryLinks", true);
} }
function ExternalApplicationListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c5 = function () { return ["/private/external-applications/add"]; };
var ExternalApplicationListComponent = /** @class */ (function () {
    function ExternalApplicationListComponent(daoService, _modalService, _loaderService, _swalService, _toastr) {
        var _this = this;
        this.daoService = daoService;
        this._modalService = _modalService;
        this._loaderService = _loaderService;
        this._swalService = _swalService;
        this._toastr = _toastr;
        this.urlExternalApplications = src_app_app_api__WEBPACK_IMPORTED_MODULE_7__["ESPIM_REST_ExternalApplications"];
        this.loading = true;
        this.page = 1;
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.searchTerm = '';
        this.search
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            return _this.getExternalApplications();
        }))
            .subscribe(function (response) {
            _this.loading = false;
            _this.setExternalApplications(response);
        });
    }
    ExternalApplicationListComponent.prototype.handleChange = function ($event, search) {
        if (search === void 0) { search = false; }
        if (search) {
            this.total = null;
            this.searchTerm = $event;
            this.page = 1;
        }
        this.externalApplications = [];
        this.loading = true;
        this.search.next($event);
    };
    ExternalApplicationListComponent.prototype.ngOnInit = function () {
        this.search.next('');
    };
    ExternalApplicationListComponent.prototype.getExternalApplications = function () {
        var _a;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('search', this.searchTerm)
            .set('page', (_a = this.page) === null || _a === void 0 ? void 0 : _a.toString())
            .set('orderBy', 'created_at')
            .set('sortedBy', 'desc');
        return this.daoService.getObjects(this.urlExternalApplications, params);
    };
    ExternalApplicationListComponent.prototype.setExternalApplications = function (response) {
        this.externalApplications = response.data;
        this.total = response.meta.pagination.total;
        this.pageSize = response.meta.pagination.per_page;
    };
    ExternalApplicationListComponent.prototype.deleteExternalApp = function (externalApp) {
        var _this = this;
        this._swalService.confirmDelete(externalApp.name + '-' + externalApp.package, 'Aplicação Externa').then(function (result) {
            if (result.isConfirmed) {
                _this._loaderService.show();
                _this.daoService
                    .deleteObject(_this.urlExternalApplications, externalApp.id.toString())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this._loaderService.hide(); }))
                    .subscribe(function (resp) {
                    _this.handleChange(resp);
                    _this._toastr.success(resp.message);
                });
            }
        });
    };
    ExternalApplicationListComponent.ɵfac = function ExternalApplicationListComponent_Factory(t) { return new (t || ExternalApplicationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dao_dao_service__WEBPACK_IMPORTED_MODULE_10__["DAOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_swal_service__WEBPACK_IMPORTED_MODULE_9__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
    ExternalApplicationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExternalApplicationListComponent, selectors: [["esm-external-application-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])], decls: 19, vars: 14, consts: [[1, "px-5", "mx-auto", "mt-4", "mb-5", "card", "card-lg", "w-main"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["translate", "", 1, "h4"], ["translate", "", 1, "btn", "btn-link", "align-self-end", 3, "routerLink"], [3, "doSearch"], [3, "title", "subtitle", "total"], ["class", "alert alert-info", 4, "ngIf"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [3, "ngIf"], [1, "p-2"], ["name", "page", 3, "totalItems", "ngModel", "disabled", "maxSize", "boundaryLinks", "ngModelChange", "pageChanged", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-info"], ["scope", "row"], [3, "routerLink"], ["width", "100", 4, "ngxPermissionsOnly"], ["width", "100"], [1, "mx-3", "d-flex", "align-items-center"], [3, "routerLink", 4, "ngxPermissionsOnly"], ["href", "javascript:", 4, "ngxPermissionsOnly"], [1, "mr-3", "fas", "fa-edit", "fa-lg", "text-primary"], ["href", "javascript:"], [1, "fas", "fa-trash-alt", "fa-lg", "text-primary", 3, "click"], ["class", "loading", 4, "ngFor", "ngForOf"], [1, "loading"], [1, "loader-bg"], ["name", "page", 3, "totalItems", "ngModel", "disabled", "maxSize", "boundaryLinks", "ngModelChange", "pageChanged"], [1, "loader-bg", "w-25"]], template: function ExternalApplicationListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "private.external-applications.list.pageTitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "private.external-applications.list.addButton");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "esm-search", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("doSearch", function ExternalApplicationListComponent_Template_esm_search_doSearch_6_listener($event) { return ctx.handleChange($event, true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "esm-list-header", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ExternalApplicationListComponent_div_11_Template, 2, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ExternalApplicationListComponent_tr_14_Template, 5, 7, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ExternalApplicationListComponent_ng_template_15_Template, 1, 2, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ExternalApplicationListComponent_pagination_17_Template, 1, 5, "pagination", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ExternalApplicationListComponent_div_18_Template, 4, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c5));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, "private.external-applications.list.listTitle"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 11, "private.external-applications.list.totalNumber"))("total", ctx.total);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.externalApplications.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.externalApplications);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total == null);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_15__["ListHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], ngx_permissions__WEBPACK_IMPORTED_MODULE_16__["NgxPermissionsDirective"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_17__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], encapsulation: 2 });
    return ExternalApplicationListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ExternalApplicationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'esm-external-application-list',
                templateUrl: './list.component.html',
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]],
            }]
    }], function () { return [{ type: _dao_dao_service__WEBPACK_IMPORTED_MODULE_10__["DAOService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }, { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] }, { type: src_app_services_swal_service__WEBPACK_IMPORTED_MODULE_9__["SwalService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/private/external-applications/parameter/parameter.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/private/external-applications/parameter/parameter.component.ts ***!
  \********************************************************************************/
/*! exports provided: ParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return ParameterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_external_application_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/external-application.model */ "./src/app/private/models/external-application.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_input_validations_input_validations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/input-validations/input-validations.component */ "./src/app/components/input-validations/input-validations.component.ts");







function ParameterComponent_input_validations_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input-validations", 17);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.form.controls["name"].errors);
} }
function ParameterComponent_input_validations_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input-validations", 18);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.form.controls["key"].errors);
} }
function ParameterComponent_input_validations_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input-validations", 19);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.form.controls["default_value"].errors);
} }
var ParameterComponent = /** @class */ (function () {
    function ParameterComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.remover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ParameterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._formBuilder.group({
            name: this._formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            key: this._formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            default_value: this._formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.form.valueChanges.subscribe(function (value) {
            Object.assign(_this.parameter, value);
        });
        this.form.patchValue(this.parameter);
    };
    ParameterComponent.prototype.excluir = function () {
        this.remover.emit(true);
    };
    ParameterComponent.prototype.validateForm = function () {
        this.form.markAllAsTouched();
        return this.form.valid;
    };
    ParameterComponent.ɵfac = function ParameterComponent_Factory(t) { return new (t || ParameterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    ParameterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParameterComponent, selectors: [["esm-parameter"]], inputs: { parameters: "parameters", parameter: "parameter", index: "index" }, outputs: { remover: "remover" }, decls: 26, vars: 5, consts: [[1, "card", 3, "formGroup"], [1, "card-body"], [1, "h6"], [1, "row"], [1, "col-4"], [1, "form-label-group"], ["id", "name", "name", "name", "type", "text", "placeholder", "Nome visual", "formControlName", "name", 1, "form-control", "border-bottom"], ["for", "text"], ["label", "Nome visual", 3, "errors", 4, "ngIf"], ["id", "key", "name", "key", "type", "text", "placeholder", "Nome real", "formControlName", "key", 1, "form-control", "border-bottom"], ["label", "Nome real", 3, "errors", 4, "ngIf"], [1, "col"], ["id", "default_value", "name", "default_value", "type", "text", "placeholder", "Valor padr\u00E3o", "formControlName", "default_value", 1, "form-control", "border-bottom"], ["label", "Valor padr\u00E3o", 3, "errors", 4, "ngIf"], [1, "col-auto"], ["href", "javascript:", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-trash-alt"], ["label", "Nome visual", 3, "errors"], ["label", "Nome real", 3, "errors"], ["label", "Valor padr\u00E3o", 3, "errors"]], template: function ParameterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nome visual");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ParameterComponent_input_validations_10_Template, 1, 1, "input-validations", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nome real");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ParameterComponent_input_validations_16_Template, 1, 1, "input-validations", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Valor padr\u00E3o");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ParameterComponent_input_validations_22_Template, 1, 1, "input-validations", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParameterComponent_Template_a_click_24_listener() { return ctx.excluir(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Par\u00E2metro ", ctx.index + 1, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["name"].invalid && ctx.form.controls["name"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["key"].invalid && ctx.form.controls["key"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["default_value"].invalid && ctx.form.controls["default_value"].touched);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_input_validations_input_validations_component__WEBPACK_IMPORTED_MODULE_4__["InputValidationsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZXh0ZXJuYWwtYXBwbGljYXRpb25zL3BhcmFtZXRlci9wYXJhbWV0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return ParameterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParameterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'esm-parameter',
                templateUrl: './parameter.component.html',
                styleUrls: ['./parameter.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], remover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/private/models/external-application.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/private/models/external-application.model.ts ***!
  \**************************************************************/
/*! exports provided: ExternalApplication, ExternalApplicationParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApplication", function() { return ExternalApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApplicationParameter", function() { return ExternalApplicationParameter; });
var ExternalApplication = /** @class */ (function () {
    function ExternalApplication() {
        this.name = '';
        this.package = '';
    }
    return ExternalApplication;
}());

var ExternalApplicationParameter = /** @class */ (function () {
    function ExternalApplicationParameter() {
        this.name = '';
        this.key = '';
        this.default_value = '';
    }
    return ExternalApplicationParameter;
}());



/***/ })

}]);
//# sourceMappingURL=external-applications-external-applications-module.js.map