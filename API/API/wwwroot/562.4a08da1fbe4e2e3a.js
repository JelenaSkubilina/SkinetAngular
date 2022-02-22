"use strict";(self.webpackChunkAPI=self.webpackChunkAPI||[]).push([[562],{2562:(U,a,s)=>{s.r(a),s.d(a,{OrdersModule:()=>T});var n=s(9808),d=s(6553),t=s(6435),l=s(4766),u=s(520);let c=(()=>{class e{constructor(r){this.http=r,this.baseUrl=l.N.apiUrl}getUserOrders(){return this.http.get(this.baseUrl+"orders")}getOrderById(r){return this.http.get(this.baseUrl+"orders/"+r)}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(u.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function p(e,o){if(1&e&&(t.TgZ(0,"tr",4),t.TgZ(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"th"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"th"),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"th"),t._uU(10),t.qZA(),t.qZA()),2&e){const r=o.$implicit;t.MGl("routerLink","/orders/",r.id,""),t.xp6(2),t.hij("# ",r.id,""),t.xp6(2),t.Oqu(t.xi3(5,5,r.orderDate,"medium")),t.xp6(3),t.Oqu(t.lcZ(8,8,r.total)),t.xp6(3),t.Oqu(r.status)}}let m=(()=>{class e{constructor(r){this.ordersService=r}ngOnInit(){this.getOrders()}getOrders(){this.ordersService.getUserOrders().subscribe(r=>{this.orders=r},r=>{console.log(r)})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(c))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-orders"]],decls:14,vars:1,consts:[[1,"container","mt-5"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"table",1),t.TgZ(2,"thead",2),t.TgZ(3,"tr"),t.TgZ(4,"th"),t._uU(5,"Order"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Date"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Total"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Status"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"tbody"),t.YNc(13,p,11,10,"tr",3),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(13),t.Q6J("ngForOf",i.orders))},directives:[n.sg,d.rH],pipes:[n.uU,n.H9],styles:[""]}),e})();var h=s(9957),g=s(8816),O=s(9350);function Z(e,o){if(1&e&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t._UZ(2,"app-basket-summary",4),t.qZA(),t.TgZ(3,"div",5),t._UZ(4,"app-order-totals",6),t.qZA(),t.qZA()),2&e){const r=t.oxw();t.xp6(2),t.Q6J("items",r.order.orderItems)("isBasket",!1)("isOrder",!0),t.xp6(2),t.Q6J("shippingPrice",r.order.shippingPrice)("subtotal",r.order.subtotal)("total",r.order.total)}}const v=[{path:"",component:m},{path:":id",component:(()=>{class e{constructor(r,i,y){this.ordersService=r,this.activatedRoute=i,this.bcService=y,this.bcService.set("@orderDetails","")}ngOnInit(){this.loadOrder()}loadOrder(){this.ordersService.getOrderById(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe(r=>{this.order=r,this.bcService.set("@orderDetails",`Order# ${r.id} - ${r.status}`)},r=>{console.log(r)})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(c),t.Y36(d.gz),t.Y36(h.pm))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-order-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0),t.YNc(1,Z,5,6,"div",1),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngIf",i.order))},directives:[n.O5,g.b,O.S],styles:[""]}),e})(),data:{breadcrumb:{alias:"orderDetails"}}}];let f=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(v)],d.Bz]}),e})();var A=s(5349);let T=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[n.ez,A.m,f]]}),e})()}}]);