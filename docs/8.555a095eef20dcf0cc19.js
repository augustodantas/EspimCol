(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{V5l3:function(t,e,r){"use strict";r.r(e),r.d(e,"ExternalApplicationsModule",(function(){return ct}));var a=r("ofXK"),i=r("j1ZV"),n=r("Awto"),o=r("tyNb"),c=r("0rl9"),l=r("mrSG"),s=r("3Pt+"),b=r("2WpN"),d=r("nWBu"),p=r("5dVO"),u=r("eGxY"),m=r("P9qh"),f=function(){return function(){this.name="",this.key="",this.default_value=""}}(),h=r("fXoL"),v=r("n8HC");function g(t,e){if(1&t&&h.Mb(0,"input-validations",17),2&t){var r=h.cc();h.ic("errors",r.form.controls.name.errors)}}function R(t,e){if(1&t&&h.Mb(0,"input-validations",18),2&t){var r=h.cc();h.ic("errors",r.form.controls.key.errors)}}function x(t,e){if(1&t&&h.Mb(0,"input-validations",19),2&t){var r=h.cc();h.ic("errors",r.form.controls.default_value.errors)}}var y=function(){function t(t){this._formBuilder=t,this.remover=new h.n}return t.prototype.ngOnInit=function(){var t=this;this.form=this._formBuilder.group({name:this._formBuilder.control("",[s.v.required]),key:this._formBuilder.control("",[s.v.required]),default_value:this._formBuilder.control("",[s.v.required])}),this.form.valueChanges.subscribe((function(e){Object.assign(t.parameter,e)})),this.form.patchValue(this.parameter)},t.prototype.excluir=function(){this.remover.emit(!0)},t.prototype.validateForm=function(){return this.form.markAllAsTouched(),this.form.valid},t.\u0275fac=function(e){return new(e||t)(h.Lb(s.d))},t.\u0275cmp=h.Fb({type:t,selectors:[["esm-parameter"]],inputs:{parameters:"parameters",parameter:"parameter",index:"index"},outputs:{remover:"remover"},decls:26,vars:5,consts:[[1,"card",3,"formGroup"],[1,"card-body"],[1,"h6"],[1,"row"],[1,"col-4"],[1,"form-label-group"],["id","name","name","name","type","text","placeholder","Nome visual","formControlName","name",1,"form-control","border-bottom"],["for","text"],["label","Nome visual",3,"errors",4,"ngIf"],["id","key","name","key","type","text","placeholder","Nome real","formControlName","key",1,"form-control","border-bottom"],["label","Nome real",3,"errors",4,"ngIf"],[1,"col"],["id","default_value","name","default_value","type","text","placeholder","Valor padr\xe3o","formControlName","default_value",1,"form-control","border-bottom"],["label","Valor padr\xe3o",3,"errors",4,"ngIf"],[1,"col-auto"],["href","javascript:",1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-trash-alt"],["label","Nome visual",3,"errors"],["label","Nome real",3,"errors"],["label","Valor padr\xe3o",3,"errors"]],template:function(t,e){1&t&&(h.Rb(0,"div",0),h.Rb(1,"div",1),h.Rb(2,"h3",2),h.Dc(3),h.Qb(),h.Rb(4,"div",3),h.Rb(5,"div",4),h.Rb(6,"div",5),h.Mb(7,"input",6),h.Rb(8,"label",7),h.Dc(9,"Nome visual"),h.Qb(),h.Qb(),h.Bc(10,g,1,1,"input-validations",8),h.Qb(),h.Rb(11,"div",4),h.Rb(12,"div",5),h.Mb(13,"input",9),h.Rb(14,"label",7),h.Dc(15,"Nome real"),h.Qb(),h.Qb(),h.Bc(16,R,1,1,"input-validations",10),h.Qb(),h.Rb(17,"div",11),h.Rb(18,"div",5),h.Mb(19,"input",12),h.Rb(20,"label",7),h.Dc(21,"Valor padr\xe3o"),h.Qb(),h.Qb(),h.Bc(22,x,1,1,"input-validations",13),h.Qb(),h.Rb(23,"div",14),h.Rb(24,"a",15),h.Yb("click",(function(){return e.excluir()})),h.Mb(25,"i",16),h.Qb(),h.Qb(),h.Qb(),h.Qb(),h.Qb()),2&t&&(h.ic("formGroup",e.form),h.zb(3),h.Fc("Par\xe2metro ",e.index+1,""),h.zb(7),h.ic("ngIf",e.form.controls.name.invalid&&e.form.controls.name.touched),h.zb(6),h.ic("ngIf",e.form.controls.key.invalid&&e.form.controls.key.touched),h.zb(6),h.ic("ngIf",e.form.controls.default_value.invalid&&e.form.controls.default_value.touched))},directives:[s.l,s.f,s.b,s.k,s.e,a.l,v.a],styles:[""]}),t}(),Q=r("qT8p"),k=r("z1GS"),_=r("o8Qb"),A=["formElement"];function E(t,e){1&t&&(h.Rb(0,"h1",26),h.Dc(1,"private.external-applications.add.title"),h.Qb())}function w(t,e){1&t&&(h.Rb(0,"h1",26),h.Dc(1,"private.external-applications.add.titleEdit"),h.Qb())}function I(t,e){if(1&t&&h.Mb(0,"input-validations",27),2&t){var r=h.cc();h.ic("errors",r.form.controls.name.errors)}}function S(t,e){if(1&t&&h.Mb(0,"input-validations",28),2&t){var r=h.cc();h.ic("errors",r.form.controls.package.errors)}}function B(t,e){if(1&t){var r=h.Sb();h.Rb(0,"div",29),h.Rb(1,"esm-parameter",30),h.Yb("remover",(function(){h.tc(r);var t=e.index;return h.cc().removerParametro(t)})),h.Qb(),h.Qb()}if(2&t){var a=e.$implicit,i=e.index,n=h.cc();h.zb(1),h.ic("parameter",a)("parameters",n.form.get("parameters").value)("index",i)}}function L(t,e){1&t&&(h.Rb(0,"div",31),h.Dc(1,"Nenhum par\xe2metro cadastrado"),h.Qb())}var P=function(){function t(t,e,r,a,i,n){this._daoService=t,this._toastr=e,this._formBuilder=r,this._loaderService=a,this.route=i,this.activeRoute=n,this.urlExternalApplications=d.g,this.editing=!1,this.loading=!0,this.id=""}return t.prototype.ngOnInit=function(){this.id=this.activeRoute.snapshot.params.id,this.form=this._formBuilder.group({name:this._formBuilder.control("",[s.v.required]),package:this._formBuilder.control("",[s.v.required]),parameters:this._formBuilder.array([])}),this.id?this.fetchData(this.id):this.loading=!1},t.prototype.fetchData=function(t){var e=this;this._loaderService.show(),this._daoService.getObject(this.urlExternalApplications,t).pipe(Object(b.a)((function(){return e._loaderService.hide()}))).subscribe((function(t){e.form.patchValue(Object(l.a)({},t.data)),t.data.parameters.forEach((function(t){e.adicionarParametro(t)}))}))},t.prototype.novoParametro=function(){this.adicionarParametro(new f)},t.prototype.adicionarParametro=function(t){this.parametersFormArray.push(this._formBuilder.control(t))},t.prototype.removerParametro=function(t){this.parametersFormArray.removeAt(t)},Object.defineProperty(t.prototype,"parametersFormArray",{get:function(){return this.form.get("parameters")},enumerable:!1,configurable:!0}),t.prototype.save=function(t){var e=this;this.form.markAllAsTouched();var r=!0;this.parameterComponents.forEach((function(t){t.validateForm()||(r=!1)})),this.form.valid&&r&&(this._loaderService.show(),this.sendRequest().pipe(Object(b.a)((function(){return e._loaderService.hide()}))).subscribe((function(t){t.error?u.a.setErrorsBackend(e.form,t):(e._toastr.success(t.message),e.route.navigate(["/private/external-applications/list"]))}),(function(t){return u.a.setErrorsBackend(e.form,t.data)})))},t.prototype.sendRequest=function(){var t=Object(l.a)({},this.form.value);return this.id?this._daoService.putObject(this.urlExternalApplications+this.id,t):this._daoService.postObject(this.urlExternalApplications,t)},t.\u0275fac=function(e){return new(e||t)(h.Lb(m.a),h.Lb(Q.b),h.Lb(s.d),h.Lb(p.a),h.Lb(o.c),h.Lb(o.a))},t.\u0275cmp=h.Fb({type:t,selectors:[["esm-external-applications-add"]],viewQuery:function(t,e){var r;1&t&&(h.Jc(A,!0),h.Jc(y,!0)),2&t&&(h.qc(r=h.Zb())&&(e.formElement=r.first),h.qc(r=h.Zb())&&(e.parameterComponents=r))},decls:41,vars:14,consts:[[1,"mx-auto","mt-4","card","card-lg","w-main","container-fluid"],[1,"row"],[1,"p-0","mx-auto","bg-white","rounded","col-12","p-xl-2"],[1,"container-fluid"],[1,"col-12"],["class","h4","translate","",4,"ngIf"],["focusInvalidInput","",3,"formGroup","ngSubmit"],["formElement",""],[1,"col-6","form-group"],[1,"form-label-group"],["id","name","name","name","type","text","formControlName","name",1,"form-control","border-bottom",3,"placeholder"],["for","text","translate",""],["label","Nome",3,"errors",4,"ngIf"],["id","package","name","package","type","text","formControlName","package",1,"form-control","border-bottom",3,"placeholder","readonly"],["for","email","translate",""],["label","Package",3,"errors",4,"ngIf"],[1,"row","mt-4","mb-5"],[1,"col-12","form-group"],[1,"h6"],["class","mb-2",4,"ngFor","ngForOf"],["class","alert alert-info",4,"ngIf"],["href","javascript:",1,"btn","btn-white","btn-shadow",3,"click"],[1,"row","justify-content-end"],[1,"col-auto"],["routerLink","/private/external-applications/list",1,"btn","btn-success","btn-lg","btn-shadow"],["type","submit","name","saveButton","translate","",1,"btn","btn-primary","btn-lg","btn-shadow","min-100"],["translate","",1,"h4"],["label","Nome",3,"errors"],["label","Package",3,"errors"],[1,"mb-2"],[3,"parameter","parameters","index","remover"],[1,"alert","alert-info"]],template:function(t,e){1&t&&(h.Rb(0,"div",0),h.Rb(1,"div",1),h.Rb(2,"section",2),h.Rb(3,"div",3),h.Rb(4,"div",1),h.Rb(5,"div",4),h.Bc(6,E,2,0,"h1",5),h.Bc(7,w,2,0,"h1",5),h.Qb(),h.Qb(),h.Rb(8,"form",6,7),h.Yb("ngSubmit",(function(t){return e.save(t)})),h.Rb(10,"div",1),h.Rb(11,"div",8),h.Rb(12,"div",9),h.Mb(13,"input",10),h.dc(14,"translate"),h.Rb(15,"label",11),h.Dc(16,"private.external-applications.add.name"),h.Qb(),h.Qb(),h.Bc(17,I,1,1,"input-validations",12),h.Qb(),h.Qb(),h.Rb(18,"div",1),h.Rb(19,"div",8),h.Rb(20,"div",9),h.Mb(21,"input",13),h.dc(22,"translate"),h.Rb(23,"label",14),h.Dc(24,"private.external-applications.add.package"),h.Qb(),h.Qb(),h.Bc(25,S,1,1,"input-validations",15),h.Qb(),h.Qb(),h.Rb(26,"div",16),h.Rb(27,"div",17),h.Rb(28,"h3",18),h.Dc(29,"Par\xe2metros"),h.Qb(),h.Bc(30,B,2,3,"div",19),h.Bc(31,L,2,0,"div",20),h.Rb(32,"a",21),h.Yb("click",(function(){return e.novoParametro()})),h.Dc(33,"Adicionar par\xe2metro"),h.Qb(),h.Qb(),h.Qb(),h.Rb(34,"div",22),h.Rb(35,"div",23),h.Rb(36,"a",24),h.Dc(37,"VOLTAR"),h.Qb(),h.Qb(),h.Rb(38,"div",23),h.Rb(39,"button",25),h.Dc(40,"SALVAR"),h.Qb(),h.Qb(),h.Qb(),h.Qb(),h.Qb(),h.Qb(),h.Qb(),h.Qb()),2&t&&(h.zb(6),h.ic("ngIf",!e.id),h.zb(1),h.ic("ngIf",e.id),h.zb(1),h.ic("formGroup",e.form),h.zb(5),h.jc("placeholder",h.ec(14,10,"private.external-applications.add.name")),h.zb(4),h.ic("ngIf",e.form.controls.name.invalid&&e.form.controls.name.touched),h.zb(4),h.jc("placeholder",h.ec(22,12,"private.external-applications.add.package")),h.ic("readonly",e.editing),h.zb(4),h.ic("ngIf",e.form.controls.package.invalid&&e.form.controls.package.touched),h.zb(5),h.ic("ngForOf",e.form.get("parameters").value),h.zb(1),h.ic("ngIf",0==e.form.get("parameters").value.length))},directives:[a.l,s.x,s.l,k.a,s.f,s.b,s.k,s.e,_.b,a.k,o.e,v.a,y],pipes:[_.e],encapsulation:2}),t}(),O=r("tk/3"),z=r("CbkN"),N=r("K9Ia"),j=r("Gi3i"),D=r("ad02"),M=r("15JJ"),T=r("y9qN"),C=r("ZJS2"),F=r("kGPy"),q=r("qSrz"),V=r("+1jO");function G(t,e){1&t&&(h.Rb(0,"div",13),h.Dc(1,"Nenhuma aplica\xe7\xe3o externa encontrada"),h.Qb())}var J=function(t){return["/private/external-applications/edit",t]};function X(t,e){if(1&t&&(h.Rb(0,"a",15),h.Mb(1,"i",21),h.Qb()),2&t){var r=h.cc(2).$implicit;h.ic("routerLink",h.lc(1,J,r.id))}}function Y(t,e){if(1&t){var r=h.Sb();h.Rb(0,"a",22),h.Rb(1,"i",23),h.Yb("click",(function(){h.tc(r);var t=h.cc(2).$implicit;return h.cc().deleteExternalApp(t)})),h.Qb(),h.Qb()}}var Z=function(){return["EXTERNAL_APP_EDIT"]},$=function(){return["EXTERNAL_APP_DELETE"]};function K(t,e){1&t&&(h.Rb(0,"td",17),h.Rb(1,"div",18),h.Bc(2,X,2,3,"a",19),h.Bc(3,Y,2,0,"a",20),h.Qb(),h.Qb()),2&t&&(h.zb(2),h.ic("ngxPermissionsOnly",h.kc(2,Z)),h.zb(1),h.ic("ngxPermissionsOnly",h.kc(3,$)))}var W=function(){return["EXTERNAL_APP_EDIT","EXTERNAL_APP_DELETE"]};function H(t,e){if(1&t&&(h.Rb(0,"tr"),h.Rb(1,"td",14),h.Rb(2,"a",15),h.Dc(3),h.Qb(),h.Qb(),h.Bc(4,K,4,4,"td",16),h.Qb()),2&t){var r=e.$implicit;h.zb(2),h.ic("routerLink",h.lc(4,J,r.id)),h.zb(1),h.Gc(" ",r.name," - ",r.package," "),h.zb(1),h.ic("ngxPermissionsOnly",h.kc(6,W))}}function U(t,e){1&t&&(h.Rb(0,"tr",25),h.Rb(1,"td"),h.Mb(2,"div",26),h.Qb(),h.Rb(3,"td",17),h.Mb(4,"div",26),h.Qb(),h.Qb())}var tt=function(){return[1,2,3,4,5,6,7,8,9,10]};function et(t,e){1&t&&h.Bc(0,U,5,0,"tr",24),2&t&&h.ic("ngForOf",h.kc(1,tt))}function rt(t,e){if(1&t){var r=h.Sb();h.Rb(0,"pagination",27),h.Yb("ngModelChange",(function(t){return h.tc(r),h.cc().page=t}))("pageChanged",(function(t){return h.tc(r),h.cc().handleChange(t)})),h.Qb()}if(2&t){var a=h.cc();h.ic("totalItems",a.total)("ngModel",a.page)("disabled",!a.total)("maxSize",15)("boundaryLinks",!0)}}function at(t,e){1&t&&(h.Rb(0,"div"),h.Mb(1,"div",28),h.Mb(2,"div",28),h.Mb(3,"div",28),h.Qb())}var it=function(){return["/private/external-applications/add"]},nt=[{path:"list",component:function(){function t(t,e,r,a,i){var n=this;this.daoService=t,this._modalService=e,this._loaderService=r,this._swalService=a,this._toastr=i,this.urlExternalApplications=d.g,this.loading=!0,this.page=1,this.search=new N.a,this.searchTerm="",this.search.pipe(Object(j.a)(300),Object(D.a)(),Object(M.a)((function(){return n.getExternalApplications()}))).subscribe((function(t){n.loading=!1,n.setExternalApplications(t)}))}return t.prototype.handleChange=function(t,e){void 0===e&&(e=!1),e&&(this.total=null,this.searchTerm=t,this.page=1),this.externalApplications=[],this.loading=!0,this.search.next(t)},t.prototype.ngOnInit=function(){this.search.next("")},t.prototype.getExternalApplications=function(){var t,e=(new O.f).set("search",this.searchTerm).set("page",null===(t=this.page)||void 0===t?void 0:t.toString()).set("orderBy","created_at").set("sortedBy","desc");return this.daoService.getObjects(this.urlExternalApplications,e)},t.prototype.setExternalApplications=function(t){this.externalApplications=t.data,this.total=t.meta.pagination.total,this.pageSize=t.meta.pagination.per_page},t.prototype.deleteExternalApp=function(t){var e=this;this._swalService.confirmDelete(t.name+"-"+t.package,"Aplica\xe7\xe3o Externa").then((function(r){r.isConfirmed&&(e._loaderService.show(),e.daoService.deleteObject(e.urlExternalApplications,t.id.toString()).pipe(Object(b.a)((function(){return e._loaderService.hide()}))).subscribe((function(t){e.handleChange(t),e._toastr.success(t.message)})))}))},t.\u0275fac=function(e){return new(e||t)(h.Lb(m.a),h.Lb(z.b),h.Lb(p.a),h.Lb(T.a),h.Lb(Q.b))},t.\u0275cmp=h.Fb({type:t,selectors:[["esm-external-application-list"]],features:[h.yb([a.e])],decls:19,vars:14,consts:[[1,"px-5","mx-auto","mt-4","mb-5","card","card-lg","w-main"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],["translate","",1,"h4"],["translate","",1,"btn","btn-link","align-self-end",3,"routerLink"],[3,"doSearch"],[3,"title","subtitle","total"],["class","alert alert-info",4,"ngIf"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"ngIf"],[1,"p-2"],["name","page",3,"totalItems","ngModel","disabled","maxSize","boundaryLinks","ngModelChange","pageChanged",4,"ngIf"],[4,"ngIf"],[1,"alert","alert-info"],["scope","row"],[3,"routerLink"],["width","100",4,"ngxPermissionsOnly"],["width","100"],[1,"mx-3","d-flex","align-items-center"],[3,"routerLink",4,"ngxPermissionsOnly"],["href","javascript:",4,"ngxPermissionsOnly"],[1,"mr-3","fas","fa-edit","fa-lg","text-primary"],["href","javascript:"],[1,"fas","fa-trash-alt","fa-lg","text-primary",3,"click"],["class","loading",4,"ngFor","ngForOf"],[1,"loading"],[1,"loader-bg"],["name","page",3,"totalItems","ngModel","disabled","maxSize","boundaryLinks","ngModelChange","pageChanged"],[1,"loader-bg","w-25"]],template:function(t,e){1&t&&(h.Rb(0,"main",0),h.Rb(1,"div",1),h.Rb(2,"h1",2),h.Dc(3,"private.external-applications.list.pageTitle"),h.Qb(),h.Rb(4,"a",3),h.Dc(5,"private.external-applications.list.addButton"),h.Qb(),h.Qb(),h.Rb(6,"esm-search",4),h.Yb("doSearch",(function(t){return e.handleChange(t,!0)})),h.Qb(),h.Rb(7,"form"),h.Mb(8,"esm-list-header",5),h.dc(9,"translate"),h.dc(10,"translate"),h.Bc(11,G,2,0,"div",6),h.Rb(12,"table",7),h.Rb(13,"tbody"),h.Bc(14,H,5,7,"tr",8),h.Bc(15,et,1,2,"ng-template",9),h.Qb(),h.Qb(),h.Rb(16,"div",10),h.Bc(17,rt,1,5,"pagination",11),h.Bc(18,at,4,0,"div",12),h.Qb(),h.Qb(),h.Qb()),2&t&&(h.zb(4),h.ic("routerLink",h.kc(13,it)),h.zb(4),h.ic("title",h.ec(9,9,"private.external-applications.list.listTitle"))("subtitle",h.ec(10,11,"private.external-applications.list.totalNumber"))("total",e.total),h.zb(3),h.ic("ngIf",!e.loading&&0==e.externalApplications.length),h.zb(3),h.ic("ngForOf",e.externalApplications),h.zb(1),h.ic("ngIf",e.loading),h.zb(2),h.ic("ngIf",e.total),h.zb(1),h.ic("ngIf",null==e.total))},directives:[_.b,o.e,C.a,s.x,s.l,s.m,F.a,a.l,a.k,q.a,V.a,s.k,s.n],pipes:[_.e],encapsulation:2}),t}(),canActivate:[c.a],data:{permissions:{only:["EXTERNAL_APP_LIST"]}}},{path:"add",component:P,canActivate:[c.a],data:{permissions:{only:["EXTERNAL_APP_ADD"]}}},{path:"edit/:id",component:P,canActivate:[c.a],data:{permissions:{only:["EXTERNAL_APP_EDIT"]}}},{path:"**",redirectTo:"/private",pathMatch:"full"}],ot=function(){function t(){}return t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({factory:function(e){return new(e||t)},imports:[[o.f.forChild(nt)],o.f]}),t}(),ct=function(){function t(){}return t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({factory:function(e){return new(e||t)},imports:[[n.a,i.a,ot,a.c],n.a]}),t}()}}]);