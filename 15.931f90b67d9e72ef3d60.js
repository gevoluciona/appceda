(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{qD3P:function(e,c,o){"use strict";o.r(c),o.d(c,"ControlProcesoModule",function(){return re});var t=o("hbEq"),n=o("tyNb"),r=o("wtY+"),i=o("ADQh"),a=o("vkgz"),s=o("eIep"),l=o("pLZG"),b=o("/Po0"),d=o("exUl"),p=o("fXoL"),u=o("aYb2"),H=o("7zfz"),h=o("sYmb"),m=o("YHTv"),f=o("jIHw"),v=o("rEr+"),A=o("ofXK");const S=["controlProcesoTable"];function g(e,c){1&e&&(p.Hc(0,"\n      "),p.Sb(1,"tr"),p.Hc(2,"\n        "),p.Sb(3,"th"),p.Hc(4,"\n          "),p.Nb(5,"span",8),p.Hc(6,"\n        "),p.Rb(),p.Hc(7,"\n        "),p.Hc(8,"\n        "),p.Sb(9,"th",9),p.Hc(10,"\n          "),p.Nb(11,"span",10),p.Hc(12,"\n        "),p.Rb(),p.Hc(13,"\n        "),p.Hc(14,"\n        "),p.Sb(15,"th",11),p.Hc(16,"\n          "),p.Nb(17,"span",12),p.Hc(18,"\n        "),p.Rb(),p.Hc(19,"\n        "),p.Sb(20,"th",11),p.Hc(21,"\n          "),p.Nb(22,"span",13),p.Hc(23,"\n        "),p.Rb(),p.Hc(24,"\n        "),p.Sb(25,"th",14),p.Hc(26,"\n          "),p.Nb(27,"span",15),p.Hc(28,"\n        "),p.Rb(),p.Hc(29,"\n        "),p.Hc(30,"\n        "),p.Nb(31,"th",16),p.Hc(32,"\n      "),p.Rb(),p.Hc(33,"\n    "))}const R=function(e){return["/control-proceso",e,"view"]},y=function(e){return["/control-proceso",e,"edit"]};function P(e,c){if(1&e){const e=p.Tb();p.Hc(0,"\n      "),p.Sb(1,"tr",17),p.Hc(2,"\n        "),p.Sb(3,"td"),p.Hc(4,"\n          "),p.Sb(5,"a",18),p.Hc(6),p.Rb(),p.Hc(7,"\n        "),p.Rb(),p.Hc(8,"\n        "),p.Hc(9,"\n        "),p.Sb(10,"td",19),p.Hc(11),p.Rb(),p.Hc(12,"\n        "),p.Hc(13,"\n        "),p.Sb(14,"td"),p.Hc(15),p.fc(16,"date"),p.Rb(),p.Hc(17,"\n        "),p.Sb(18,"td"),p.Hc(19),p.fc(20,"date"),p.Rb(),p.Hc(21,"\n        "),p.Sb(22,"td",20),p.Hc(23),p.Rb(),p.Hc(24,"\n        "),p.Hc(25,"\n        "),p.Sb(26,"td"),p.Hc(27,"\n          "),p.Sb(28,"div",21),p.Hc(29,"\n            "),p.Sb(30,"p-button",22),p.Hc(31,"\n            "),p.Rb(),p.Hc(32,"\n            "),p.Sb(33,"p-button",23),p.Hc(34,"\n            "),p.Rb(),p.Hc(35,"\n            "),p.Sb(36,"p-button",24),p.cc("click",function(){p.yc(e);const o=c.$implicit;return p.ec().delete(o.id)}),p.Hc(37,"\n            "),p.Rb(),p.Hc(38,"\n          "),p.Rb(),p.Hc(39,"\n        "),p.Rb(),p.Hc(40,"\n      "),p.Rb(),p.Hc(41,"\n    ")}if(2&e){const e=c.$implicit;p.Ab(5),p.lc("routerLink",p.pc(15,R,e.id)),p.Ab(1),p.Ic(e.nomArchivo),p.Ab(4),p.mc("cdaTranslate","webCedaApp.EstadoControlProceso."+e.estado),p.Ab(1),p.Jc("\n          ",e.estado,"\n        "),p.Ab(4),p.Ic(p.hc(16,9,e.fecInicio,"medium")),p.Ab(4),p.Ic(p.hc(20,12,e.fecFin,"medium")),p.Ab(4),p.Ic(e.sourceArchivo),p.Ab(7),p.lc("routerLink",p.pc(17,R,e.id)),p.Ab(3),p.lc("routerLink",p.pc(19,y,e.id))}}const w=function(){return["/control-proceso/new"]};let C=(()=>{class e{constructor(e,c,o,t,n,r){this.controlProcesoService=e,this.messageService=c,this.activatedRoute=o,this.router=t,this.confirmationService=n,this.translateService=r,this.filtersDetails={id:{type:"number"},nomArchivo:{type:"string"},urlArchivo:{type:"string"},hashArchivo:{type:"string"},sourceArchivo:{type:"string"},fecCargue:{type:"dateTime"},estado:{type:"string"},numIntentos:{type:"number"},fecInicio:{type:"dateTime"},fecFin:{type:"dateTime"},"procesoAnalisis.id":{type:"number"}},this.itemsPerPage=b.a,this.loading=!0}ngOnInit(){this.activatedRoute.queryParams.pipe(Object(a.a)(e=>Object(d.b)(this.controlProcesoTable,e,this.filtersDetails)),Object(a.a)(()=>this.loading=!0),Object(s.a)(()=>this.controlProcesoService.query(Object(d.d)(this.controlProcesoTable.createLazyLoadMetadata(),void 0,this.filtersDetails))),Object(l.a)(e=>e.ok)).subscribe(e=>{this.paginateControlProcesos(e.body,e.headers),this.loading=!1},e=>{this.onError(e.message),console.error(e),this.loading=!1})}get filters(){return this.controlProcesoTable.filters}onLazyLoadEvent(e){const c=Object(d.c)(e,this.filtersDetails);this.router.navigate(["/control-proceso"],{queryParams:c})}delete(e){this.confirmationService.confirm({header:this.translateService.instant("entity.delete.title"),message:this.translateService.instant("webCedaApp.controlProceso.delete.question",{id:e}),accept:()=>{this.controlProcesoService.delete(e).subscribe(()=>{this.router.navigate(["/control-proceso"],{queryParams:{r:Date.now()},queryParamsHandling:"merge"})})}})}trackId(e,c){return window.console.log("aaa",c),c.id}paginateControlProcesos(e,c){this.totalItems=Number(c.get("X-Total-Count")),this.controlProcesos=e}onError(e){this.messageService.add({severity:"error",summary:e})}}return e.\u0275fac=function(c){return new(c||e)(p.Mb(u.a),p.Mb(H.h),p.Mb(n.a),p.Mb(n.d),p.Mb(H.b),p.Mb(h.e))},e.\u0275cmp=p.Gb({type:e,selectors:[["cda-control-proceso"]],viewQuery:function(e,c){if(1&e&&p.Nc(S,3),2&e){let e;p.wc(e=p.dc())&&(c.controlProcesoTable=e.first)}},decls:25,vars:14,consts:[[2,"padding-left","120px","padding-right","120px"],["id","page-heading","data-cy","ControlProcesoHeading",2,"font-weight","bold"],["cdaTranslate","webCedaApp.controlProceso.home.title"],["id","jh-create-entity","icon","pi pi-plus","iconPos","left","data-cy","entityCreateButton",1,"float-right","jh-create-entity","create-control-proceso",3,"routerLink","label"],["sortMode","multiple",3,"value","rowTrackBy","responsive","lazy","rows","totalRecords","loading","lazyLoadOnInit","paginator","onLazyLoad"],["controlProcesoTable",""],["pTemplate","header"],["pTemplate","body"],["cdaTranslate","webCedaApp.controlProceso.nomArchivo"],[1,"p-text-center",2,"width","140px"],["cdaTranslate","webCedaApp.controlProceso.estado"],[2,"width","160px"],["cdaTranslate","webCedaApp.controlProceso.fecInicio"],["cdaTranslate","webCedaApp.controlProceso.fecFin"],[1,"p-text-center",2,"width","180px"],["cdaTranslate","webCedaApp.controlProceso.sourceArchivo"],[2,"width","124px"],["data-cy","entityTable"],[3,"routerLink"],[1,"p-text-center",3,"cdaTranslate"],[1,"p-text-center"],[1,"btn-group","flex-btn-group-container"],["type","submit","icon","pi pi-eye","styleClass","p-button-info","data-cy","entityDetailsButton",3,"routerLink"],["type","submit","icon","pi pi-pencil","styleClass","p-button-warning","data-cy","entityEditButton",3,"routerLink"],["type","submit","icon","pi pi-times","styleClass","p-button-danger","data-cy","entityDeleteButton",3,"click"]],template:function(e,c){1&e&&(p.Sb(0,"div",0),p.Hc(1,"\n  "),p.Sb(2,"h2",1),p.Hc(3,"\n    "),p.Nb(4,"br"),p.Hc(5,"\n    "),p.Sb(6,"span",2),p.Hc(7,"Control Procesos"),p.Rb(),p.Hc(8,"\n    "),p.Sb(9,"p-button",3),p.fc(10,"translate"),p.Hc(11,"\n    "),p.Rb(),p.Hc(12,"\n  "),p.Rb(),p.Hc(13,"\n  "),p.Nb(14,"br"),p.Hc(15,"\n\n  "),p.Sb(16,"p-table",4,5),p.cc("onLazyLoad",function(e){return c.onLazyLoadEvent(e)}),p.Hc(18,"\n    "),p.Fc(19,g,34,0,"ng-template",6),p.Hc(20,"\n    "),p.Fc(21,P,42,21,"ng-template",7),p.Hc(22,"\n  "),p.Rb(),p.Hc(23,"\n"),p.Rb(),p.Hc(24,"\n")),2&e&&(p.Ab(9),p.lc("routerLink",p.oc(13,w))("label",p.gc(10,11,"webCedaApp.controlProceso.home.createLabel")),p.Ab(7),p.lc("value",c.controlProcesos)("rowTrackBy",c.trackId)("responsive",!0)("lazy",!0)("rows",c.itemsPerPage)("totalRecords",c.totalItems)("loading",c.loading)("lazyLoadOnInit",!1)("paginator",!0))},directives:[m.a,f.a,n.e,v.c,H.j,n.g],pipes:[h.d,A.e],encapsulation:2}),e})();const I=function(e){return["/proceso-analisis",e,"view"]};function F(e,c){if(1&e&&(p.Sb(0,"div"),p.Hc(1,"\n            "),p.Sb(2,"a",20),p.Hc(3),p.Rb(),p.Hc(4,"\n          "),p.Rb()),2&e){const e=p.ec(2);p.Ab(2),p.lc("routerLink",p.pc(2,I,e.controlProceso.procesoAnalisis.id)),p.Ab(1),p.Ic(e.controlProceso.procesoAnalisis.nombre)}}const T=function(e){return["/control-proceso",e,"edit"]};function N(e,c){if(1&e){const e=p.Tb();p.Sb(0,"div"),p.Hc(1,"\n      "),p.Sb(2,"h2",3),p.Hc(3,"\n        "),p.Sb(4,"span",4),p.Hc(5,"Control Proceso"),p.Rb(),p.Hc(6),p.Rb(),p.Hc(7,"\n\n      "),p.Nb(8,"hr"),p.Hc(9,"\n      "),p.Sb(10,"dl",5),p.Hc(11,"\n        "),p.Sb(12,"dt"),p.Sb(13,"span",6),p.Hc(14,"ID"),p.Rb(),p.Rb(),p.Hc(15,"\n        "),p.Sb(16,"dd"),p.Hc(17,"\n          "),p.Sb(18,"span"),p.Hc(19),p.Rb(),p.Hc(20,"\n        "),p.Rb(),p.Hc(21,"\n        "),p.Sb(22,"dt"),p.Sb(23,"span",7),p.Hc(24,"Nom Archivo"),p.Rb(),p.Rb(),p.Hc(25,"\n        "),p.Sb(26,"dd"),p.Hc(27,"\n          "),p.Sb(28,"span"),p.Hc(29),p.Rb(),p.Hc(30,"\n        "),p.Rb(),p.Hc(31,"\n        "),p.Sb(32,"dt"),p.Sb(33,"span",8),p.Hc(34,"Url Archivo"),p.Rb(),p.Rb(),p.Hc(35,"\n        "),p.Sb(36,"dd"),p.Hc(37,"\n          "),p.Sb(38,"span"),p.Hc(39),p.Rb(),p.Hc(40,"\n        "),p.Rb(),p.Hc(41,"\n        "),p.Sb(42,"dt"),p.Sb(43,"span",9),p.Hc(44,"Hash Archivo"),p.Rb(),p.Rb(),p.Hc(45,"\n        "),p.Sb(46,"dd"),p.Hc(47,"\n          "),p.Sb(48,"span"),p.Hc(49),p.Rb(),p.Hc(50,"\n        "),p.Rb(),p.Hc(51,"\n\n        "),p.Sb(52,"dt"),p.Sb(53,"span",10),p.Hc(54,"Source Archivo"),p.Rb(),p.Rb(),p.Hc(55,"\n        "),p.Sb(56,"dd"),p.Hc(57,"\n          "),p.Sb(58,"span"),p.Hc(59),p.Rb(),p.Hc(60,"\n        "),p.Rb(),p.Hc(61,"\n\n        "),p.Sb(62,"dt"),p.Sb(63,"span",11),p.Hc(64,"Fec Cargue"),p.Rb(),p.Rb(),p.Hc(65,"\n        "),p.Sb(66,"dd"),p.Hc(67),p.fc(68,"date"),p.Rb(),p.Hc(69,"\n        "),p.Sb(70,"dt"),p.Sb(71,"span",12),p.Hc(72,"Estado"),p.Rb(),p.Rb(),p.Hc(73,"\n        "),p.Sb(74,"dd"),p.Hc(75,"\n          "),p.Sb(76,"span",13),p.Hc(77),p.Rb(),p.Hc(78,"\n        "),p.Rb(),p.Hc(79,"\n        "),p.Sb(80,"dt"),p.Sb(81,"span",14),p.Hc(82,"Num Intentos"),p.Rb(),p.Rb(),p.Hc(83,"\n        "),p.Sb(84,"dd"),p.Hc(85,"\n          "),p.Sb(86,"span"),p.Hc(87),p.Rb(),p.Hc(88,"\n        "),p.Rb(),p.Hc(89,"\n        "),p.Sb(90,"dt"),p.Sb(91,"span",15),p.Hc(92,"Fec Inicio"),p.Rb(),p.Rb(),p.Hc(93,"\n        "),p.Sb(94,"dd"),p.Hc(95),p.fc(96,"date"),p.Rb(),p.Hc(97,"\n        "),p.Sb(98,"dt"),p.Sb(99,"span",16),p.Hc(100,"Fec Fin"),p.Rb(),p.Rb(),p.Hc(101,"\n        "),p.Sb(102,"dd"),p.Hc(103),p.fc(104,"date"),p.Rb(),p.Hc(105,"\n        "),p.Sb(106,"dt"),p.Sb(107,"span",17),p.Hc(108,"Proceso Analisis"),p.Rb(),p.Rb(),p.Hc(109,"\n        "),p.Sb(110,"dd"),p.Hc(111,"\n          "),p.Fc(112,F,5,4,"div",2),p.Hc(113,"\n        "),p.Rb(),p.Hc(114,"\n      "),p.Rb(),p.Hc(115,"\n\n      "),p.Sb(116,"button",18),p.cc("click",function(){return p.yc(e),p.ec().previousState()}),p.fc(117,"translate"),p.Rb(),p.Hc(118,"\n      "),p.Nb(119,"button",19),p.fc(120,"translate"),p.Hc(121,"\n    "),p.Rb()}if(2&e){const e=p.ec();p.Ab(6),p.Jc(" ",e.controlProceso.id,"\n      "),p.Ab(13),p.Ic(e.controlProceso.id),p.Ab(10),p.Ic(e.controlProceso.nomArchivo),p.Ab(10),p.Ic(e.controlProceso.urlArchivo),p.Ab(10),p.Ic(e.controlProceso.hashArchivo),p.Ab(10),p.Ic(e.controlProceso.sourceArchivo),p.Ab(8),p.Jc("\n          ",p.hc(68,16,e.controlProceso.fecCargue,"medium"),"\n        "),p.Ab(9),p.mc("cdaTranslate","webCedaApp.EstadoControlProceso."+e.controlProceso.estado),p.Ab(1),p.Ic(e.controlProceso.estado),p.Ab(10),p.Ic(e.controlProceso.numIntentos),p.Ab(8),p.Jc("\n          ",p.hc(96,19,e.controlProceso.fecInicio,"medium"),"\n        "),p.Ab(8),p.Jc("\n          ",p.hc(104,22,e.controlProceso.fecFin,"medium"),"\n        "),p.Ab(9),p.lc("ngIf",e.controlProceso.procesoAnalisis),p.Ab(4),p.lc("label",p.gc(117,25,"entity.action.back")),p.Ab(3),p.lc("label",p.gc(120,27,"entity.action.edit"))("routerLink",p.pc(29,T,e.controlProceso.id))}}let k=(()=>{class e{constructor(e){this.activatedRoute=e,this.controlProceso=null}ngOnInit(){this.activatedRoute.data.subscribe(({controlProceso:e})=>{this.controlProceso=e})}previousState(){window.history.back()}}return e.\u0275fac=function(c){return new(c||e)(p.Mb(n.a))},e.\u0275cmp=p.Gb({type:e,selectors:[["cda-control-proceso-detail"]],decls:8,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","controlProcesoDetailsHeading"],["cdaTranslate","webCedaApp.controlProceso.detail.title"],[1,"row-md","jh-entity-details"],["cdaTranslate","global.field.id"],["cdaTranslate","webCedaApp.controlProceso.nomArchivo"],["cdaTranslate","webCedaApp.controlProceso.urlArchivo"],["cdaTranslate","webCedaApp.controlProceso.hashArchivo"],["cdaTranslate","webCedaApp.controlProceso.sourceArchivo"],["cdaTranslate","webCedaApp.controlProceso.fecCargue"],["cdaTranslate","webCedaApp.controlProceso.estado"],[3,"cdaTranslate"],["cdaTranslate","webCedaApp.controlProceso.numIntentos"],["cdaTranslate","webCedaApp.controlProceso.fecInicio"],["cdaTranslate","webCedaApp.controlProceso.fecFin"],["cdaTranslate","webCedaApp.controlProceso.procesoAnalisis"],["pButton","","type","submit","icon","pi pi-arrow-left","data-cy","entityDetailsBackButton",1,"p-button-info",3,"label","click"],["pButton","","type","button","icon","pi pi-pencil",3,"label","routerLink"],[3,"routerLink"]],template:function(e,c){1&e&&(p.Sb(0,"div",0),p.Hc(1,"\n  "),p.Sb(2,"div",1),p.Hc(3,"\n    "),p.Fc(4,N,122,31,"div",2),p.Hc(5,"\n  "),p.Rb(),p.Hc(6,"\n"),p.Rb(),p.Hc(7,"\n")),2&e&&(p.Ab(4),p.lc("ngIf",c.controlProceso))},directives:[A.m,m.a,f.b,n.e,n.g],pipes:[A.e,h.d],encapsulation:2}),e})();var L=o("3Pt+");const q=["PROCESANDO","FINALIZADO","ERROR","REGISTRADO"];var O=o("qZY9"),x=o("7kUa"),D=o("eO1q"),E=o("arFO"),j=o("FMpt");function _(e,c){1&e&&(p.Sb(0,"p-message",33),p.fc(1,"translate"),p.Hc(2,"\n                "),p.Rb()),2&e&&p.lc("text",p.gc(1,1,"entity.validation.required"))}function M(e,c){if(1&e&&(p.Qb(0),p.Hc(1,"\n                "),p.Fc(2,_,3,3,"p-message",32),p.Hc(3,"\n              "),p.Pb()),2&e){const e=p.ec();p.Ab(2),p.lc("ngIf",e.editForm.get("nomArchivo").errors.required)}}function B(e,c){1&e&&(p.Sb(0,"p-message",33),p.fc(1,"translate"),p.Hc(2,"\n                "),p.Rb()),2&e&&p.lc("text",p.gc(1,1,"entity.validation.required"))}function z(e,c){if(1&e&&(p.Qb(0),p.Hc(1,"\n                "),p.Fc(2,B,3,3,"p-message",32),p.Hc(3,"\n              "),p.Pb()),2&e){const e=p.ec();p.Ab(2),p.lc("ngIf",e.editForm.get("urlArchivo").errors.required)}}function J(e,c){1&e&&(p.Sb(0,"p-message",33),p.fc(1,"translate"),p.Hc(2,"\n                "),p.Rb()),2&e&&p.lc("text",p.gc(1,1,"entity.validation.required"))}function U(e,c){if(1&e&&(p.Qb(0),p.Hc(1,"\n                "),p.Fc(2,J,3,3,"p-message",32),p.Hc(3,"\n              "),p.Pb()),2&e){const e=p.ec();p.Ab(2),p.lc("ngIf",e.editForm.get("sourceArchivo").errors.required)}}function Q(e,c){1&e&&(p.Sb(0,"p-message",33),p.fc(1,"translate"),p.Hc(2,"\n                "),p.Rb()),2&e&&p.lc("text",p.gc(1,1,"entity.validation.required"))}function Z(e,c){if(1&e&&(p.Qb(0),p.Hc(1,"\n                "),p.Fc(2,Q,3,3,"p-message",32),p.Hc(3,"\n                "),p.Sb(4,"p-message",34),p.fc(5,"translate"),p.Hc(6,"\n                "),p.Rb(),p.Hc(7,"\n              "),p.Pb()),2&e){const e=p.ec();p.Ab(2),p.lc("ngIf",e.editForm.get("fecCargue").errors.required),p.Ab(2),p.lc("hidden",!e.editForm.get("fecCargue").errors.ZonedDateTimelocal)("text",p.gc(5,3,"entity.validation.ZonedDateTimelocal"))}}function G(e,c){1&e&&p.Hc(0),2&e&&p.Ic(c.$implicit.label)}function Y(e,c){1&e&&(p.Sb(0,"p-message",33),p.fc(1,"translate"),p.Hc(2,"\n                "),p.Rb()),2&e&&p.lc("text",p.gc(1,1,"entity.validation.required"))}function K(e,c){if(1&e&&(p.Qb(0),p.Hc(1,"\n                "),p.Fc(2,Y,3,3,"p-message",32),p.Hc(3,"\n              "),p.Pb()),2&e){const e=p.ec();p.Ab(2),p.lc("ngIf",e.editForm.get("estado").errors.required)}}function X(e,c){1&e&&(p.Sb(0,"p-message",33),p.fc(1,"translate"),p.Hc(2,"\n                "),p.Rb()),2&e&&p.lc("text",p.gc(1,1,"entity.validation.required"))}function $(e,c){if(1&e&&(p.Qb(0),p.Hc(1,"\n                "),p.Fc(2,X,3,3,"p-message",32),p.Hc(3,"\n              "),p.Pb()),2&e){const e=p.ec();p.Ab(2),p.lc("ngIf",e.editForm.get("procesoAnalisis").errors.required)}}let V=(()=>{class e{constructor(e,c,o,t,n,r,i){this.messageService=e,this.confirmationService=c,this.controlProcesoService=o,this.procesoAnalisisService=t,this.translateService=n,this.activatedRoute=r,this.fb=i,this.isSaving=!1,this.procesoAnalisisOptions=null,this.estadoOptions=q.map(e=>({label:e.toString(),value:e})),this.editForm=this.fb.group({id:[],nomArchivo:[null,[L.r.required]],urlArchivo:[null,[L.r.required]],hashArchivo:[],sourceArchivo:[null,[L.r.required]],fecCargue:[null,[L.r.required]],estado:[null,[L.r.required]],numIntentos:[],fecInicio:[],fecFin:[],procesoAnalisis:[null,[L.r.required]]})}ngOnInit(){this.isSaving=!1,this.activatedRoute.data.subscribe(({controlProceso:e})=>{this.updateForm(e)}),this.loadAllProcesoAnalises()}loadAllProcesoAnalises(){this.procesoAnalisisService.query().subscribe(e=>this.procesoAnalisisOptions=e.body,e=>this.onError(e.message))}updateForm(e){e?(this.editForm.reset(Object.assign({},e),{emitEvent:!1,onlySelf:!0}),e.procesoAnalisis&&(this.procesoAnalisisOptions=[e.procesoAnalisis],this.procesoAnalisisFilterValue=e.procesoAnalisis.nombre)):this.editForm.reset({fecCargue:new Date,fecInicio:new Date,fecFin:new Date})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.editForm.value;this.subscribeToSaveResponse(null!==e.id?this.controlProcesoService.update(e):this.controlProcesoService.create(e))}deleteProceso(){this.confirmationService.confirm({header:this.translateService.instant("entity.delete.title"),message:this.translateService.instant("webCedaApp.controlProceso.delete.questionproceso"),accept:()=>{const e=this.editForm.value;window.console.log(e),this.subscribeToDeleteResponse(this.controlProcesoService.deleteProceso(e.hashArchivo,e.procesoAnalisis.codProceso))}})}subscribeToDeleteResponse(e){e.subscribe(e=>this.onDeleteProcesoSuccess(e),()=>this.onDeleteProcesoError())}onDeleteProcesoSuccess(e){}onDeleteProcesoError(){}subscribeToSaveResponse(e){e.subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(){this.isSaving=!1}onError(e){this.messageService.add({severity:"error",summary:e})}}return e.\u0275fac=function(c){return new(c||e)(p.Mb(H.h),p.Mb(H.b),p.Mb(u.a),p.Mb(O.a),p.Mb(h.e),p.Mb(n.a),p.Mb(L.c))},e.\u0275cmp=p.Gb({type:e,selectors:[["cda-control-proceso-update"]],decls:169,vars:22,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","cda-control-proceso-heading","data-cy","ControlProcesoCreateUpdateHeading","cdaTranslate","webCedaApp.controlProceso.home.title",2,"font-weight","bold"],["cdaTranslate","webCedaApp.controlProceso.home.createOrEditLabel"],[1,"form-grid","p-fluid"],[1,"p-field","p-grid"],["cdaTranslate","webCedaApp.controlProceso.nomArchivo","for","field_nomArchivo",1,"p-col-12","p-md-2"],[1,"p-col-12","p-md-10"],["pInputText","","type","text","name","nomArchivo","id","field_nomArchivo","formControlName","nomArchivo","data-cy","nomArchivo"],[1,"validation-messages"],[4,"ngIf"],["cdaTranslate","webCedaApp.controlProceso.urlArchivo","for","field_urlArchivo",1,"p-col-12","p-md-2"],["pInputText","","type","text","name","urlArchivo","id","field_urlArchivo","formControlName","urlArchivo","data-cy","urlArchivo"],["cdaTranslate","webCedaApp.controlProceso.sourceArchivo","for","field_sourceArchivo",1,"p-col-12","p-md-2"],["pInputText","","type","text","name","sourceArchivo","id","sourceArchivo","formControlName","sourceArchivo","data-cy","sourceArchivo"],["cdaTranslate","webCedaApp.controlProceso.fecCargue","for","field_fecCargue",1,"p-col-12","p-md-2"],["id","field_fecCargue","formControlName","fecCargue","data-cy","fecCargue",3,"showIcon","showTime"],["cdaTranslate","webCedaApp.controlProceso.estado","for","field_estado",1,"p-col-12","p-md-2"],["name","estado","formControlName","estado","id","field_estado","placeholder","Choose","data-cy","estado",3,"options"],["pTemplate","item"],["cdaTranslate","webCedaApp.controlProceso.numIntentos","for","field_numIntentos",1,"p-col-12","p-md-2"],["pInputText","","type","number","name","numIntentos","id","field_numIntentos","formControlName","numIntentos","data-cy","numIntentos"],["cdaTranslate","webCedaApp.controlProceso.fecInicio","for","field_fecInicio",1,"p-col-12","p-md-2"],["id","field_fecInicio","formControlName","fecInicio","data-cy","fecInicio",3,"showIcon","showTime"],["cdaTranslate","webCedaApp.controlProceso.fecFin","for","field_fecFin",1,"p-col-12","p-md-2"],["id","field_fecFin","formControlName","fecFin","data-cy","fecFin",3,"showIcon","showTime"],["cdaTranslate","webCedaApp.controlProceso.procesoAnalisis","for","field_proceso_analisis",1,"p-col-12","p-md-2"],["id","field_proceso_analisis","formControlName","procesoAnalisis","placeholder","Choose","optionLabel","nombre","dataKey","id","data-cy","procesoAnalisis",3,"options"],["pButton","","type","submit","id","save-entity","icon","pi pi-save","data-cy","entityCreateSaveButton",2,"float","right",3,"disabled","label"],["pButton","","type","button","id","cancel-save","icon","pi pi-ban",1,"p-button-secondary",2,"float","right",3,"label","click"],["label","Borrar registro","type","submit","icon","pi pi-search","styleClass","p-button-danger","data-cy","entityDeleteButton",2,"float","left",3,"click"],["severity","error",3,"text",4,"ngIf"],["severity","error",3,"text"],["severity","error",3,"hidden","text"]],template:function(e,c){1&e&&(p.Sb(0,"div",0),p.Hc(1,"\n  "),p.Sb(2,"div",1),p.Hc(3,"\n    "),p.Sb(4,"form",2),p.cc("ngSubmit",function(){return c.save()}),p.Hc(5,"\n      "),p.Nb(6,"br"),p.Hc(7,"\n      "),p.Sb(8,"h2",3),p.Hc(9,"\n        Create or edit a Control Proceso\n      "),p.Rb(),p.Hc(10,"\n      "),p.Nb(11,"h4",4),p.Hc(12,"\n      "),p.Nb(13,"br"),p.Hc(14,"\n      "),p.Sb(15,"div",5),p.Hc(16,"\n        "),p.Hc(17,"\n        "),p.Sb(18,"div",6),p.Hc(19,"\n          "),p.Sb(20,"label",7),p.Hc(21,"Nom Archivo"),p.Rb(),p.Hc(22,"\n          "),p.Sb(23,"div",8),p.Hc(24,"\n            "),p.Nb(25,"input",9),p.Hc(26,"\n            "),p.Sb(27,"div",10),p.Hc(28,"\n              "),p.Fc(29,M,4,1,"ng-container",11),p.Hc(30,"\n            "),p.Rb(),p.Hc(31,"\n          "),p.Rb(),p.Hc(32,"\n        "),p.Rb(),p.Hc(33,"\n        "),p.Sb(34,"div",6),p.Hc(35,"\n          "),p.Sb(36,"label",12),p.Hc(37,"Url Archivo"),p.Rb(),p.Hc(38,"\n          "),p.Sb(39,"div",8),p.Hc(40,"\n            "),p.Nb(41,"input",13),p.Hc(42,"\n            "),p.Sb(43,"div",10),p.Hc(44,"\n              "),p.Fc(45,z,4,1,"ng-container",11),p.Hc(46,"\n            "),p.Rb(),p.Hc(47,"\n          "),p.Rb(),p.Hc(48,"\n        "),p.Rb(),p.Hc(49,"\n        "),p.Hc(50,"\n        "),p.Sb(51,"div",6),p.Hc(52,"\n          "),p.Sb(53,"label",14),p.Hc(54,"Fuente"),p.Rb(),p.Hc(55,"\n          "),p.Sb(56,"div",8),p.Hc(57,"\n            "),p.Nb(58,"input",15),p.Hc(59,"\n            "),p.Sb(60,"div",10),p.Hc(61,"\n              "),p.Fc(62,U,4,1,"ng-container",11),p.Hc(63,"\n            "),p.Rb(),p.Hc(64,"\n          "),p.Rb(),p.Hc(65,"\n        "),p.Rb(),p.Hc(66,"\n\n        "),p.Sb(67,"div",6),p.Hc(68,"\n          "),p.Sb(69,"label",16),p.Hc(70,"Fec Cargue"),p.Rb(),p.Hc(71,"\n          "),p.Sb(72,"div",8),p.Hc(73,"\n            "),p.Nb(74,"p-calendar",17),p.Hc(75,"\n            "),p.Sb(76,"div",10),p.Hc(77,"\n              "),p.Fc(78,Z,8,5,"ng-container",11),p.Hc(79,"\n            "),p.Rb(),p.Hc(80,"\n          "),p.Rb(),p.Hc(81,"\n        "),p.Rb(),p.Hc(82,"\n        "),p.Sb(83,"div",6),p.Hc(84,"\n          "),p.Sb(85,"label",18),p.Hc(86,"Estado"),p.Rb(),p.Hc(87,"\n          "),p.Sb(88,"div",8),p.Hc(89,"\n            "),p.Sb(90,"p-dropdown",19),p.Hc(91,"\n              "),p.Fc(92,G,1,1,"ng-template",20),p.Hc(93,"\n            "),p.Rb(),p.Hc(94,"\n            "),p.Sb(95,"div",10),p.Hc(96,"\n              "),p.Fc(97,K,4,1,"ng-container",11),p.Hc(98,"\n            "),p.Rb(),p.Hc(99,"\n          "),p.Rb(),p.Hc(100,"\n        "),p.Rb(),p.Hc(101,"\n        "),p.Sb(102,"div",6),p.Hc(103,"\n          "),p.Sb(104,"label",21),p.Hc(105,"Num Intentos"),p.Rb(),p.Hc(106,"\n          "),p.Sb(107,"div",8),p.Hc(108,"\n            "),p.Nb(109,"input",22),p.Hc(110,"\n          "),p.Rb(),p.Hc(111,"\n        "),p.Rb(),p.Hc(112,"\n        "),p.Sb(113,"div",6),p.Hc(114,"\n          "),p.Sb(115,"label",23),p.Hc(116,"Fec Inicio"),p.Rb(),p.Hc(117,"\n          "),p.Sb(118,"div",8),p.Hc(119,"\n            "),p.Nb(120,"p-calendar",24),p.Hc(121,"\n          "),p.Rb(),p.Hc(122,"\n        "),p.Rb(),p.Hc(123,"\n        "),p.Sb(124,"div",6),p.Hc(125,"\n          "),p.Sb(126,"label",25),p.Hc(127,"Fec Fin"),p.Rb(),p.Hc(128,"\n          "),p.Sb(129,"div",8),p.Hc(130,"\n            "),p.Nb(131,"p-calendar",26),p.Hc(132,"\n          "),p.Rb(),p.Hc(133,"\n        "),p.Rb(),p.Hc(134,"\n        "),p.Sb(135,"div",6),p.Hc(136,"\n          "),p.Sb(137,"label",27),p.Hc(138,"Proceso Analisis"),p.Rb(),p.Hc(139,"\n          "),p.Sb(140,"div",8),p.Hc(141,"\n            "),p.Nb(142,"p-dropdown",28),p.Hc(143,"\n            "),p.Sb(144,"div",10),p.Hc(145,"\n              "),p.Fc(146,$,4,1,"ng-container",11),p.Hc(147,"\n            "),p.Rb(),p.Hc(148,"\n          "),p.Rb(),p.Hc(149,"\n        "),p.Rb(),p.Hc(150,"\n      "),p.Rb(),p.Hc(151,"\n\n      "),p.Sb(152,"div"),p.Hc(153,"\n        "),p.Nb(154,"button",29),p.fc(155,"translate"),p.Hc(156,"\n        "),p.Sb(157,"button",30),p.cc("click",function(){return c.previousState()}),p.fc(158,"translate"),p.Rb(),p.Hc(159,"\n      "),p.Rb(),p.Hc(160,"\n\n      "),p.Nb(161,"br"),p.Nb(162,"br"),p.Hc(163,"\n    "),p.Rb(),p.Hc(164,"\n    "),p.Sb(165,"p-button",31),p.cc("click",function(){return c.deleteProceso()}),p.Rb(),p.Hc(166,"\n  "),p.Rb(),p.Hc(167,"\n"),p.Rb(),p.Hc(168,"\n")),2&e&&(p.Ab(4),p.lc("formGroup",c.editForm),p.Ab(25),p.lc("ngIf",c.editForm.get("nomArchivo").invalid&&(c.editForm.get("nomArchivo").dirty||c.editForm.get("nomArchivo").touched)),p.Ab(16),p.lc("ngIf",c.editForm.get("urlArchivo").invalid&&(c.editForm.get("urlArchivo").dirty||c.editForm.get("urlArchivo").touched)),p.Ab(17),p.lc("ngIf",c.editForm.get("sourceArchivo").invalid&&(c.editForm.get("sourceArchivo").dirty||c.editForm.get("sourceArchivo").touched)),p.Ab(12),p.lc("showIcon",!0)("showTime",!0),p.Ab(4),p.lc("ngIf",c.editForm.get("fecCargue").invalid&&(c.editForm.get("fecCargue").dirty||c.editForm.get("fecCargue").touched)),p.Ab(12),p.lc("options",c.estadoOptions),p.Ab(7),p.lc("ngIf",c.editForm.get("estado").invalid&&(c.editForm.get("estado").dirty||c.editForm.get("estado").touched)),p.Ab(23),p.lc("showIcon",!0)("showTime",!0),p.Ab(11),p.lc("showIcon",!0)("showTime",!0),p.Ab(11),p.lc("options",c.procesoAnalisisOptions),p.Ab(4),p.lc("ngIf",c.editForm.get("procesoAnalisis").invalid&&(c.editForm.get("procesoAnalisis").dirty||c.editForm.get("procesoAnalisis").touched)),p.Ab(8),p.lc("disabled",c.editForm.invalid||c.isSaving)("label",p.gc(155,18,"entity.action.save")),p.Ab(3),p.lc("label",p.gc(158,20,"entity.action.cancel")))},directives:[L.s,L.k,L.e,m.a,L.b,x.a,L.j,L.d,A.m,D.a,E.a,H.j,L.n,f.b,f.a,j.b],pipes:[h.d],encapsulation:2}),e})();var W=o("LRne"),ee=o("EY2u"),ce=o("5+tZ");let oe=(()=>{class e{constructor(e,c){this.service=e,this.router=c}resolve(e){const c=e.params.id?e.params.id:null;return c?this.service.find(c).pipe(Object(ce.a)(e=>e.body?Object(W.a)(e.body):(this.router.navigate(["404"]),ee.a))):Object(W.a)(null)}}return e.\u0275fac=function(c){return new(c||e)(p.Zb(u.a),p.Zb(n.d))},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const te=[{path:"",component:C,data:{authorities:[r.a.USER],defaultSort:"id,asc",pageTitle:"webCedaApp.controlProceso.home.title"},canActivate:[i.a]},{path:":id/view",component:k,resolve:{controlProceso:oe},data:{authorities:[r.a.USER],pageTitle:"webCedaApp.controlProceso.home.title"},canActivate:[i.a]},{path:"new",component:V,resolve:{controlProceso:oe},data:{authorities:[r.a.USER],pageTitle:"webCedaApp.controlProceso.home.title"},canActivate:[i.a]},{path:":id/edit",component:V,resolve:{controlProceso:oe},data:{authorities:[r.a.USER],pageTitle:"webCedaApp.controlProceso.home.title"},canActivate:[i.a]}];let ne=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({imports:[[n.h.forChild(te)],n.h]}),e})(),re=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({imports:[[t.a,ne]]}),e})()}}]);