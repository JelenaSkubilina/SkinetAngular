"use strict";
(self["webpackChunkAPI"] = self["webpackChunkAPI"] || []).push([["main"],{

/***/ 740:
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let AccountService = class AccountService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    loadCurrentUser(token) {
        if (token === null) {
            this.currentUserSource.next(null);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.http.get(this.baseUrl + 'account', { headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
                this.currentUserSource.next(user);
            }
        }));
    }
    login(values) {
        return this.http.post(this.baseUrl + 'account/login', values).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
                this.currentUserSource.next(user);
            }
        }));
    }
    register(values) {
        return this.http.post(this.baseUrl + 'account/register', values).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
            }
        }));
    }
    logout() {
        localStorage.removeItem('token');
        this.currentUserSource.next(null);
        this.router.navigateByUrl('/');
    }
    checkEmailExists(email) {
        return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
    }
    getUserAddress() {
        return this.http.get(this.baseUrl + 'account/address');
    }
    updateUserAddress(address) {
        return this.http.put(this.baseUrl + 'account/address', address);
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AccountService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 7574);
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/not-found/not-found.component */ 2383);
/* harmony import */ var _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/server-error/server-error.component */ 8863);
/* harmony import */ var _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/test-error/test-error.component */ 5611);
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home/home.component */ 4988);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    { path: '', component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, data: { breadcrumb: 'Home' } },
    { path: 'test-error', component: _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_3__.TestErrorComponent, data: { breadcrumb: 'Test Errors' } },
    { path: 'server-error', component: _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_2__.ServerErrorComponent, data: { breadcrumb: 'Server Errors' } },
    { path: 'not-found', component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent, data: { breadcrumb: 'Not Found' } },
    { path: 'shop', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shop_shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shop/shop.module */ 7838)).then(mod => mod.ShopModule), data: { breadcrumb: 'Shop' } },
    { path: 'basket', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_basket_basket_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basket/basket.module */ 5801)).then(mod => mod.BasketModule), data: { breadcrumb: 'Basket' } },
    {
        path: 'checkout',
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_checkout_checkout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 8400)).then(mod => mod.CheckoutModule), data: { breadcrumb: 'Checkout' }
    },
    { path: 'account', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 3879)).then(mod => mod.AccountModule), data: { breadcrumb: { skip: true } } },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account.service */ 740);
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket/basket.service */ 9972);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AppComponent = class AppComponent {
    constructor(basketService, accountService) {
        this.basketService = basketService;
        this.accountService = accountService;
        this.title = 'Skinet';
    }
    ngOnInit() {
        this.loadBasket();
        this.loadCurrentUser();
    }
    loadBasket() {
        const basketId = localStorage.getItem("basket_id");
        if (basketId) {
            this.basketService.getBasket(basketId).subscribe(() => {
                console.log('initialized basket');
            }, error => {
                console.log(error);
            });
        }
    }
    loadCurrentUser() {
        const token = localStorage.getItem("token");
        this.accountService.loadCurrentUser(token).subscribe(() => {
            console.log('loaded user');
        }, error => {
            console.log(error);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService },
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService }
];
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 3947);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ 422);
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ 3743);
/* harmony import */ var _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/interceptors/loading.interceptor */ 1295);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ 3467);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_6__.HomeModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule,
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_5__.LoadingInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptor, multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 9972:
/*!******************************************!*\
  !*** ./src/app/basket/basket.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketService": () => (/* binding */ BasketService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _shared_models_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/basket */ 7704);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let BasketService = class BasketService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.basketSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.basket$ = this.basketSource.asObservable();
        this.basketTotalSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.basketTotal$ = this.basketTotalSource.asObservable();
        this.shipping = 0;
    }
    createPaymentIntent() {
        return this.http.post(this.baseUrl + 'payment/' + this.getCurrentBasketValue().id, {})
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((basket) => {
            this.basketSource.next(basket);
            console.log(this.getCurrentBasketValue());
        }));
    }
    setShippingPrice(deliveryMethod) {
        this.shipping = deliveryMethod.price;
        const basket = this.getCurrentBasketValue();
        basket.deliveryMethodId = deliveryMethod.id;
        basket.shippingPrice = deliveryMethod.price;
        this.calculateTotals();
        this.setBasket(basket);
    }
    getBasket(id) {
        return this.http.get(this.baseUrl + 'basket?id=' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((basket) => {
            this.basketSource.next(basket);
            this.shipping = basket.shippingPrice;
            this.calculateTotals();
        }));
    }
    setBasket(basket) {
        return this.http.post(this.baseUrl + 'basket', basket).subscribe((response) => {
            this.basketSource.next(response);
            this.calculateTotals();
        }, error => {
            console.log(error);
        });
    }
    calculateTotals() {
        const basket = this.getCurrentBasketValue();
        const shipping = this.shipping;
        ;
        const subtotal = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
        const total = subtotal + shipping;
        this.basketTotalSource.next({ shipping, total, subtotal });
    }
    getCurrentBasketValue() {
        return this.basketSource.value;
    }
    addItemToBasket(item, quantity = 1) {
        var _a;
        const itemToAdd = this.mapProductItemToBasketItem(item, quantity);
        const basket = (_a = this.getCurrentBasketValue()) !== null && _a !== void 0 ? _a : this.createBasket();
        basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
        this.setBasket(basket);
    }
    incrementItemQuantity(item) {
        const basket = this.getCurrentBasketValue();
        const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
        basket.items[foundItemIndex].quantity++;
        this.setBasket(basket);
    }
    decrementItemQuantity(item) {
        const basket = this.getCurrentBasketValue();
        const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
        if (basket.items[foundItemIndex].quantity > 1) {
            basket.items[foundItemIndex].quantity--;
            this.setBasket(basket);
        }
        else {
            this.removeItemFromBasket(item);
        }
    }
    removeItemFromBasket(item) {
        const basket = this.getCurrentBasketValue();
        if (basket.items.some(x => x.id == item.id)) {
            basket.items = basket.items.filter(i => i.id != item.id);
            if (basket.items.length > 0) {
                this.setBasket(basket);
            }
            else {
                this.deleteBasket(basket);
            }
        }
    }
    deleteLocalBasket(id) {
        this.basketSource.next(null);
        this.basketTotalSource.next(null);
        localStorage.removeItem('basket_id');
    }
    deleteBasket(basket) {
        return this.http.delete(this.baseUrl + 'basket?id=' + basket.id).subscribe(() => {
            this.basketSource.next(null);
            this.basketTotalSource.next(null);
            localStorage.removeItem('basket_id');
        }, error => {
            console.log(error);
        });
    }
    addOrUpdateItem(items, itemToAdd, quantity) {
        const index = items.findIndex(i => i.id === itemToAdd.id);
        if (index === -1) {
            itemToAdd.quantity = quantity;
            items.push(itemToAdd);
        }
        else {
            items[index].quantity += quantity;
        }
        return items;
    }
    createBasket() {
        const basket = new _shared_models_basket__WEBPACK_IMPORTED_MODULE_1__.Basket();
        localStorage.setItem('basket_id', basket.id);
        return basket;
    }
    mapProductItemToBasketItem(item, quantity) {
        return {
            id: item.id,
            productName: item.name,
            price: item.price,
            pictureUrl: item.pictureUrl,
            quantity,
            brand: item.productBrand,
            type: item.productType
        };
    }
};
BasketService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
BasketService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], BasketService);



