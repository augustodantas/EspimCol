(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6Bye":function(e,t,i){"use strict";i.r(t),i.d(t,"RolesModule",(function(){return U}));var r=i("ofXK"),n=i("j1ZV"),o=i("Awto"),s=i("tyNb"),a=i("0rl9"),c=i("mrSG"),l=i("3Pt+"),b=i("2WpN"),d=i("nWBu"),u=i("5dVO"),f=i("eGxY"),m=i("P9qh"),h=function(){return function(e){void 0===e&&(e={}),this.name="",this.id=e.id,this.name=e.name}}(),p=i("fXoL"),v=i("qT8p"),g=i("z1GS"),R=i("o8Qb"),y=i("n8HC"),Q=["formElement"];function O(e,t){1&e&&(p.Rb(0,"h1",22),p.Dc(1,"private.roles.add.title"),p.Qb())}function k(e,t){1&e&&(p.Rb(0,"h1",22),p.Dc(1,"private.roles.add.titleEdit"),p.Qb())}function S(e,t){if(1&e&&p.Mb(0,"input-validations",23),2&e){var i=p.cc();p.ic("errors",i.form.controls.name.errors)}}function w(e,t){if(1&e){var i=p.Sb();p.Rb(0,"div",24),p.Rb(1,"input",25),p.Yb("click",(function(e){p.tc(i);var r=t.$implicit;return p.cc().checkboxHandler(e.target.checked,r)})),p.Qb(),p.Rb(2,"label",26),p.Dc(3),p.Qb(),p.Qb()}if(2&e){var r=t.$implicit,n=p.cc();p.zb(1),p.ic("id","permission"+r.id)("checked",n.isChecked(r)),p.zb(1),p.ic("for","permission"+r.id),p.zb(1),p.Ec(r.name)}}var x=function(){function e(e,t,i,r,n,o){this._daoService=e,this._toastr=t,this._formBuilder=i,this._loaderService=r,this.route=n,this.activeRoute=o,this.url=d.p,this.urlPermissions=d.m,this.permissions=[],this.editing=!1,this.loading=!0,this.id=""}return e.prototype.ngOnInit=function(){this.id=this.activeRoute.snapshot.params.id,this.form=this._formBuilder.group({name:this._formBuilder.control("",[l.v.required]),permissions:this._formBuilder.array([])}),this.id?this.fetchData(this.id):this.loading=!1,this.getPermissions()},e.prototype.fetchData=function(e){var t=this;this._loaderService.show(),this._daoService.getObject(this.url,e).pipe(Object(b.a)((function(){return t._loaderService.hide()}))).subscribe((function(e){t.form.patchValue(Object(c.a)({},e.data)),e.data.permissions.forEach((function(e){return t.checkboxHandler(!0,new h(e))}))}))},e.prototype.save=function(e){var t=this;this.form.markAllAsTouched(),this.form.valid&&(this._loaderService.show(),this.sendRequest().pipe(Object(b.a)((function(){return t._loaderService.hide()}))).subscribe((function(e){e.error?f.a.setErrorsBackend(t.form,e):(t._toastr.success(e.message),t.route.navigate(["/private/roles/list"]))}),(function(e){return f.a.setErrorsBackend(t.form,e.data)})))},e.prototype.sendRequest=function(){var e=Object(c.a)({},this.form.value);return e.permissions=this.permissionIdArray,this.id?this._daoService.putObject(this.url+this.id,e):this._daoService.postObject(this.url,e)},e.prototype.checkboxHandler=function(e,t){if(e)this.permissionFormArray.push(this._formBuilder.control(t));else{var i=this.permissionIdArray.indexOf(t.id);this.permissionFormArray.removeAt(i)}},Object.defineProperty(e.prototype,"permissionIdArray",{get:function(){return this.permissionFormArray.value.map((function(e){return e.id}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"permissionFormArray",{get:function(){return this.form.controls.permissions},enumerable:!1,configurable:!0}),e.prototype.getPermissions=function(){var e=this;this._daoService.getObjects(this.urlPermissions).subscribe((function(t){e.permissions=t.data}))},e.prototype.isChecked=function(e){return!!this.permissionFormArray.value.find((function(t){return t.id==e.id}))},e.\u0275fac=function(t){return new(t||e)(p.Lb(m.a),p.Lb(v.b),p.Lb(l.d),p.Lb(u.a),p.Lb(s.c),p.Lb(s.a))},e.\u0275cmp=p.Fb({type:e,selectors:[["esm-roles-add"]],viewQuery:function(e,t){var i;1&e&&p.Jc(Q,!0),2&e&&p.qc(i=p.Zb())&&(t.formElement=i.first)},decls:32,vars:8,consts:[[1,"mx-auto","mt-4","card","card-lg","w-main","container-fluid"],[1,"row"],[1,"p-0","mx-auto","bg-white","rounded","col-12","p-xl-2"],[1,"container-fluid"],[1,"col-12"],["class","h4","translate","",4,"ngIf"],["focusInvalidInput","",3,"formGroup","ngSubmit"],["formElement",""],[1,"col-6","form-group"],[1,"form-label-group"],["id","name","name","name","type","text","formControlName","name",1,"form-control","border-bottom",3,"placeholder"],["for","text","translate",""],["label","Nome",3,"errors",4,"ngIf"],[1,"row","mb-5"],[1,"col-12","form-group"],[1,"h6"],[1,"card","card-body"],["class","col-3 d-flex align-items-center overflow-hidden text-nowrap",4,"ngFor","ngForOf"],[1,"row","justify-content-end"],[1,"col-auto"],["routerLink","/private/roles/list",1,"btn","btn-success","btn-lg","btn-shadow"],["type","submit","name","saveButton","translate","",1,"btn","btn-primary","btn-lg","btn-shadow","min-100"],["translate","",1,"h4"],["label","Nome",3,"errors"],[1,"col-3","d-flex","align-items-center","overflow-hidden","text-nowrap"],["type","checkbox",3,"id","checked","click"],[1,"m-0",3,"for"]],template:function(e,t){1&e&&(p.Rb(0,"div",0),p.Rb(1,"div",1),p.Rb(2,"section",2),p.Rb(3,"div",3),p.Rb(4,"div",1),p.Rb(5,"div",4),p.Bc(6,O,2,0,"h1",5),p.Bc(7,k,2,0,"h1",5),p.Qb(),p.Qb(),p.Rb(8,"form",6,7),p.Yb("ngSubmit",(function(e){return t.save(e)})),p.Rb(10,"div",1),p.Rb(11,"div",8),p.Rb(12,"div",9),p.Mb(13,"input",10),p.dc(14,"translate"),p.Rb(15,"label",11),p.Dc(16,"private.roles.add.name"),p.Qb(),p.Qb(),p.Bc(17,S,1,1,"input-validations",12),p.Qb(),p.Qb(),p.Rb(18,"div",13),p.Rb(19,"div",14),p.Rb(20,"h3",15),p.Dc(21,"Permiss\xf5es"),p.Qb(),p.Rb(22,"div",16),p.Rb(23,"div",1),p.Bc(24,w,4,4,"div",17),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Rb(25,"div",18),p.Rb(26,"div",19),p.Rb(27,"a",20),p.Dc(28,"VOLTAR"),p.Qb(),p.Qb(),p.Rb(29,"div",19),p.Rb(30,"button",21),p.Dc(31,"SALVAR"),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb()),2&e&&(p.zb(6),p.ic("ngIf",!t.id),p.zb(1),p.ic("ngIf",t.id),p.zb(1),p.ic("formGroup",t.form),p.zb(5),p.jc("placeholder",p.ec(14,6,"private.roles.add.name")),p.zb(4),p.ic("ngIf",t.form.controls.name.invalid&&t.form.controls.name.touched),p.zb(7),p.ic("ngForOf",t.permissions))},directives:[r.l,l.x,l.l,g.a,l.f,l.b,l.k,l.e,R.b,r.k,s.e,y.a],pipes:[R.e],encapsulation:2}),e}(),_=i("tk/3"),L=i("K9Ia"),B=i("Gi3i"),E=i("ad02"),j=i("15JJ"),D=i("y9qN"),I=i("qSrz"),z=i("ZJS2"),A=i("kGPy"),P=function(){return["/private/roles/add"]};function F(e,t){1&e&&(p.Rb(0,"a",10),p.Dc(1,"private.roles.list.addButton"),p.Qb()),2&e&&p.ic("routerLink",p.kc(1,P))}function T(e,t){1&e&&(p.Rb(0,"div",11),p.Dc(1,"Nenhum grupo encontrado"),p.Qb())}var C=function(e){return["/private/roles/edit",e]};function q(e,t){if(1&e&&(p.Rb(0,"a",13),p.Mb(1,"i",19),p.Qb()),2&e){var i=p.cc(2).$implicit;p.ic("routerLink",p.lc(1,C,i.id))}}function J(e,t){if(1&e){var i=p.Sb();p.Rb(0,"a",20),p.Rb(1,"i",21),p.Yb("click",(function(){p.tc(i);var e=p.cc(2).$implicit;return p.cc().deleteRole(e)})),p.Qb(),p.Qb()}}var M=function(){return["ROLES_EDIT"]},N=function(){return["ROLES_DELETE"]};function G(e,t){1&e&&(p.Rb(0,"td",15),p.Rb(1,"div",16),p.Bc(2,q,2,3,"a",17),p.Bc(3,J,2,0,"a",18),p.Qb(),p.Qb()),2&e&&(p.zb(2),p.ic("ngxPermissionsOnly",p.kc(2,M)),p.zb(1),p.ic("ngxPermissionsOnly",p.kc(3,N)))}var V=function(){return["ROLES_EDIT","ROLES_DELETE"]};function Y(e,t){if(1&e&&(p.Rb(0,"tr"),p.Rb(1,"td",12),p.Rb(2,"a",13),p.Dc(3),p.Qb(),p.Qb(),p.Bc(4,G,4,4,"td",14),p.Qb()),2&e){var i=t.$implicit;p.zb(2),p.ic("routerLink",p.lc(3,C,i.id)),p.zb(1),p.Fc(" ",i.name," "),p.zb(1),p.ic("ngxPermissionsOnly",p.kc(5,V))}}function $(e,t){1&e&&(p.Rb(0,"tr",23),p.Rb(1,"td"),p.Mb(2,"div",24),p.Qb(),p.Rb(3,"td",15),p.Mb(4,"div",24),p.Qb(),p.Qb())}var H=function(){return[1,2,3,4,5,6,7,8,9,10]};function Z(e,t){1&e&&p.Bc(0,$,5,0,"tr",22),2&e&&p.ic("ngForOf",p.kc(1,H))}var K=function(){return["ROLES_ADD"]},W=[{path:"list",canActivate:[a.a],data:{permissions:{only:["ROLES_LIST"]}},component:function(){function e(e,t,i,r){var n=this;this.daoService=e,this._loaderService=t,this._swalService=i,this._toastr=r,this.url=d.p,this.loading=!0,this.search=new L.a,this.searchTerm="",this.search.pipe(Object(B.a)(300),Object(E.a)(),Object(j.a)((function(){return n.getRoles()}))).subscribe((function(e){n.loading=!1,n.setRoles(e)}))}return e.prototype.handleChange=function(e,t){void 0===t&&(t=!1),t&&(this.searchTerm=e),this.roles=[],this.loading=!0,this.search.next(e)},e.prototype.ngOnInit=function(){this.search.next("")},e.prototype.getRoles=function(){var e=(new _.f).set("search",this.searchTerm).set("orderBy","created_at").set("sortedBy","desc");return this.daoService.getObjects(this.url,e)},e.prototype.setRoles=function(e){this.roles=e.data},e.prototype.deleteRole=function(e){var t=this;this._swalService.confirmDelete(e.name,"grupo").then((function(i){i.isConfirmed&&(t._loaderService.show(),t.daoService.deleteObject(t.url,e.id.toString()).pipe(Object(b.a)((function(){return t._loaderService.hide()}))).subscribe((function(e){t.handleChange(e),t._toastr.success(e.message)})))}))},e.\u0275fac=function(t){return new(t||e)(p.Lb(m.a),p.Lb(u.a),p.Lb(D.a),p.Lb(v.b))},e.\u0275cmp=p.Fb({type:e,selectors:[["esm-roles-list"]],features:[p.yb([r.e])],decls:15,vars:11,consts:[[1,"px-5","mx-auto","mt-4","mb-5","card","card-lg","w-main"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],["translate","",1,"h4"],["class","btn btn-link align-self-end","translate","",3,"routerLink",4,"ngxPermissionsOnly"],[3,"doSearch"],[3,"title","subtitle"],["class","alert alert-info",4,"ngIf"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"ngIf"],["translate","",1,"btn","btn-link","align-self-end",3,"routerLink"],[1,"alert","alert-info"],["scope","row"],[3,"routerLink"],["width","100",4,"ngxPermissionsOnly"],["width","100"],[1,"mx-3","d-flex","align-items-center"],[3,"routerLink",4,"ngxPermissionsOnly"],["href","javascript:",4,"ngxPermissionsOnly"],[1,"mr-3","fas","fa-edit","fa-lg","text-primary"],["href","javascript:"],[1,"fas","fa-trash-alt","fa-lg","text-primary",3,"click"],["class","loading",4,"ngFor","ngForOf"],[1,"loading"],[1,"loader-bg"]],template:function(e,t){1&e&&(p.Rb(0,"main",0),p.Rb(1,"div",1),p.Rb(2,"h1",2),p.Dc(3,"private.roles.list.pageTitle"),p.Qb(),p.Bc(4,F,2,2,"a",3),p.Qb(),p.Rb(5,"esm-search",4),p.Yb("doSearch",(function(e){return t.handleChange(e,!0)})),p.Qb(),p.Rb(6,"form"),p.Mb(7,"esm-list-header",5),p.dc(8,"translate"),p.dc(9,"translate"),p.Bc(10,T,2,0,"div",6),p.Rb(11,"table",7),p.Rb(12,"tbody"),p.Bc(13,Y,5,6,"tr",8),p.Bc(14,Z,1,2,"ng-template",9),p.Qb(),p.Qb(),p.Qb(),p.Qb()),2&e&&(p.zb(4),p.ic("ngxPermissionsOnly",p.kc(10,K)),p.zb(3),p.ic("title",p.ec(8,6,"private.roles.list.listTitle"))("subtitle",p.ec(9,8,"private.roles.list.totalNumber")),p.zb(3),p.ic("ngIf",!t.loading&&0==t.roles.length),p.zb(3),p.ic("ngForOf",t.roles),p.zb(1),p.ic("ngIf",t.loading))},directives:[R.b,I.a,z.a,l.x,l.l,l.m,A.a,r.l,r.k,s.e],pipes:[R.e],encapsulation:2}),e}()},{path:"add",canActivate:[a.a],data:{permissions:{only:["ROLES_ADD"]}},component:x},{path:"edit/:id",canActivate:[a.a],data:{permissions:{only:["ROLES_EDIT"]}},component:x},{path:"**",redirectTo:"/private",pathMatch:"full"}],X=function(){function e(){}return e.\u0275mod=p.Jb({type:e}),e.\u0275inj=p.Ib({factory:function(t){return new(t||e)},imports:[[s.f.forChild(W)],s.f]}),e}(),U=function(){function e(){}return e.\u0275mod=p.Jb({type:e}),e.\u0275inj=p.Ib({factory:function(t){return new(t||e)},imports:[[o.a,n.a,X,r.c],o.a]}),e}()}}]);