(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{XXN5:function(e,t,n){"use strict";n.r(t),n.d(t,"ProcesoAnalisisModule",function(){return Y});var i=n("hbEq"),c=n("tyNb"),o=n("wtY+"),a=n("ADQh"),s=n("vkgz"),r=n("eIep"),d=n("pLZG"),b=n("/Po0"),l=n("exUl"),p=n("fXoL"),u=n("qZY9"),H=n("7zfz"),m=n("sYmb"),h=n("YHTv"),v=n("jIHw"),f=n("rEr+");const A=["procesoAnalisisTable"];function S(e,t){1&e&&(p.Hc(0,"\n      "),p.Sb(1,"tr"),p.Hc(2,"\n        "),p.Hc(3,"\n        "),p.Sb(4,"th",8),p.Hc(5,"\n          "),p.Nb(6,"span",9),p.Hc(7,"\n        "),p.Rb(),p.Hc(8,"\n        "),p.Sb(9,"th",8),p.Hc(10,"\n          "),p.Sb(11,"span",10),p.Hc(12,"Cod Proceso"),p.Rb(),p.Hc(13,"\n        "),p.Rb(),p.Hc(14,"\n        "),p.Sb(15,"th",11),p.Hc(16,"\n          "),p.Sb(17,"span",12),p.Hc(18,"Cod Estado"),p.Rb(),p.Hc(19,"\n        "),p.Rb(),p.Hc(20,"\n        "),p.Nb(21,"th",13),p.Hc(22,"\n      "),p.Rb(),p.Hc(23,"\n    "))}const g=function(e){return["/proceso-analisis",e,"view"]},y=function(e){return["/proceso-analisis",e,"edit"]};function R(e,t){if(1&e){const e=p.Tb();p.Hc(0,"\n      "),p.Sb(1,"tr",14),p.Hc(2,"\n        "),p.Hc(3,"\n        "),p.Sb(4,"td"),p.Hc(5),p.Rb(),p.Hc(6,"\n        "),p.Sb(7,"td"),p.Hc(8),p.Rb(),p.Hc(9,"\n        "),p.Sb(10,"td",15),p.Hc(11),p.Rb(),p.Hc(12,"\n        "),p.Sb(13,"td"),p.Hc(14,"\n          "),p.Sb(15,"div",16),p.Hc(16,"\n            "),p.Sb(17,"p-button",17),p.Hc(18,"\n            "),p.Rb(),p.Hc(19,"\n            "),p.Sb(20,"p-button",18),p.Hc(21,"\n            "),p.Rb(),p.Hc(22,"\n            "),p.Sb(23,"p-button",19),p.cc("click",function(){p.yc(e);const n=t.$implicit;return p.ec().delete(n.id)}),p.Hc(24,"\n            "),p.Rb(),p.Hc(25,"\n          "),p.Rb(),p.Hc(26,"\n        "),p.Rb(),p.Hc(27,"\n      "),p.Rb(),p.Hc(28,"\n    ")}if(2&e){const e=t.$implicit;p.Ab(5),p.Ic(e.nombre),p.Ab(3),p.Ic(e.codProceso),p.Ab(2),p.mc("cdaTranslate","webCedaApp.EstadoProceso."+e.codEstado),p.Ab(1),p.Jc("\n          ",e.codEstado,"\n        "),p.Ab(6),p.lc("routerLink",p.pc(6,g,e.id)),p.Ab(3),p.lc("routerLink",p.pc(8,y,e.id))}}const w=function(){return["/proceso-analisis/new"]};let T=(()=>{class e{constructor(e,t,n,i,c,o){this.procesoAnalisisService=e,this.messageService=t,this.activatedRoute=n,this.router=i,this.confirmationService=c,this.translateService=o,this.filtersDetails={id:{type:"number"},nombre:{type:"string"},codProceso:{type:"string"},codEstado:{type:"string"}},this.itemsPerPage=b.a,this.loading=!0}ngOnInit(){this.activatedRoute.queryParams.pipe(Object(s.a)(e=>Object(l.b)(this.procesoAnalisisTable,e,this.filtersDetails)),Object(s.a)(()=>this.loading=!0),Object(r.a)(()=>this.procesoAnalisisService.query(Object(l.d)(this.procesoAnalisisTable.createLazyLoadMetadata(),void 0,this.filtersDetails))),Object(d.a)(e=>e.ok)).subscribe(e=>{this.paginateProcesoAnalises(e.body,e.headers),this.loading=!1},e=>{this.onError(e.message),console.error(e),this.loading=!1})}get filters(){return this.procesoAnalisisTable.filters}onLazyLoadEvent(e){const t=Object(l.c)(e,this.filtersDetails);this.router.navigate(["/proceso-analisis"],{queryParams:t})}delete(e){this.confirmationService.confirm({header:this.translateService.instant("entity.delete.title"),message:this.translateService.instant("webCedaApp.procesoAnalisis.delete.question",{id:e}),accept:()=>{this.procesoAnalisisService.delete(e).subscribe(()=>{this.router.navigate(["/proceso-analisis"],{queryParams:{r:Date.now()},queryParamsHandling:"merge"})})}})}trackId(e,t){return t.id}paginateProcesoAnalises(e,t){this.totalItems=Number(t.get("X-Total-Count")),this.procesoAnalises=e}onError(e){this.messageService.add({severity:"error",summary:e})}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(u.a),p.Mb(H.h),p.Mb(c.a),p.Mb(c.d),p.Mb(H.b),p.Mb(m.e))},e.\u0275cmp=p.Gb({type:e,selectors:[["cda-proceso-analisis"]],viewQuery:function(e,t){if(1&e&&p.Nc(A,3),2&e){let e;p.wc(e=p.dc())&&(t.procesoAnalisisTable=e.first)}},decls:24,vars:14,consts:[[2,"padding-left","120px","padding-right","120px"],["id","page-heading","data-cy","ProcesoAnalisisHeading",2,"font-weight","bold"],["cdaTranslate","webCedaApp.procesoAnalisis.home.title"],["id","jh-create-entity","icon","pi pi-plus","iconPos","left","data-cy","entityCreateButton",1,"float-right","jh-create-entity","create-proceso-analisis",3,"routerLink","label"],["sortMode","multiple",3,"value","rowTrackBy","responsive","lazy","rows","totalRecords","loading","lazyLoadOnInit","paginator","onLazyLoad"],["procesoAnalisisTable",""],["pTemplate","header"],["pTemplate","body"],[2,"width","220px"],["cdaTranslate","webCedaApp.procesoAnalisis.nombre"],["cdaTranslate","webCedaApp.procesoAnalisis.codProceso"],[1,"p-text-center",2,"width","220px"],["cdaTranslate","webCedaApp.procesoAnalisis.codEstado"],[2,"width","124px"],["data-cy","entityTable"],[1,"p-text-center",3,"cdaTranslate"],[1,"btn-group","flex-btn-group-container"],["type","submit","icon","pi pi-eye","styleClass","p-button-info","data-cy","entityDetailsButton",3,"routerLink"],["type","submit","icon","pi pi-pencil","styleClass","p-button-warning","data-cy","entityEditButton",3,"routerLink"],["type","submit","icon","pi pi-times","styleClass","p-button-danger","data-cy","entityDeleteButton",3,"click"]],template:function(e,t){1&e&&(p.Sb(0,"div",0),p.Hc(1,"\n  "),p.Sb(2,"h2",1),p.Hc(3,"\n    "),p.Nb(4,"br"),p.Hc(5,"\n    "),p.Nb(6,"span",2),p.Hc(7,"\n    "),p.Sb(8,"p-button",3),p.fc(9,"translate"),p.Hc(10,"\n    "),p.Rb(),p.Hc(11,"\n  "),p.Rb(),p.Hc(12,"\n  "),p.Nb(13,"br"),p.Hc(14,"\n  "),p.Sb(15,"p-table",4,5),p.cc("onLazyLoad",function(e){return t.onLazyLoadEvent(e)}),p.Hc(17,"\n    "),p.Fc(18,S,24,0,"ng-template",6),p.Hc(19,"\n    "),p.Fc(20,R,29,10,"ng-template",7),p.Hc(21,"\n  "),p.Rb(),p.Hc(22,"\n"),p.Rb(),p.Hc(23,"\n")),2&e&&(p.Ab(8),p.lc("routerLink",p.oc(13,w))("label",p.gc(9,11,"webCedaApp.procesoAnalisis.home.createLabel")),p.Ab(7),p.lc("value",t.procesoAnalises)("rowTrackBy",t.trackId)("responsive",!0)("lazy",!0)("rows",t.itemsPerPage)("totalRecords",t.totalItems)("loading",t.loading)("lazyLoadOnInit",!1)("paginator",!0))},directives:[h.a,v.a,c.e,f.c,H.j],pipes:[m.d],encapsulation:2}),e})();var E=n("ofXK");const C=function(e){return["/proceso-analisis",e,"edit"]};function P(e,t){if(1&e){const e=p.Tb();p.Sb(0,"div"),p.Hc(1,"\n      "),p.Sb(2,"h2",3),p.Hc(3,"\n        "),p.Sb(4,"span",4),p.Hc(5,"Proceso Analisis"),p.Rb(),p.Hc(6),p.Rb(),p.Hc(7,"\n\n      "),p.Nb(8,"hr"),p.Hc(9,"\n      "),p.Sb(10,"dl",5),p.Hc(11,"\n        "),p.Sb(12,"dt"),p.Sb(13,"span",6),p.Hc(14,"ID"),p.Rb(),p.Rb(),p.Hc(15,"\n        "),p.Sb(16,"dd"),p.Hc(17,"\n          "),p.Sb(18,"span"),p.Hc(19),p.Rb(),p.Hc(20,"\n        "),p.Rb(),p.Hc(21,"\n        "),p.Sb(22,"dt"),p.Sb(23,"span",7),p.Hc(24,"Nombre"),p.Rb(),p.Rb(),p.Hc(25,"\n        "),p.Sb(26,"dd"),p.Hc(27,"\n          "),p.Sb(28,"span"),p.Hc(29),p.Rb(),p.Hc(30,"\n        "),p.Rb(),p.Hc(31,"\n        "),p.Sb(32,"dt"),p.Sb(33,"span",8),p.Hc(34,"Cod Proceso"),p.Rb(),p.Rb(),p.Hc(35,"\n        "),p.Sb(36,"dd"),p.Hc(37,"\n          "),p.Sb(38,"span"),p.Hc(39),p.Rb(),p.Hc(40,"\n        "),p.Rb(),p.Hc(41,"\n        "),p.Sb(42,"dt"),p.Sb(43,"span",9),p.Hc(44,"Cod Estado"),p.Rb(),p.Rb(),p.Hc(45,"\n        "),p.Sb(46,"dd"),p.Hc(47,"\n          "),p.Sb(48,"span",10),p.Hc(49),p.Rb(),p.Hc(50,"\n        "),p.Rb(),p.Hc(51,"\n      "),p.Rb(),p.Hc(52,"\n\n      "),p.Sb(53,"button",11),p.cc("click",function(){return p.yc(e),p.ec().previousState()}),p.fc(54,"translate"),p.Rb(),p.Hc(55,"\n      "),p.Nb(56,"button",12),p.fc(57,"translate"),p.Hc(58,"\n    "),p.Rb()}if(2&e){const e=p.ec();p.Ab(6),p.Jc(" ",e.procesoAnalisis.id,"\n      "),p.Ab(13),p.Ic(e.procesoAnalisis.id),p.Ab(10),p.Ic(e.procesoAnalisis.nombre),p.Ab(10),p.Ic(e.procesoAnalisis.codProceso),p.Ab(9),p.mc("cdaTranslate","webCedaApp.EstadoProceso."+e.procesoAnalisis.codEstado),p.Ab(1),p.Ic(e.procesoAnalisis.codEstado),p.Ab(4),p.lc("label",p.gc(54,9,"entity.action.back")),p.Ab(3),p.lc("label",p.gc(57,11,"entity.action.edit"))("routerLink",p.pc(13,C,e.procesoAnalisis.id))}}let I=(()=>{class e{constructor(e){this.activatedRoute=e,this.procesoAnalisis=null}ngOnInit(){this.activatedRoute.data.subscribe(({procesoAnalisis:e})=>{this.procesoAnalisis=e})}previousState(){window.history.back()}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(c.a))},e.\u0275cmp=p.Gb({type:e,selectors:[["cda-proceso-analisis-detail"]],decls:8,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","procesoAnalisisDetailsHeading"],["cdaTranslate","webCedaApp.procesoAnalisis.detail.title"],[1,"row-md","jh-entity-details"],["cdaTranslate","global.field.id"],["cdaTranslate","webCedaApp.procesoAnalisis.nombre"],["cdaTranslate","webCedaApp.procesoAnalisis.codProceso"],["cdaTranslate","webCedaApp.procesoAnalisis.codEstado"],[3,"cdaTranslate"],["pButton","","type","submit","icon","pi pi-arrow-left","data-cy","entityDetailsBackButton",1,"p-button-info",3,"label","click"],["pButton","","type","button","icon","pi pi-pencil",3,"label","routerLink"]],template:function(e,t){1&e&&(p.Sb(0,"div",0),p.Hc(1,"\n  "),p.Sb(2,"div",1),p.Hc(3,"\n    "),p.Fc(4,P,59,15,"div",2),p.Hc(5,"\n  "),p.Rb(),p.Hc(6,"\n"),p.Rb(),p.Hc(7,"\n")),2&e&&(p.Ab(4),p.lc("ngIf",t.procesoAnalisis))},directives:[E.m,h.a,v.b,c.e],pipes:[m.d],encapsulation:2}),e})();var k=n("3Pt+");const F=["A","I"];var L=n("7kUa"),j=n("arFO"),N=n("FMpt");function O(e,t){1&e&&(p.Sb(0,"p-message",20),p.fc(1,"translate"),p.Hc(2,"\n                "),p.Rb()),2&e&&p.lc("text",p.gc(1,1,"entity.validation.required"))}function x(e,t){if(1&e&&(p.Qb(0),p.Hc(1,"\n                "),p.Fc(2,O,3,3,"p-message",19),p.Hc(3,"\n              "),p.Pb()),2&e){const e=p.ec();p.Ab(2),p.lc("ngIf",e.editForm.get("nombre").errors.required)}}function q(e,t){1&e&&p.Hc(0),2&e&&p.Ic(t.$implicit.label)}function M(e,t){1&e&&(p.Sb(0,"p-message",20),p.fc(1,"translate"),p.Hc(2,"\n                "),p.Rb()),2&e&&p.lc("text",p.gc(1,1,"entity.validation.required"))}function B(e,t){if(1&e&&(p.Qb(0),p.Hc(1,"\n                "),p.Fc(2,M,3,3,"p-message",19),p.Hc(3,"\n              "),p.Pb()),2&e){const e=p.ec();p.Ab(2),p.lc("ngIf",e.editForm.get("codEstado").errors.required)}}let z=(()=>{class e{constructor(e,t,n){this.procesoAnalisisService=e,this.activatedRoute=t,this.fb=n,this.isSaving=!1,this.codEstadoOptions=F.map(e=>({label:e.toString(),value:e})),this.editForm=this.fb.group({id:[],nombre:[null,[k.r.required]],codProceso:[],codEstado:[null,[k.r.required]],hashArchivo:[]})}ngOnInit(){this.isSaving=!1,this.activatedRoute.data.subscribe(({procesoAnalisis:e})=>{this.updateForm(e)})}updateForm(e){e?this.editForm.reset(Object.assign({},e),{emitEvent:!1,onlySelf:!0}):this.editForm.reset({})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.editForm.value;this.subscribeToSaveResponse(null!==e.id?this.procesoAnalisisService.update(e):this.procesoAnalisisService.create(e))}subscribeToSaveResponse(e){e.subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(){this.isSaving=!1}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(u.a),p.Mb(c.a),p.Mb(k.c))},e.\u0275cmp=p.Gb({type:e,selectors:[["cda-proceso-analisis-update"]],decls:75,vars:11,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","cda-proceso-analisis-heading","data-cy","ProcesoAnalisisCreateUpdateHeading","cdaTranslate","webCedaApp.procesoAnalisis.home.title",2,"font-weight","bold"],["cdaTranslate","webCedaApp.procesoAnalisis.home.createOrEditLabel"],[1,"form-grid","p-fluid"],[1,"p-field","p-grid"],["cdaTranslate","webCedaApp.procesoAnalisis.nombre","for","field_nombre",1,"p-col-12","p-md-2"],[1,"p-col-12","p-md-10"],["pInputText","","type","text","name","nombre","id","field_nombre","formControlName","nombre","data-cy","nombre"],[1,"validation-messages"],[4,"ngIf"],["cdaTranslate","webCedaApp.procesoAnalisis.codProceso","for","field_codProceso",1,"p-col-12","p-md-2"],["pInputText","","type","text","name","codProceso","id","field_codProceso","formControlName","codProceso","data-cy","codProceso"],["cdaTranslate","webCedaApp.procesoAnalisis.codEstado","for","field_codEstado",1,"p-col-12","p-md-2"],["name","codEstado","formControlName","codEstado","id","field_codEstado","placeholder","Choose","data-cy","codEstado",3,"options"],["pTemplate","item"],["pButton","","type","button","id","cancel-save","icon","pi pi-ban",1,"p-button-secondary",3,"label","click"],["pButton","","type","submit","id","save-entity","icon","pi pi-save","data-cy","entityCreateSaveButton",3,"disabled","label"],["severity","error",3,"text",4,"ngIf"],["severity","error",3,"text"]],template:function(e,t){1&e&&(p.Sb(0,"div",0),p.Hc(1,"\n  "),p.Sb(2,"div",1),p.Hc(3,"\n    "),p.Sb(4,"form",2),p.cc("ngSubmit",function(){return t.save()}),p.Hc(5,"\n      "),p.Nb(6,"br"),p.Hc(7,"\n      "),p.Sb(8,"h2",3),p.Hc(9,"\n        Create or edit a Proceso Analisis\n      "),p.Rb(),p.Hc(10,"\n      "),p.Nb(11,"h3",4),p.Hc(12,"\n      "),p.Sb(13,"div",5),p.Hc(14,"\n        "),p.Hc(15,"\n        "),p.Sb(16,"div",6),p.Hc(17,"\n          "),p.Sb(18,"label",7),p.Hc(19,"Nombre"),p.Rb(),p.Hc(20,"\n          "),p.Sb(21,"div",8),p.Hc(22,"\n            "),p.Nb(23,"input",9),p.Hc(24,"\n            "),p.Sb(25,"div",10),p.Hc(26,"\n              "),p.Fc(27,x,4,1,"ng-container",11),p.Hc(28,"\n            "),p.Rb(),p.Hc(29,"\n          "),p.Rb(),p.Hc(30,"\n        "),p.Rb(),p.Hc(31,"\n        "),p.Sb(32,"div",6),p.Hc(33,"\n          "),p.Sb(34,"label",12),p.Hc(35,"Cod Proceso"),p.Rb(),p.Hc(36,"\n          "),p.Sb(37,"div",8),p.Hc(38,"\n            "),p.Nb(39,"input",13),p.Hc(40,"\n          "),p.Rb(),p.Hc(41,"\n        "),p.Rb(),p.Hc(42,"\n        "),p.Sb(43,"div",6),p.Hc(44,"\n          "),p.Sb(45,"label",14),p.Hc(46,"Cod Estado"),p.Rb(),p.Hc(47,"\n          "),p.Sb(48,"div",8),p.Hc(49,"\n            "),p.Sb(50,"p-dropdown",15),p.Hc(51,"\n              "),p.Fc(52,q,1,1,"ng-template",16),p.Hc(53,"\n            "),p.Rb(),p.Hc(54,"\n            "),p.Sb(55,"div",10),p.Hc(56,"\n              "),p.Fc(57,B,4,1,"ng-container",11),p.Hc(58,"\n            "),p.Rb(),p.Hc(59,"\n          "),p.Rb(),p.Hc(60,"\n        "),p.Rb(),p.Hc(61,"\n      "),p.Rb(),p.Hc(62,"\n\n      "),p.Sb(63,"div"),p.Hc(64,"\n        "),p.Sb(65,"button",17),p.cc("click",function(){return t.previousState()}),p.fc(66,"translate"),p.Rb(),p.Hc(67,"\n        "),p.Nb(68,"button",18),p.fc(69,"translate"),p.Hc(70,"\n      "),p.Rb(),p.Hc(71,"\n    "),p.Rb(),p.Hc(72,"\n  "),p.Rb(),p.Hc(73,"\n"),p.Rb(),p.Hc(74,"\n")),2&e&&(p.Ab(4),p.lc("formGroup",t.editForm),p.Ab(23),p.lc("ngIf",t.editForm.get("nombre").invalid&&(t.editForm.get("nombre").dirty||t.editForm.get("nombre").touched)),p.Ab(23),p.lc("options",t.codEstadoOptions),p.Ab(7),p.lc("ngIf",t.editForm.get("codEstado").invalid&&(t.editForm.get("codEstado").dirty||t.editForm.get("codEstado").touched)),p.Ab(8),p.lc("label",p.gc(66,7,"entity.action.cancel")),p.Ab(3),p.lc("disabled",t.editForm.invalid||t.isSaving)("label",p.gc(69,9,"entity.action.save")))},directives:[k.s,k.k,k.e,h.a,k.b,L.a,k.j,k.d,E.m,j.a,H.j,v.b,N.b],pipes:[m.d],encapsulation:2}),e})();var D=n("LRne"),U=n("EY2u"),G=n("5+tZ");let J=(()=>{class e{constructor(e,t){this.service=e,this.router=t}resolve(e){const t=e.params.id?e.params.id:null;return t?this.service.find(t).pipe(Object(G.a)(e=>e.body?Object(D.a)(e.body):(this.router.navigate(["404"]),U.a))):Object(D.a)(null)}}return e.\u0275fac=function(t){return new(t||e)(p.Zb(u.a),p.Zb(c.d))},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _=[{path:"",component:T,data:{authorities:[o.a.USER],defaultSort:"id,asc",pageTitle:"webCedaApp.procesoAnalisis.home.title"},canActivate:[a.a]},{path:":id/view",component:I,resolve:{procesoAnalisis:J},data:{authorities:[o.a.USER],pageTitle:"webCedaApp.procesoAnalisis.home.title"},canActivate:[a.a]},{path:"new",component:z,resolve:{procesoAnalisis:J},data:{authorities:[o.a.USER],pageTitle:"webCedaApp.procesoAnalisis.home.title"},canActivate:[a.a]},{path:":id/edit",component:z,resolve:{procesoAnalisis:J},data:{authorities:[o.a.USER],pageTitle:"webCedaApp.procesoAnalisis.home.title"},canActivate:[a.a]}];let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({imports:[[c.h.forChild(_)],c.h]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({imports:[[i.a,X]]}),e})()}}]);