/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xng-breadcrumb */ 6993);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 9206);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ 2383);
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-header/section-header.component */ 7236);
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-error/server-error.component */ 8863);
/* harmony import */ var _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-error/test-error.component */ 5611);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent, _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__.TestErrorComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent, _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_4__.ServerErrorComponent, _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_3__.SectionHeaderComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
            xng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule.forRoot({
                positionClass: 'toast-bottom-right',
                preventDuplicates: true
            })
        ],
        exports: [
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent,
            _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_3__.SectionHeaderComponent
        ]
    })
], CoreModule);



/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../account/account.service */ 740);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AuthGuard = class AuthGuard {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(auth => {
            if (auth) {
                return true;
            }
            this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } });
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthGuard = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 422:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 7418);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ErrorInterceptor = class ErrorInterceptor {
    constructor(router, toaster) {
        this.router = router;
        this.toaster = toaster;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
            if (error) {
                if (error.status === 400) {
                    if (error.error.errors) {
                        throw error.error;
                    }
                    else {
                        this.toaster.error(error.error.message, error.error.statusCode);
                    }
                }
                if (error.status === 401) {
                    this.toaster.error(error.error.message, error.error.statusCode);
                }
                if (error.status === 404) {
                    this.router.navigateByUrl('/not-found');
                }
                if (error.status === 500) {
                    const navigationExtras = {
                        state: { error: error.error }
                    };
                    this.router.navigateByUrl('/server-error');
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
ErrorInterceptor = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ErrorInterceptor);



/***/ }),

/***/ 3743:
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let JwtInterceptor = class JwtInterceptor {
    constructor() { }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [];
JwtInterceptor = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()
], JwtInterceptor);



