(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{R7M7:function(e,n,t){"use strict";t.r(n),t.d(n,"CensoPoblacionMunModule",function(){return te});var c=t("hbEq"),o=t("tyNb"),a=t("wtY+"),i=t("ADQh"),r=t("pLZG"),b=t("lJxs"),s=t("fXoL"),l=t("exUl");function d(e){return e.id}var p=t("tk/3"),u=t("PxL+");let H=(()=>{class e{constructor(e,n){this.http=e,this.applicationConfigService=n,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/censo-poblacion-muns")}create(e){return this.http.post(this.resourceUrl,e,{observe:"response"})}update(e){return this.http.put(`${this.resourceUrl}/${d(e)}`,e,{observe:"response"})}partialUpdate(e){return this.http.patch(`${this.resourceUrl}/${d(e)}`,e,{observe:"response"})}find(e){return this.http.get(`${this.resourceUrl}/${e}`,{observe:"response"})}query(e){const n=Object(l.a)(e);return this.http.get(this.resourceUrl,{params:n,observe:"response"})}delete(e){return this.http.delete(`${this.resourceUrl}/${e}`,{observe:"response"})}}return e.\u0275fac=function(n){return new(n||e)(s.Zb(p.b),s.Zb(u.a))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=t("7zfz"),f=t("sYmb"),S=t("YHTv"),g=t("jIHw"),v=t("rEr+");const R=["censoPoblacionMunTable"];function h(e,n){1&e&&(s.Hc(0,"\n      "),s.Sb(1,"tr"),s.Hc(2,"\n        "),s.Sb(3,"th"),s.Hc(4,"\n          "),s.Sb(5,"span",7),s.Hc(6,"ID"),s.Rb(),s.Hc(7,"\n        "),s.Rb(),s.Hc(8,"\n        "),s.Sb(9,"th"),s.Hc(10,"\n          "),s.Sb(11,"span",8),s.Hc(12,"Dp"),s.Rb(),s.Hc(13,"\n        "),s.Rb(),s.Hc(14,"\n        "),s.Sb(15,"th"),s.Hc(16,"\n          "),s.Sb(17,"span",9),s.Hc(18,"Dp Nom"),s.Rb(),s.Hc(19,"\n        "),s.Rb(),s.Hc(20,"\n        "),s.Sb(21,"th"),s.Hc(22,"\n          "),s.Sb(23,"span",10),s.Hc(24,"Anio"),s.Rb(),s.Hc(25,"\n        "),s.Rb(),s.Hc(26,"\n        "),s.Sb(27,"th"),s.Hc(28,"\n          "),s.Sb(29,"span",11),s.Hc(30,"Area Geografica"),s.Rb(),s.Hc(31,"\n        "),s.Rb(),s.Hc(32,"\n        "),s.Sb(33,"th"),s.Hc(34,"\n          "),s.Sb(35,"span",12),s.Hc(36,"Total Mujeres"),s.Rb(),s.Hc(37,"\n        "),s.Rb(),s.Hc(38,"\n        "),s.Sb(39,"th"),s.Hc(40,"\n          "),s.Sb(41,"span",13),s.Hc(42,"Total Hombres"),s.Rb(),s.Hc(43,"\n        "),s.Rb(),s.Hc(44,"\n        "),s.Sb(45,"th"),s.Hc(46,"\n          "),s.Sb(47,"span",14),s.Hc(48,"Total"),s.Rb(),s.Hc(49,"\n        "),s.Rb(),s.Hc(50,"\n        "),s.Nb(51,"th",15),s.Hc(52,"\n      "),s.Rb(),s.Hc(53,"\n    "))}const y=function(e){return["/censo-poblacion-mun",e,"view"]},M=function(e){return["/censo-poblacion-mun",e,"edit"]};function A(e,n){if(1&e){const e=s.Tb();s.Hc(0,"\n      "),s.Sb(1,"tr",16),s.Hc(2,"\n        "),s.Sb(3,"td"),s.Hc(4,"\n          "),s.Sb(5,"a",17),s.Hc(6),s.Rb(),s.Hc(7,"\n        "),s.Rb(),s.Hc(8,"\n        "),s.Sb(9,"td"),s.Hc(10),s.Rb(),s.Hc(11,"\n        "),s.Sb(12,"td"),s.Hc(13),s.Rb(),s.Hc(14,"\n        "),s.Sb(15,"td"),s.Hc(16),s.Rb(),s.Hc(17,"\n        "),s.Sb(18,"td"),s.Hc(19),s.Rb(),s.Hc(20,"\n        "),s.Sb(21,"td"),s.Hc(22),s.Rb(),s.Hc(23,"\n        "),s.Sb(24,"td"),s.Hc(25),s.Rb(),s.Hc(26,"\n        "),s.Sb(27,"td"),s.Hc(28),s.Rb(),s.Hc(29,"\n        "),s.Sb(30,"td"),s.Hc(31,"\n          "),s.Sb(32,"div",18),s.Hc(33,"\n            "),s.Sb(34,"p-button",19),s.Hc(35,"\n            "),s.Rb(),s.Hc(36,"\n            "),s.Sb(37,"p-button",20),s.Hc(38,"\n            "),s.Rb(),s.Hc(39,"\n            "),s.Sb(40,"p-button",21),s.cc("click",function(){s.yc(e);const t=n.$implicit;return s.ec().delete(t.id)}),s.Hc(41,"\n            "),s.Rb(),s.Hc(42,"\n          "),s.Rb(),s.Hc(43,"\n        "),s.Rb(),s.Hc(44,"\n      "),s.Rb(),s.Hc(45,"\n    ")}if(2&e){const e=n.$implicit;s.Ab(5),s.lc("routerLink",s.pc(11,y,e.id)),s.Ab(1),s.Ic(e.id),s.Ab(4),s.Ic(e.dp),s.Ab(3),s.Ic(e.dpNom),s.Ab(3),s.Ic(e.anio),s.Ab(3),s.Ic(e.areaGeografica),s.Ab(3),s.Ic(e.totalMujeres),s.Ab(3),s.Ic(e.totalHombres),s.Ab(3),s.Ic(e.total),s.Ab(6),s.lc("routerLink",s.pc(13,y,e.id)),s.Ab(3),s.lc("routerLink",s.pc(15,M,e.id))}}const P=function(){return["/censo-poblacion-mun/new"]};let w=(()=>{class e{constructor(e,n,t,c){this.censoPoblacionMunService=e,this.messageService=n,this.confirmationService=t,this.translateService=c,this.filtersDetails={id:{type:"number"},dp:{type:"string"},dpNom:{type:"string"},anio:{type:"string"},areaGeografica:{type:"string"},totalMujeres:{type:"number"},totalHombres:{type:"number"},total:{type:"number"}}}ngOnInit(){this.loadAll()}get filters(){return this.censoPoblacionMunTable.filters}loadAll(){this.censoPoblacionMunService.query().pipe(Object(r.a)(e=>e.ok),Object(b.a)(e=>e.body)).subscribe(e=>{this.censoPoblacionMuns=e},e=>this.onError(e.message))}delete(e){this.confirmationService.confirm({header:this.translateService.instant("entity.delete.title"),message:this.translateService.instant("webCedaApp.censoPoblacionMun.delete.question",{id:e}),accept:()=>{this.censoPoblacionMunService.delete(e).subscribe(()=>{this.loadAll()})}})}trackId(e,n){return n.id}onError(e){this.messageService.add({severity:"error",summary:e})}}return e.\u0275fac=function(n){return new(n||e)(s.Mb(H),s.Mb(m.h),s.Mb(m.b),s.Mb(f.e))},e.\u0275cmp=s.Gb({type:e,selectors:[["cda-censo-poblacion-mun"]],viewQuery:function(e,n){if(1&e&&s.Mc(R,3),2&e){let e;s.wc(e=s.dc())&&(n.censoPoblacionMunTable=e.first)}},decls:23,vars:8,consts:[["id","page-heading","data-cy","CensoPoblacionMunHeading"],["cdaTranslate","webCedaApp.censoPoblacionMun.home.title"],["id","jh-create-entity","icon","pi pi-plus","iconPos","left","data-cy","entityCreateButton",1,"float-right","jh-create-entity","create-censo-poblacion-mun",3,"routerLink","label"],[3,"value","rowTrackBy","responsive"],["censoPoblacionMunTable",""],["pTemplate","header"],["pTemplate","body"],["cdaTranslate","webCedaApp.censoPoblacionMun.id"],["cdaTranslate","webCedaApp.censoPoblacionMun.dp"],["cdaTranslate","webCedaApp.censoPoblacionMun.dpNom"],["cdaTranslate","webCedaApp.censoPoblacionMun.anio"],["cdaTranslate","webCedaApp.censoPoblacionMun.areaGeografica"],["cdaTranslate","webCedaApp.censoPoblacionMun.totalMujeres"],["cdaTranslate","webCedaApp.censoPoblacionMun.totalHombres"],["cdaTranslate","webCedaApp.censoPoblacionMun.total"],[2,"width","124px"],["data-cy","entityTable"],[3,"routerLink"],[1,"btn-group","flex-btn-group-container"],["type","submit","icon","pi pi-eye","styleClass","p-button-info","data-cy","entityDetailsButton",3,"routerLink"],["type","submit","icon","pi pi-pencil","styleClass","p-button-warning","data-cy","entityEditButton",3,"routerLink"],["type","submit","icon","pi pi-times","styleClass","p-button-danger","data-cy","entityDeleteButton",3,"click"]],template:function(e,n){1&e&&(s.Sb(0,"div"),s.Hc(1,"\n  "),s.Sb(2,"h2",0),s.Hc(3,"\n    "),s.Sb(4,"span",1),s.Hc(5,"Censo Poblacion Muns"),s.Rb(),s.Hc(6,"\n    "),s.Sb(7,"p-button",2),s.fc(8,"translate"),s.Hc(9,"\n    "),s.Rb(),s.Hc(10,"\n  "),s.Rb(),s.Hc(11,"\n  "),s.Nb(12,"br"),s.Hc(13,"\n  "),s.Sb(14,"p-table",3,4),s.Hc(16,"\n    "),s.Fc(17,h,54,0,"ng-template",5),s.Hc(18,"\n    "),s.Fc(19,A,46,17,"ng-template",6),s.Hc(20,"\n  "),s.Rb(),s.Hc(21,"\n"),s.Rb(),s.Hc(22,"\n")),2&e&&(s.Ab(7),s.lc("routerLink",s.oc(7,P))("label",s.gc(8,5,"webCedaApp.censoPoblacionMun.home.createLabel")),s.Ab(7),s.lc("value",n.censoPoblacionMuns)("rowTrackBy",n.trackId)("responsive",!0))},directives:[S.a,g.a,o.e,v.c,m.j,o.g],pipes:[f.d],encapsulation:2}),e})();var T=t("ofXK");const F=function(e){return["/censo-poblacion-mun",e,"edit"]};function I(e,n){if(1&e){const e=s.Tb();s.Sb(0,"div"),s.Hc(1,"\n      "),s.Sb(2,"h2",3),s.Hc(3,"\n        "),s.Sb(4,"span",4),s.Hc(5,"Censo Poblacion Mun"),s.Rb(),s.Hc(6),s.Rb(),s.Hc(7,"\n\n      "),s.Nb(8,"hr"),s.Hc(9,"\n      "),s.Sb(10,"dl",5),s.Hc(11,"\n        "),s.Sb(12,"dt"),s.Sb(13,"span",6),s.Hc(14,"ID"),s.Rb(),s.Rb(),s.Hc(15,"\n        "),s.Sb(16,"dd"),s.Hc(17,"\n          "),s.Sb(18,"span"),s.Hc(19),s.Rb(),s.Hc(20,"\n        "),s.Rb(),s.Hc(21,"\n        "),s.Sb(22,"dt"),s.Sb(23,"span",7),s.Hc(24,"Dp"),s.Rb(),s.Rb(),s.Hc(25,"\n        "),s.Sb(26,"dd"),s.Hc(27,"\n          "),s.Sb(28,"span"),s.Hc(29),s.Rb(),s.Hc(30,"\n        "),s.Rb(),s.Hc(31,"\n        "),s.Sb(32,"dt"),s.Sb(33,"span",8),s.Hc(34,"Dp Nom"),s.Rb(),s.Rb(),s.Hc(35,"\n        "),s.Sb(36,"dd"),s.Hc(37,"\n          "),s.Sb(38,"span"),s.Hc(39),s.Rb(),s.Hc(40,"\n        "),s.Rb(),s.Hc(41,"\n        "),s.Sb(42,"dt"),s.Sb(43,"span",9),s.Hc(44,"Anio"),s.Rb(),s.Rb(),s.Hc(45,"\n        "),s.Sb(46,"dd"),s.Hc(47,"\n          "),s.Sb(48,"span"),s.Hc(49),s.Rb(),s.Hc(50,"\n        "),s.Rb(),s.Hc(51,"\n        "),s.Sb(52,"dt"),s.Sb(53,"span",10),s.Hc(54,"Area Geografica"),s.Rb(),s.Rb(),s.Hc(55,"\n        "),s.Sb(56,"dd"),s.Hc(57,"\n          "),s.Sb(58,"span"),s.Hc(59),s.Rb(),s.Hc(60,"\n        "),s.Rb(),s.Hc(61,"\n        "),s.Sb(62,"dt"),s.Sb(63,"span",11),s.Hc(64,"Total Mujeres"),s.Rb(),s.Rb(),s.Hc(65,"\n        "),s.Sb(66,"dd"),s.Hc(67,"\n          "),s.Sb(68,"span"),s.Hc(69),s.Rb(),s.Hc(70,"\n        "),s.Rb(),s.Hc(71,"\n        "),s.Sb(72,"dt"),s.Sb(73,"span",12),s.Hc(74,"Total Hombres"),s.Rb(),s.Rb(),s.Hc(75,"\n        "),s.Sb(76,"dd"),s.Hc(77,"\n          "),s.Sb(78,"span"),s.Hc(79),s.Rb(),s.Hc(80,"\n        "),s.Rb(),s.Hc(81,"\n        "),s.Sb(82,"dt"),s.Sb(83,"span",13),s.Hc(84,"Total"),s.Rb(),s.Rb(),s.Hc(85,"\n        "),s.Sb(86,"dd"),s.Hc(87,"\n          "),s.Sb(88,"span"),s.Hc(89),s.Rb(),s.Hc(90,"\n        "),s.Rb(),s.Hc(91,"\n      "),s.Rb(),s.Hc(92,"\n\n      "),s.Sb(93,"button",14),s.cc("click",function(){return s.yc(e),s.ec().previousState()}),s.fc(94,"translate"),s.Rb(),s.Hc(95,"\n      "),s.Nb(96,"button",15),s.fc(97,"translate"),s.Hc(98,"\n    "),s.Rb()}if(2&e){const e=s.ec();s.Ab(6),s.Jc(" ",e.censoPoblacionMun.id,"\n      "),s.Ab(13),s.Ic(e.censoPoblacionMun.id),s.Ab(10),s.Ic(e.censoPoblacionMun.dp),s.Ab(10),s.Ic(e.censoPoblacionMun.dpNom),s.Ab(10),s.Ic(e.censoPoblacionMun.anio),s.Ab(10),s.Ic(e.censoPoblacionMun.areaGeografica),s.Ab(10),s.Ic(e.censoPoblacionMun.totalMujeres),s.Ab(10),s.Ic(e.censoPoblacionMun.totalHombres),s.Ab(10),s.Ic(e.censoPoblacionMun.total),s.Ab(4),s.lc("label",s.gc(94,12,"entity.action.back")),s.Ab(3),s.lc("label",s.gc(97,14,"entity.action.edit"))("routerLink",s.pc(16,F,e.censoPoblacionMun.id))}}let C=(()=>{class e{constructor(e){this.activatedRoute=e,this.censoPoblacionMun=null}ngOnInit(){this.activatedRoute.data.subscribe(({censoPoblacionMun:e})=>{this.censoPoblacionMun=e})}previousState(){window.history.back()}}return e.\u0275fac=function(n){return new(n||e)(s.Mb(o.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["cda-censo-poblacion-mun-detail"]],decls:8,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","censoPoblacionMunDetailsHeading"],["cdaTranslate","webCedaApp.censoPoblacionMun.detail.title"],[1,"row-md","jh-entity-details"],["cdaTranslate","global.field.id"],["cdaTranslate","webCedaApp.censoPoblacionMun.dp"],["cdaTranslate","webCedaApp.censoPoblacionMun.dpNom"],["cdaTranslate","webCedaApp.censoPoblacionMun.anio"],["cdaTranslate","webCedaApp.censoPoblacionMun.areaGeografica"],["cdaTranslate","webCedaApp.censoPoblacionMun.totalMujeres"],["cdaTranslate","webCedaApp.censoPoblacionMun.totalHombres"],["cdaTranslate","webCedaApp.censoPoblacionMun.total"],["pButton","","type","submit","icon","pi pi-arrow-left","data-cy","entityDetailsBackButton",1,"p-button-info",3,"label","click"],["pButton","","type","button","icon","pi pi-pencil",3,"label","routerLink"]],template:function(e,n){1&e&&(s.Sb(0,"div",0),s.Hc(1,"\n  "),s.Sb(2,"div",1),s.Hc(3,"\n    "),s.Fc(4,I,99,18,"div",2),s.Hc(5,"\n  "),s.Rb(),s.Hc(6,"\n"),s.Rb(),s.Hc(7,"\n")),2&e&&(s.Ab(4),s.lc("ngIf",n.censoPoblacionMun))},directives:[T.m,S.a,g.b,o.e],pipes:[f.d],encapsulation:2}),e})();var N=t("3Pt+"),j=t("7kUa"),k=t("FMpt");function x(e,n){1&e&&(s.Qb(0),s.Hc(1,"\n            "),s.Sb(2,"label",25),s.Hc(3,"ID"),s.Rb(),s.Hc(4,"\n            "),s.Sb(5,"div",8),s.Hc(6,"\n              "),s.Nb(7,"input",26),s.Hc(8,"\n            "),s.Rb(),s.Hc(9,"\n          "),s.Pb())}function q(e,n){1&e&&(s.Sb(0,"p-message",28),s.fc(1,"translate"),s.Hc(2,"\n                "),s.Rb()),2&e&&s.lc("text",s.gc(1,1,"entity.validation.required"))}function G(e,n){if(1&e&&(s.Qb(0),s.Hc(1,"\n                "),s.Fc(2,q,3,3,"p-message",27),s.Hc(3,"\n              "),s.Pb()),2&e){const e=s.ec();s.Ab(2),s.lc("ngIf",e.editForm.get("dp").errors.required)}}function L(e,n){1&e&&(s.Sb(0,"p-message",28),s.fc(1,"translate"),s.Hc(2,"\n                "),s.Rb()),2&e&&s.lc("text",s.gc(1,1,"entity.validation.required"))}function _(e,n){if(1&e&&(s.Qb(0),s.Hc(1,"\n                "),s.Fc(2,L,3,3,"p-message",27),s.Hc(3,"\n              "),s.Pb()),2&e){const e=s.ec();s.Ab(2),s.lc("ngIf",e.editForm.get("dpNom").errors.required)}}function D(e,n){1&e&&(s.Sb(0,"p-message",28),s.fc(1,"translate"),s.Hc(2,"\n                "),s.Rb()),2&e&&s.lc("text",s.gc(1,1,"entity.validation.required"))}function E(e,n){if(1&e&&(s.Qb(0),s.Hc(1,"\n                "),s.Fc(2,D,3,3,"p-message",27),s.Hc(3,"\n              "),s.Pb()),2&e){const e=s.ec();s.Ab(2),s.lc("ngIf",e.editForm.get("anio").errors.required)}}function U(e,n){1&e&&(s.Sb(0,"p-message",28),s.fc(1,"translate"),s.Hc(2,"\n                "),s.Rb()),2&e&&s.lc("text",s.gc(1,1,"entity.validation.required"))}function B(e,n){if(1&e&&(s.Qb(0),s.Hc(1,"\n                "),s.Fc(2,U,3,3,"p-message",27),s.Hc(3,"\n              "),s.Pb()),2&e){const e=s.ec();s.Ab(2),s.lc("ngIf",e.editForm.get("areaGeografica").errors.required)}}function O(e,n){1&e&&(s.Sb(0,"p-message",28),s.fc(1,"translate"),s.Hc(2,"\n                "),s.Rb()),2&e&&s.lc("text",s.gc(1,1,"entity.validation.required"))}function Q(e,n){if(1&e&&(s.Qb(0),s.Hc(1,"\n                "),s.Fc(2,O,3,3,"p-message",27),s.Hc(3,"\n                "),s.Sb(4,"p-message",29),s.fc(5,"translate"),s.Hc(6,"\n                "),s.Rb(),s.Hc(7,"\n              "),s.Pb()),2&e){const e=s.ec();s.Ab(2),s.lc("ngIf",e.editForm.get("totalMujeres").errors.required),s.Ab(2),s.lc("hidden",!e.editForm.get("totalMujeres").errors.number)("text",s.gc(5,3,"entity.validation.number"))}}function $(e,n){1&e&&(s.Sb(0,"p-message",28),s.fc(1,"translate"),s.Hc(2,"\n                "),s.Rb()),2&e&&s.lc("text",s.gc(1,1,"entity.validation.required"))}function J(e,n){if(1&e&&(s.Qb(0),s.Hc(1,"\n                "),s.Fc(2,$,3,3,"p-message",27),s.Hc(3,"\n                "),s.Sb(4,"p-message",29),s.fc(5,"translate"),s.Hc(6,"\n                "),s.Rb(),s.Hc(7,"\n              "),s.Pb()),2&e){const e=s.ec();s.Ab(2),s.lc("ngIf",e.editForm.get("totalHombres").errors.required),s.Ab(2),s.lc("hidden",!e.editForm.get("totalHombres").errors.number)("text",s.gc(5,3,"entity.validation.number"))}}function Z(e,n){1&e&&(s.Sb(0,"p-message",28),s.fc(1,"translate"),s.Hc(2,"\n                "),s.Rb()),2&e&&s.lc("text",s.gc(1,1,"entity.validation.required"))}function Y(e,n){if(1&e&&(s.Qb(0),s.Hc(1,"\n                "),s.Fc(2,Z,3,3,"p-message",27),s.Hc(3,"\n                "),s.Sb(4,"p-message",29),s.fc(5,"translate"),s.Hc(6,"\n                "),s.Rb(),s.Hc(7,"\n              "),s.Pb()),2&e){const e=s.ec();s.Ab(2),s.lc("ngIf",e.editForm.get("total").errors.required),s.Ab(2),s.lc("hidden",!e.editForm.get("total").errors.number)("text",s.gc(5,3,"entity.validation.number"))}}let K=(()=>{class e{constructor(e,n,t){this.censoPoblacionMunService=e,this.activatedRoute=n,this.fb=t,this.isSaving=!1,this.editForm=this.fb.group({id:[],dp:[null,[N.r.required]],dpNom:[null,[N.r.required]],anio:[null,[N.r.required]],areaGeografica:[null,[N.r.required]],totalMujeres:[null,[N.r.required]],totalHombres:[null,[N.r.required]],total:[null,[N.r.required]]})}ngOnInit(){this.isSaving=!1,this.activatedRoute.data.subscribe(({censoPoblacionMun:e})=>{this.updateForm(e)})}updateForm(e){e?this.editForm.reset(Object.assign({},e),{emitEvent:!1,onlySelf:!0}):this.editForm.reset({})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.editForm.value;this.subscribeToSaveResponse(null!==e.id?this.censoPoblacionMunService.update(e):this.censoPoblacionMunService.create(e))}subscribeToSaveResponse(e){e.subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(){this.isSaving=!1}}return e.\u0275fac=function(n){return new(n||e)(s.Mb(H),s.Mb(o.a),s.Mb(N.c))},e.\u0275cmp=s.Gb({type:e,selectors:[["cda-censo-poblacion-mun-update"]],decls:141,vars:16,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","cda-censo-poblacion-mun-heading","data-cy","CensoPoblacionMunCreateUpdateHeading","jhiTranslate","webCedaApp.censoPoblacionMun.home.createOrEditLabel"],[1,"form-grid","p-fluid"],[1,"p-field","p-grid"],[4,"ngIf"],["cdaTranslate","webCedaApp.censoPoblacionMun.dp","for","field_dp",1,"p-col-12","p-md-2"],[1,"p-col-12","p-md-10"],["pInputText","","type","text","name","dp","id","field_dp","formControlName","dp","data-cy","dp"],[1,"validation-messages"],["cdaTranslate","webCedaApp.censoPoblacionMun.dpNom","for","field_dpNom",1,"p-col-12","p-md-2"],["pInputText","","type","text","name","dpNom","id","field_dpNom","formControlName","dpNom","data-cy","dpNom"],["cdaTranslate","webCedaApp.censoPoblacionMun.anio","for","field_anio",1,"p-col-12","p-md-2"],["pInputText","","type","text","name","anio","id","field_anio","formControlName","anio","data-cy","anio"],["cdaTranslate","webCedaApp.censoPoblacionMun.areaGeografica","for","field_areaGeografica",1,"p-col-12","p-md-2"],["pInputText","","type","text","name","areaGeografica","id","field_areaGeografica","formControlName","areaGeografica","data-cy","areaGeografica"],["cdaTranslate","webCedaApp.censoPoblacionMun.totalMujeres","for","field_totalMujeres",1,"p-col-12","p-md-2"],["pInputText","","type","number","name","totalMujeres","id","field_totalMujeres","formControlName","totalMujeres","data-cy","totalMujeres"],["cdaTranslate","webCedaApp.censoPoblacionMun.totalHombres","for","field_totalHombres",1,"p-col-12","p-md-2"],["pInputText","","type","number","name","totalHombres","id","field_totalHombres","formControlName","totalHombres","data-cy","totalHombres"],["cdaTranslate","webCedaApp.censoPoblacionMun.total","for","field_total",1,"p-col-12","p-md-2"],["pInputText","","type","number","name","total","id","field_total","formControlName","total","data-cy","total"],["pButton","","type","button","id","cancel-save","icon","pi pi-ban",1,"p-button-secondary",3,"label","click"],["pButton","","type","submit","id","save-entity","icon","pi pi-save","data-cy","entityCreateSaveButton",3,"disabled","label"],["cdaTranslate","global.field.id","for","field_id",1,"p-col-12","p-md-2"],["pInputText","","type","number","name","id","id","field_id","formControlName","id","readonly","","data-cy","id"],["severity","error",3,"text",4,"ngIf"],["severity","error",3,"text"],["severity","error",3,"hidden","text"]],template:function(e,n){1&e&&(s.Sb(0,"div",0),s.Hc(1,"\n  "),s.Sb(2,"div",1),s.Hc(3,"\n    "),s.Sb(4,"form",2),s.cc("ngSubmit",function(){return n.save()}),s.Hc(5,"\n      "),s.Sb(6,"h2",3),s.Hc(7,"\n        Create or edit a Censo Poblacion Mun\n      "),s.Rb(),s.Hc(8,"\n      "),s.Sb(9,"div",4),s.Hc(10,"\n        "),s.Sb(11,"div",5),s.Hc(12,"\n          "),s.Fc(13,x,10,0,"ng-container",6),s.Hc(14,"\n        "),s.Rb(),s.Hc(15,"\n        "),s.Sb(16,"div",5),s.Hc(17,"\n          "),s.Sb(18,"label",7),s.Hc(19,"Dp"),s.Rb(),s.Hc(20,"\n          "),s.Sb(21,"div",8),s.Hc(22,"\n            "),s.Nb(23,"input",9),s.Hc(24,"\n            "),s.Sb(25,"div",10),s.Hc(26,"\n              "),s.Fc(27,G,4,1,"ng-container",6),s.Hc(28,"\n            "),s.Rb(),s.Hc(29,"\n          "),s.Rb(),s.Hc(30,"\n        "),s.Rb(),s.Hc(31,"\n        "),s.Sb(32,"div",5),s.Hc(33,"\n          "),s.Sb(34,"label",11),s.Hc(35,"Dp Nom"),s.Rb(),s.Hc(36,"\n          "),s.Sb(37,"div",8),s.Hc(38,"\n            "),s.Nb(39,"input",12),s.Hc(40,"\n            "),s.Sb(41,"div",10),s.Hc(42,"\n              "),s.Fc(43,_,4,1,"ng-container",6),s.Hc(44,"\n            "),s.Rb(),s.Hc(45,"\n          "),s.Rb(),s.Hc(46,"\n        "),s.Rb(),s.Hc(47,"\n        "),s.Sb(48,"div",5),s.Hc(49,"\n          "),s.Sb(50,"label",13),s.Hc(51,"Anio"),s.Rb(),s.Hc(52,"\n          "),s.Sb(53,"div",8),s.Hc(54,"\n            "),s.Nb(55,"input",14),s.Hc(56,"\n            "),s.Sb(57,"div",10),s.Hc(58,"\n              "),s.Fc(59,E,4,1,"ng-container",6),s.Hc(60,"\n            "),s.Rb(),s.Hc(61,"\n          "),s.Rb(),s.Hc(62,"\n        "),s.Rb(),s.Hc(63,"\n        "),s.Sb(64,"div",5),s.Hc(65,"\n          "),s.Sb(66,"label",15),s.Hc(67,"Area Geografica"),s.Rb(),s.Hc(68,"\n          "),s.Sb(69,"div",8),s.Hc(70,"\n            "),s.Nb(71,"input",16),s.Hc(72,"\n            "),s.Sb(73,"div",10),s.Hc(74,"\n              "),s.Fc(75,B,4,1,"ng-container",6),s.Hc(76,"\n            "),s.Rb(),s.Hc(77,"\n          "),s.Rb(),s.Hc(78,"\n        "),s.Rb(),s.Hc(79,"\n        "),s.Sb(80,"div",5),s.Hc(81,"\n          "),s.Sb(82,"label",17),s.Hc(83,"Total Mujeres"),s.Rb(),s.Hc(84,"\n          "),s.Sb(85,"div",8),s.Hc(86,"\n            "),s.Nb(87,"input",18),s.Hc(88,"\n            "),s.Sb(89,"div",10),s.Hc(90,"\n              "),s.Fc(91,Q,8,5,"ng-container",6),s.Hc(92,"\n            "),s.Rb(),s.Hc(93,"\n          "),s.Rb(),s.Hc(94,"\n        "),s.Rb(),s.Hc(95,"\n        "),s.Sb(96,"div",5),s.Hc(97,"\n          "),s.Sb(98,"label",19),s.Hc(99,"Total Hombres"),s.Rb(),s.Hc(100,"\n          "),s.Sb(101,"div",8),s.Hc(102,"\n            "),s.Nb(103,"input",20),s.Hc(104,"\n            "),s.Sb(105,"div",10),s.Hc(106,"\n              "),s.Fc(107,J,8,5,"ng-container",6),s.Hc(108,"\n            "),s.Rb(),s.Hc(109,"\n          "),s.Rb(),s.Hc(110,"\n        "),s.Rb(),s.Hc(111,"\n        "),s.Sb(112,"div",5),s.Hc(113,"\n          "),s.Sb(114,"label",21),s.Hc(115,"Total"),s.Rb(),s.Hc(116,"\n          "),s.Sb(117,"div",8),s.Hc(118,"\n            "),s.Nb(119,"input",22),s.Hc(120,"\n            "),s.Sb(121,"div",10),s.Hc(122,"\n              "),s.Fc(123,Y,8,5,"ng-container",6),s.Hc(124,"\n            "),s.Rb(),s.Hc(125,"\n          "),s.Rb(),s.Hc(126,"\n        "),s.Rb(),s.Hc(127,"\n      "),s.Rb(),s.Hc(128,"\n\n      "),s.Sb(129,"div"),s.Hc(130,"\n        "),s.Sb(131,"button",23),s.cc("click",function(){return n.previousState()}),s.fc(132,"translate"),s.Rb(),s.Hc(133,"\n        "),s.Nb(134,"button",24),s.fc(135,"translate"),s.Hc(136,"\n      "),s.Rb(),s.Hc(137,"\n    "),s.Rb(),s.Hc(138,"\n  "),s.Rb(),s.Hc(139,"\n"),s.Rb(),s.Hc(140,"\n")),2&e&&(s.Ab(4),s.lc("formGroup",n.editForm),s.Ab(9),s.lc("ngIf",n.editForm.get("id").value),s.Ab(14),s.lc("ngIf",n.editForm.get("dp").invalid&&(n.editForm.get("dp").dirty||n.editForm.get("dp").touched)),s.Ab(16),s.lc("ngIf",n.editForm.get("dpNom").invalid&&(n.editForm.get("dpNom").dirty||n.editForm.get("dpNom").touched)),s.Ab(16),s.lc("ngIf",n.editForm.get("anio").invalid&&(n.editForm.get("anio").dirty||n.editForm.get("anio").touched)),s.Ab(16),s.lc("ngIf",n.editForm.get("areaGeografica").invalid&&(n.editForm.get("areaGeografica").dirty||n.editForm.get("areaGeografica").touched)),s.Ab(16),s.lc("ngIf",n.editForm.get("totalMujeres").invalid&&(n.editForm.get("totalMujeres").dirty||n.editForm.get("totalMujeres").touched)),s.Ab(16),s.lc("ngIf",n.editForm.get("totalHombres").invalid&&(n.editForm.get("totalHombres").dirty||n.editForm.get("totalHombres").touched)),s.Ab(16),s.lc("ngIf",n.editForm.get("total").invalid&&(n.editForm.get("total").dirty||n.editForm.get("total").touched)),s.Ab(8),s.lc("label",s.gc(132,12,"entity.action.cancel")),s.Ab(3),s.lc("disabled",n.editForm.invalid||n.isSaving)("label",s.gc(135,14,"entity.action.save")))},directives:[N.s,N.k,N.e,T.m,S.a,N.b,j.a,N.j,N.d,N.n,g.b,k.b],pipes:[f.d],encapsulation:2}),e})();var z=t("LRne"),X=t("EY2u"),V=t("5+tZ");let W=(()=>{class e{constructor(e,n){this.service=e,this.router=n}resolve(e){const n=e.params.id?e.params.id:null;return n?this.service.find(n).pipe(Object(V.a)(e=>e.body?Object(z.a)(e.body):(this.router.navigate(["404"]),X.a))):Object(z.a)(null)}}return e.\u0275fac=function(n){return new(n||e)(s.Zb(H),s.Zb(o.d))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ee=[{path:"",component:w,data:{authorities:[a.a.USER],pageTitle:"webCedaApp.censoPoblacionMun.home.title"},canActivate:[i.a]},{path:":id/view",component:C,resolve:{censoPoblacionMun:W},data:{authorities:[a.a.USER],pageTitle:"webCedaApp.censoPoblacionMun.home.title"},canActivate:[i.a]},{path:"new",component:K,resolve:{censoPoblacionMun:W},data:{authorities:[a.a.USER],pageTitle:"webCedaApp.censoPoblacionMun.home.title"},canActivate:[i.a]},{path:":id/edit",component:K,resolve:{censoPoblacionMun:W},data:{authorities:[a.a.USER],pageTitle:"webCedaApp.censoPoblacionMun.home.title"},canActivate:[i.a]}];let ne=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[o.h.forChild(ee)],o.h]}),e})(),te=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[c.a,ne]]}),e})()}}]);