/***/ }),

/***/ 1295:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/busy.service */ 9978);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4661);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let LoadingInterceptor = class LoadingInterceptor {
    constructor(busyService) {
        this.busyService = busyService;
    }
    intercept(request, next) {
        if (request.method === 'POST' && request.url.includes('orders')) {
            return next.handle(request);
        }
        if (request.method === 'DELETE') {
            return next.handle(request);
        }
        if (request.url.includes('emailexists')) {
            return next.handle(request);
        }
        this.busyService.busy();
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
            this.busyService.idle();
        }));
    }
};
LoadingInterceptor.ctorParameters = () => [
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_0__.BusyService }
];
LoadingInterceptor = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], LoadingInterceptor);



/***/ }),

/***/ 9206:
/*!***************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _nav_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.component.html?ngResource */ 8526);
/* harmony import */ var _nav_bar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar.component.css?ngResource */ 3790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../account/account.service */ 740);
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basket/basket.service */ 9972);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let NavBarComponent = class NavBarComponent {
    constructor(basketService, accountService) {
        this.basketService = basketService;
        this.accountService = accountService;
    }
    ngOnInit() {
        this.basket$ = this.basketService.basket$;
        this.currentUser$ = this.accountService.currentUser$;
    }
    logout() {
        this.accountService.logout();
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_3__.BasketService },
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService }
];
NavBarComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-nav-bar',
        template: _nav_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nav_bar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavBarComponent);



/***/ }),

/***/ 2383:
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component.html?ngResource */ 3819);
/* harmony import */ var _not_found_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.css?ngResource */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-not-found',
        template: _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_not_found_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundComponent);



/***/ }),

/***/ 7236:
/*!*****************************************************************!*\
  !*** ./src/app/core/section-header/section-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionHeaderComponent": () => (/* binding */ SectionHeaderComponent)
/* harmony export */ });
/* harmony import */ var _section_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-header.component.html?ngResource */ 6702);
/* harmony import */ var _section_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-header.component.css?ngResource */ 5442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xng-breadcrumb */ 6993);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SectionHeaderComponent = class SectionHeaderComponent {
    constructor(bcService) {
        this.bcService = bcService;
    }
    ngOnInit() {
        this.breadcrumb$ = this.bcService.breadcrumbs$;
    }
};
SectionHeaderComponent.ctorParameters = () => [
    { type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbService }
];
SectionHeaderComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-section-header',
        template: _section_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_section_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SectionHeaderComponent);



/***/ }),

/***/ 8863:
/*!*************************************************************!*\
  !*** ./src/app/core/server-error/server-error.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorComponent": () => (/* binding */ ServerErrorComponent)
/* harmony export */ });
/* harmony import */ var _server_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-error.component.html?ngResource */ 9071);
/* harmony import */ var _server_error_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-error.component.css?ngResource */ 237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ServerErrorComponent = class ServerErrorComponent {
    constructor(router) {
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;
    }
    ngOnInit() {
    }
};
ServerErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ServerErrorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-server-error',
        template: _server_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_server_error_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServerErrorComponent);



/***/ }),

/***/ 9978:
/*!***********************************************!*\
  !*** ./src/app/core/services/busy.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusyService": () => (/* binding */ BusyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-spinner */ 3947);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let BusyService = class BusyService {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
    }
    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'timer',
            bdColor: 'rgba(255,255,255,0.7)',
            color: '#333333'
        });
    }
    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
};
BusyService.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_0__.NgxSpinnerService }
];
BusyService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], BusyService);



/***/ }),

/***/ 5611:
/*!*********************************************************!*\
  !*** ./src/app/core/test-error/test-error.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestErrorComponent": () => (/* binding */ TestErrorComponent)
/* harmony export */ });
/* harmony import */ var _test_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-error.component.html?ngResource */ 4121);
/* harmony import */ var _test_error_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-error.component.css?ngResource */ 4918);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TestErrorComponent = class TestErrorComponent {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
    }
    ngOnInit() {
    }
    get404Error() {
        this.http.get(this.baseUrl + 'products/42').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get500Error() {
        this.http.get(this.baseUrl + 'buggy/servererror').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400Error() {
        this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400ValidationError() {
        this.http.get(this.baseUrl + 'products/fortytwo').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
            this.validationErrors = error.errors;
        });
    }
};
TestErrorComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
TestErrorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-test-error',
        template: _test_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_test_error_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestErrorComponent);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 4988);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ],
        exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent]
    })
], HomeModule);



/***/ }),

/***/ 4988:
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 5052);
/* harmony import */ var _home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css?ngResource */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-home',
        template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 3449:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/basket-summary/basket-summary.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketSummaryComponent": () => (/* binding */ BasketSummaryComponent)
/* harmony export */ });
/* harmony import */ var _basket_summary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-summary.component.html?ngResource */ 1518);
/* harmony import */ var _basket_summary_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket-summary.component.css?ngResource */ 4941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../basket/basket.service */ 9972);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let BasketSummaryComponent = class BasketSummaryComponent {
    constructor(basketService) {
        this.basketService = basketService;
        this.decrement = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.increment = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isBasket = true;
    }
    ngOnInit() {
        this.basket$ = this.basketService.basket$;
    }
    decrementItemQuantity(item) {
        this.decrement.emit(item);
    }
    incrementItemQuantity(item) {
        this.increment.emit(item);
    }
    removeBasketItem(item) {
        this.remove.emit(item);
    }
};
BasketSummaryComponent.ctorParameters = () => [
    { type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService }
];
BasketSummaryComponent.propDecorators = {
    decrement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    increment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    remove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    isBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
BasketSummaryComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-basket-summary',
        template: _basket_summary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_basket_summary_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BasketSummaryComponent);



/***/ }),

/***/ 9281:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/order-totals/order-totals.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderTotalsComponent": () => (/* binding */ OrderTotalsComponent)
/* harmony export */ });
/* harmony import */ var _order_totals_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-totals.component.html?ngResource */ 8714);
/* harmony import */ var _order_totals_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-totals.component.css?ngResource */ 42);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../basket/basket.service */ 9972);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let OrderTotalsComponent = class OrderTotalsComponent {
    constructor(basketService) {
        this.basketService = basketService;
    }
    ngOnInit() {
        this.basketTotal$ = this.basketService.basketTotal$;
    }
};
OrderTotalsComponent.ctorParameters = () => [
    { type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService }
];
OrderTotalsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-order-totals',
        template: _order_totals_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_order_totals_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrderTotalsComponent);



/***/ }),

/***/ 6241:
/*!************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagerComponent": () => (/* binding */ PagerComponent)
/* harmony export */ });
/* harmony import */ var _pager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.component.html?ngResource */ 5322);
/* harmony import */ var _pager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pager.component.css?ngResource */ 6901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PagerComponent = class PagerComponent {
    constructor() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    onPagerChange(event) {
        if (!event)
            return;
        this.pageChanged.emit(event.page);
    }
};
PagerComponent.ctorParameters = () => [];
PagerComponent.propDecorators = {
    totalCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
PagerComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-pager',
        template: _pager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagerComponent);



/***/ }),

/***/ 1654:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingHeaderComponent": () => (/* binding */ PagingHeaderComponent)
/* harmony export */ });
/* harmony import */ var _paging_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paging-header.component.html?ngResource */ 5379);
/* harmony import */ var _paging_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paging-header.component.css?ngResource */ 9964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PagingHeaderComponent = class PagingHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagingHeaderComponent.ctorParameters = () => [];
PagingHeaderComponent.propDecorators = {
    pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    totalCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PagingHeaderComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-paging-header',
        template: _paging_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_paging_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagingHeaderComponent);



/***/ }),

/***/ 4762:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperComponent": () => (/* binding */ StepperComponent)
/* harmony export */ });
/* harmony import */ var _stepper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepper.component.html?ngResource */ 5620);
/* harmony import */ var _stepper_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stepper.component.css?ngResource */ 5008);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ 1780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StepperComponent_1;




let StepperComponent = StepperComponent_1 = class StepperComponent extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__.CdkStepper {
    ngOnInit() {
        this.linear = this.linearModeSelected;
    }
    onClick(index) {
        this.selectedIndex = index;
    }
};
StepperComponent.propDecorators = {
    linearModeSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
StepperComponent = StepperComponent_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stepper',
        template: _stepper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__.CdkStepper, useExisting: StepperComponent_1 }],
        styles: [_stepper_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepperComponent);



/***/ }),

/***/ 4015:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/text-input/text-input.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextInputComponent": () => (/* binding */ TextInputComponent)
/* harmony export */ });
/* harmony import */ var _text_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-input.component.html?ngResource */ 8353);
/* harmony import */ var _text_input_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-input.component.css?ngResource */ 1457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TextInputComponent = class TextInputComponent {
    constructor(controlDir) {
        this.controlDir = controlDir;
        this.type = 'text';
        this.label = 'string';
        this.controlDir.valueAccessor = this;
    }
    ngOnInit() {
        const control = this.controlDir.control;
        const validators = control.validator ? [control.validator] : [];
        const asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];
        control.setValidators(validators);
        control.setAsyncValidators(asyncValidators);
        control.updateValueAndValidity();
    }
    onChange(event) { }
    onTouched() { }
    writeValue(obj) {
        this.input.nativeElement.value = obj || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
TextInputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Self }] }
];
TextInputComponent.propDecorators = {
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['input', { static: true },] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TextInputComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-text-input',
        template: _text_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_text_input_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TextInputComponent);



/***/ }),

/***/ 7704:
/*!*****************************************!*\
  !*** ./src/app/shared/models/basket.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Basket": () => (/* binding */ Basket)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 2535);

class Basket {
    constructor() {
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.items = [];
    }
}


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/stepper */ 1780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 9837);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7281);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 7977);
/* harmony import */ var _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/order-totals/order-totals.component */ 9281);
/* harmony import */ var _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pager/pager.component */ 6241);
/* harmony import */ var _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/paging-header/paging-header.component */ 1654);
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/stepper/stepper.component */ 4762);
/* harmony import */ var _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/text-input/text-input.component */ 4015);
/* harmony import */ var _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/basket-summary/basket-summary.component */ 3449);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_2__.PagingHeaderComponent,
            _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_1__.PagerComponent,
            _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_0__.OrderTotalsComponent,
            _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_4__.TextInputComponent,
            _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_3__.StepperComponent,
            _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_5__.BasketSummaryComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationModule.forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__.CarouselModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownModule.forRoot(),
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__.CdkStepperModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule
        ],
        exports: [
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationModule,
            _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_2__.PagingHeaderComponent,
            _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_1__.PagerComponent,
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__.CarouselModule,
            _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_0__.OrderTotalsComponent,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__.CdkStepperModule,
            _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_4__.TextInputComponent,
            _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_3__.StepperComponent,
            _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_5__.BasketSummaryComponent
        ]
    })
], SharedModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://localhost:44379/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBaseUrl": () => (/* binding */ getBaseUrl)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 3790:
/*!***************************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.css?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".cart-no {\r\n  position: absolute;\r\n  min-height: 25px;\r\n  min-width: 25px;\r\n  border-radius: 50%;\r\n  font-size: 1em;\r\n  background: blue;\r\n  color: white;\r\n  text-align: center;\r\n  top: -12px;\r\n  right: 32px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #343a40;\r\n}\r\n\r\na.active {\r\n  color: orange;\r\n}\r\n\r\n.logo {\r\n    cursor: pointer;\r\n}\r\n\r\n.logo:focus {\r\n  outline: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1ubyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbiAgbWluLXdpZHRoOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiAtMTJweDtcclxuICByaWdodDogMzJweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG5hLmFjdGl2ZSB7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nbzpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6812:
/*!*******************************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 5442:
/*!*****************************************************************************!*\
  !*** ./src/app/core/section-header/section-header.component.css?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 237:
/*!*************************************************************************!*\
  !*** ./src/app/core/server-error/server-error.component.css?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 4918:
/*!*********************************************************************!*\
  !*** ./src/app/core/test-error/test-error.component.css?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWVycm9yLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 9337:
/*!*********************************************************!*\
  !*** ./src/app/home/home/home.component.css?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".featured {\r\n    height: 250px;\r\n}\r\n\r\nimg {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    height: 600px;\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVkIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4941:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/basket-summary/basket-summary.component.css?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNrZXQtc3VtbWFyeS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 42:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/order-totals/order-totals.component.css?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci10b3RhbHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 6901:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 9964:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.css?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmctaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 5008:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "button.nav-link {\r\n  background: #e9ecef;\r\n  border-radius: 0;\r\n  border: none;\r\n}\r\n\r\n  button.nav-link:focus {\r\n    outline: none;\r\n  }\r\n\r\n  button.nav-link.active:hover {\r\n    color: white;\r\n  }\r\n\r\n  button.nav-link:active {\r\n    outline: none;\r\n  }\r\n\r\n  button.nav-link.active:focus {\r\n    outline: none;\r\n  }\r\n\r\n  button.nav-link.active:disabled:not(:empty) {\r\n    color: #333;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBwZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InN0ZXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5uYXYtbGluayB7XHJcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuICBidXR0b24ubmF2LWxpbms6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5uYXYtbGluay5hY3RpdmU6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLm5hdi1saW5rLmFjdGl2ZTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLm5hdi1saW5rLmFjdGl2ZTpkaXNhYmxlZDpub3QoOmVtcHR5KSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 1457:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/text-input/text-input.component.css?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".loader {\r\n    position: absolute;\r\n    width: auto;\r\n    top:15px;\r\n    right:10px;\r\n    margin-top: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFVBQVU7SUFDVixhQUFhO0FBQ2pCIiwiZmlsZSI6InRleHQtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB0b3A6MTVweDtcclxuICAgIHJpZ2h0OjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<ngx-spinner\r\n  type=\"timer\">\r\n  <h1>Loading...</h1>\r\n</ngx-spinner>\r\n\r\n<app-nav-bar></app-nav-bar>\r\n<app-section-header></app-section-header>\r\n\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n";

/***/ }),

/***/ 8526:
/*!****************************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed-top\">\r\n  <img src=\"../../assets/images/logo.png\" style=\"max-height: 70px;\" alt=\"logo\" routerLink=\"/\" class=\"logo\">\r\n  <nav class=\"my-2 my-md-0 mr-md-3 text-uppercase\" style=\"font-size: larger;\">\r\n    <a class=\"p-2\" [routerLink]=\"['/']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\r\n    <a class=\"p-2\" routerLink=\"/shop\" routerLinkActive=\"active\">Shop</a>\r\n    <a class=\"p-2\" routerLink=\"/test-error\" routerLinkActive=\"active\">Errors</a>\r\n  </nav>\r\n  <div class=\"d-flex align-items-center\">\r\n    <a routerLink=\"/basket\" class=\"position-relative\">\r\n      <i class=\"fa fa-shopping-cart fa-2x mr-5 text-dark\"></i>\r\n      <div *ngIf=\"basket$ | async\" class=\"cart-no\">{{(basket$ | async).items.length}}</div>\r\n    </a>\r\n    <ng-container *ngIf=\"(currentUser$ | async) === null\">\r\n      <a class=\"btn btn-outline-secondary mr-2\" routerLink=\"/account/login\">Login</a>\r\n      <a class=\"btn btn-outline-secondary mr-3\" routerLink=\"/account/register\">Sign up</a>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"(currentUser$ | async) as user\">\r\n      <div class=\"dropdown ml-3 mr-5\" dropdown>\r\n        <a class=\"dropdown-toggle\" style=\"cursor: pointer;\" dropdownToggle>\r\n          <strong>Welcome {{(currentUser$ | async).displayName}}</strong>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" style=\"cursor:pointer\" *dropdownMenu>\r\n          <a routerLink=\"/basket\" class=\"dropdown-item d-flex align-items-center py-2\">\r\n            <i class=\"fa fa-shopping-cart mr-3\"></i> View Basket\r\n          </a>\r\n          <a routerLink=\"/orders\" class=\"dropdown-item d-flex align-items-center py-2\">\r\n            <i class=\"fa fa-history mr-3\"></i> View Orders\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a (click)=\"logout()\" class=\"dropdown-item d-flex align-items-center py-2\">\r\n            <i class=\"fa fa-sign-out mr-3\"></i> Logout\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 3819:
/*!********************************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container mt-5\">\r\n  <h1>Not found</h1>\r\n</div>\r\n";

/***/ }),

/***/ 6702:
/*!******************************************************************************!*\
  !*** ./src/app/core/section-header/section-header.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"(breadcrumb$ | async) as breadcrumbs\">\r\n  <section *ngIf=\"breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length-1].label !== 'Home'\" class=\"py-5\" style=\"margin-top: 105px; background-color: #f5f5f5;\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex align-items-center\">\r\n        <div class=\"col-9\">\r\n          <h1>{{breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length-1].label | titlecase}}</h1>\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <xng-breadcrumb></xng-breadcrumb>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</ng-container>\r\n";

/***/ }),

/***/ 9071:
/*!**************************************************************************!*\
  !*** ./src/app/core/server-error/server-error.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container mt-5\">\r\n  <h1>Internal Sever Error - refreshing the page will make the exception disappear</h1>\r\n  <ng-container *ngIf=\"error\">\r\n    <h5 class=\"text-danger\">Error: {{error?.message}}</h5>\r\n    <p class=\"font-weight-bold\">Mote: if you are seeing  this then Angular is probably not responsible</p>\r\n    <p>What to do next?</p>\r\n    <ol>\r\n      <li>Open chrome dev tools</li>\r\n      <li>Inspect the network tab</li>\r\n      <li>Check the failing request</li>\r\n      <li>Examine this request URL - make sure this is correct</li>\r\n      <li>Reproduce the error in postman - if we the dame response in Postman, then the issue is NOT with Angular</li>\r\n    </ol>\r\n    <p>Following is the stack trace - this is where your investigation should start!</p>\r\n    <code class=\"mt-5\" style=\"background-color: whitesmoke\">{{error?.details}}</code>\r\n  </ng-container>\r\n</div>\r\n";

/***/ }),

/***/ 4121:
/*!**********************************************************************!*\
  !*** ./src/app/core/test-error/test-error.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container mt-5\">\n  <button class=\"btn btn-outline-primary mr-3\" (click)=\"get500Error()\">Test 500 Error</button>\n  <button class=\"btn btn-outline-primary mr-3\" (click)=\"get404Error()\">Test 404 Error</button>\n  <button class=\"btn btn-outline-primary mr-3\" (click)=\"get400Error()\">Test 400 Error</button>\n  <button class=\"btn btn-outline-primary mr-3\" (click)=\"get400ValidationError()\">Test 400 Validation Error</button>\n  <div class=\"row mt-5\" *ngIf=\"validationErrors\">\n    <ul class=\"text-danger\">\n      <li *ngFor=\"let error of validationErrors\">{{error}}</li>\n    </ul>\n  </div>\n</div>\n";

/***/ }),

/***/ 5052:
/*!**********************************************************!*\
  !*** ./src/app/home/home/home.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<carousel>\r\n  <slide>\r\n    <img src=\"../../../assets/images/hero1.jpg\" alt=\"first slide\" style=\"display:block;width:100%;\" />\r\n  </slide>\r\n  <slide>\r\n    <img src=\"../../../assets/images/hero2.jpg\" alt=\"second slide\" style=\"display:block;width:100%;\" />\r\n  </slide>\r\n  <slide>\r\n    <img src=\"../../../assets/images/hero3.jpg\" alt=\"third slide\" style=\"display:block;width:100%;\" />\r\n  </slide>\r\n</carousel>\r\n<section class=\"featured\">\r\n  <div class=\"d-flex justify-content-center pt-4\">\r\n    <h1>Welcome to the Shop!</h1>\r\n  </div> \r\n</section>\r\n";

/***/ }),

/***/ 1518:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/basket-summary/basket-summary.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"basket$ | async\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"border-0\" scope=\"col\" [class.bg-light]=\"isBasket\">\r\n            <div class=\"p-2 px-3 text-uppercase\">Product</div>\r\n          </th>\r\n          <th class=\"border-0\" scope=\"col\" [class.bg-light]=\"isBasket\">\r\n            <div class=\"py-2 text-uppercase\">Price</div>\r\n          </th>\r\n          <th class=\"border-0\" scope=\"col\" [class.bg-light]=\"isBasket\">\r\n            <div class=\"py-2 text-uppercase\">Quantity</div>\r\n          </th>\r\n          <th class=\"border-0\" scope=\"col\" [class.bg-light]=\"isBasket\">\r\n            <div class=\"py-2 text-uppercase\">Total</div>\r\n          </th>\r\n          <th *ngIf=\"isBasket\" class=\"border-0 bg-light\" scope=\"col\">\r\n            <div class=\"py-2 text-uppercase\">Remove</div>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of (basket$ | async).items\">\r\n          <th scope=\"row\">\r\n            <div class=\"p-2\">\r\n              <img src=\"{{item.pictureUrl}}\" alt=\"{{item.productName}}\" class=\"img-fluid\" style=\"max-height: 50px;\" />\r\n              <div class=\"ml-3 d-inline-block align-middle\">\r\n                <h5 class=\"mb-0\">\r\n                  <a routerLink=\"/shop/{{item.id}}\" class=\"text-dark\">{{item.productName}}</a>\r\n                </h5>\r\n                <span class=\"text-muted font-weight-normal font-italic d-block\">Type: {{item.type}}</span>\r\n              </div>\r\n            </div>\r\n          </th>\r\n          <td class=\"align-middle\"><strong>{{item.price | currency}}</strong></td>\r\n          <td class=\"align-middle\">\r\n            <div class=\"d-flex align-items-center\" [class.justify-content-center]=\"!isBasket\">\r\n              <i *ngIf=\"isBasket\" (click)=\"decrementItemQuantity(item)\" class=\"fa fa-minus-circle text-warning mr-2\" style=\"cursor: pointer; font-size: 2em;\"></i>\r\n              <span class=\"font-weight-bold\" style=\"font-size: 1.5em;\">{{item.quantity}}</span>\r\n              <i *ngIf=\"isBasket\" (click)=\"incrementItemQuantity(item)\" class=\"fa fa-plus-circle text-warning mx-2\" style=\"cursor: pointer; font-size: 2em;\"></i>\r\n            </div>\r\n          </td>\r\n          <td class=\"align-middle\"><strong>{{item.price * item.quantity | currency}}</strong></td>\r\n          <td class=\"align-middle text-center\">\r\n            <a class=\"text-danger\">\r\n              <i *ngIf=\"isBasket\" (click)=\"removeBasketItem(item)\" class=\"fa fa-trash\" style=\"font-size:2em; cursor:pointer;\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</ng-container>\r\n";

/***/ }),

/***/ 8714:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/order-totals/order-totals.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"bg-light px-4 py-3 text-uppercase font-weight-bold\">\r\n  Order Summary\r\n</div>\r\n<div class=\"p-4\">\r\n  <p class=\"font-italic mb-4\">Shipping costs will be added depending on choices made during checkout</p>\r\n  <ul class=\"list-unstyled mb-4\" *ngIf=\"(basketTotal$ | async)\">\r\n    <li class=\"d-flex justify-content-between py-3 border-bottom\">\r\n      <strong class=\"text-muted\">Order subtotal</strong>\r\n      <strong>{{(basketTotal$ | async).subtotal | currency}}</strong>\r\n    </li>\r\n    <li class=\"d-flex justify-content-between py-3 border-bottom\">\r\n      <strong class=\"text-muted\">Shipping and handling</strong>\r\n      <strong>{{(basketTotal$ | async).shipping | currency}}</strong>\r\n    </li>\r\n    <li class=\"d-flex justify-content-between py-3 border-bottom\">\r\n      <strong class=\"text-muted\">Total</strong>\r\n      <strong>{{(basketTotal$ | async).total | currency}}</strong>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";

/***/ }),

/***/ 5322:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<pagination [boundaryLinks]=\"true\"\r\n            [totalItems]=\"totalCount\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            [ngModel]=\"pageNumber\"\r\n            firstText=\"&laquo;\"\r\n            (pageChanged)=\"onPagerChange($event)\"\r\n            [itemsPerPage]=\"pageSize\"\r\n            lastText=\"&raquo;\">\r\n</pagination>\r\n";

/***/ }),

/***/ 5379:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<header>\r\n  <span *ngIf=\"totalCount && totalCount > 0\">\r\n    Showing\r\n    <strong>\r\n      {{(pageNumber - 1) * pageSize + 1}} -\r\n      {{\r\n          pageNumber * pageSize\r\n                  > this.totalCount\r\n                  ? this.totalCount\r\n                  : pageNumber * pageSize\r\n      }}\r\n    </strong>  of <strong>{{this.totalCount}}</strong> results\r\n  </span>\r\n  <span *ngIf=\"totalCount === 0\">No results</span>\r\n</header>\r\n";

/***/ }),

/***/ 5620:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-pills nav-justified\">\n    <li class=\"nav-item\" *ngFor=\"let step of steps; let i = index\">\n      <button (click)=\"onClick(i)\"\n              [disabled]=\"true\"\n              [class.active]=\"selectedIndex === i\"\n              class=\"nav-link py-3 text-uppercase font-weight-bold btn-block\">\n        {{step.label}}\n      </button>\n    </li>\n  </ul>\n  <div>\n    <ng-container [ngTemplateOutlet]=\"selected.content\"></ng-container>\n  </div>\n</div>\n";

/***/ }),

/***/ 8353:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/text-input/text-input.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"form-label-group\">\n  <input [ngClass]=\"(controlDir?.control?.touched)\n            ? !controlDir.control.valid ? 'is-invalid' : 'is-valid' : null\"\n         [type]=\"type\"\n         (input)=\"onChange($event.target.value)\"\n         (blur)=\"onTouched()\"\n         #input\n         class=\"form-control\"\n         placeholder=\"{{label}}\">\n  <div *ngIf=\"controlDir && controlDir.control && controlDir.control.status === 'PENDING'\" class=\"fa fa-spinner fa-spin loader\"></div>\n  <div *ngIf=\"controlDir?.control?.status === 'PENDING'\" class=\"fa fa-spinner fa-spin loader\"></div>\n  <label for=\"{{label}}\">{{label}}</label>\n  <div class=\"invalid-feedback\" *ngIf=\"(!controlDir?.control?.valid && controlDir?.control?.touched)\">\n    <span *ngIf=\"controlDir.control.errors?.required\">{{label}} is required</span>\n    <span *ngIf=\"controlDir.control.errors?.pattern\">Invalid email address</span>\n  </div>\n\n  <div class=\"invalid-feedback d-block\" *ngIf=\"(!controlDir?.control?.valid && controlDir?.control?.dirty)\">\n    <span *ngIf=\"controlDir.control.errors?.emailExists\">Email address is in use</span>\n  </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map