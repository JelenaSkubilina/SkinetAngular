"use strict";
(self["webpackChunkAPI"] = self["webpackChunkAPI"] || []).push([["src_app_shop_shop_module_ts"],{

/***/ 1118:
/*!*********************************************!*\
  !*** ./src/app/shared/models/pagination.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
class Pagination {
    constructor() {
        this.data = [];
    }
}


/***/ }),

/***/ 6487:
/*!*********************************************!*\
  !*** ./src/app/shared/models/shopParams.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopParams": () => (/* binding */ ShopParams)
/* harmony export */ });
class ShopParams {
    constructor() {
        this.brandId = 0;
        this.typeId = 0;
        this.sort = 'name';
        this.pageNumber = 1;
        this.pageSize = 6;
    }
}


/***/ }),

/***/ 6783:
/*!*******************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _product_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.component.html?ngResource */ 2167);
/* harmony import */ var _product_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.component.css?ngResource */ 4717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xng-breadcrumb */ 6993);
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basket/basket.service */ 9972);
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop.service */ 5085);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(shopService, activatedRoute, basketService, bcService) {
        this.shopService = shopService;
        this.activatedRoute = activatedRoute;
        this.basketService = basketService;
        this.bcService = bcService;
        this.quantity = 1;
        this.bcService.set('@productDetails', '');
    }
    ngOnInit() {
        this.loadProduct();
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product, this.quantity);
    }
    incrementQuantity() {
        this.quantity++;
    }
    decrementQuantity() {
        if (this.quantity > 1)
            this.quantity--;
    }
    loadProduct() {
        this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
            this.product = product;
            this.bcService.set('@productDetails', product.name);
        }, error => {
            console.log(error);
        });
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__.ShopService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService },
    { type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbService }
];
ProductDetailsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product-details',
        template: _product_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductDetailsComponent);



/***/ }),

/***/ 9277:
/*!*************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductItemComponent": () => (/* binding */ ProductItemComponent)
/* harmony export */ });
/* harmony import */ var _product_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-item.component.html?ngResource */ 9894);
/* harmony import */ var _product_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-item.component.css?ngResource */ 4178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basket/basket.service */ 9972);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ProductItemComponent = class ProductItemComponent {
    constructor(basketService) {
        this.basketService = basketService;
    }
    ngOnInit() {
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product);
    }
};
ProductItemComponent.ctorParameters = () => [
    { type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__.BasketService }
];
ProductItemComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ProductItemComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-product-item',
        template: _product_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductItemComponent);



/***/ }),

/***/ 8098:
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopRoutingModule": () => (/* binding */ ShopRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details/product-details.component */ 6783);
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.component */ 3006);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const routes = [
    { path: '', component: _shop_component__WEBPACK_IMPORTED_MODULE_1__.ShopComponent },
    { path: ':id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsComponent, data: { breadcrumb: { alias: 'productDetails' } } },
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ShopRoutingModule);



/***/ }),

/***/ 3006:
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopComponent": () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var _shop_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.component.html?ngResource */ 8980);
/* harmony import */ var _shop_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.component.css?ngResource */ 2289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/shopParams */ 6487);
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.service */ 5085);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ShopComponent = class ShopComponent {
    constructor(shopService) {
        this.shopService = shopService;
        this.sortOptions = [
            { name: 'Alphabetical', value: 'name' },
            { name: 'Price: Low to High', value: 'priceAsc' },
            { name: 'Price: High to Low', value: 'priceDesc' }
        ];
        this.shopParams = this.shopService.getShopParames();
    }
    ngOnInit() {
        this.getProducts(true);
        this.getBrands();
        this.getTypes();
    }
    getProducts(useCashe = false) {
        this.shopService.getProducts(useCashe).subscribe(response => {
            this.products = response.data;
            this.totalCount = response.count;
        }, error => {
            console.log(error);
        });
    }
    getBrands() {
        this.shopService.getBrands().subscribe(response => {
            this.brands = [{ id: 0, name: 'All' }, ...response];
        }, error => {
            console.log(error);
        });
    }
    getTypes() {
        this.shopService.getTypes().subscribe(response => {
            this.types = [{ id: 0, name: 'All' }, ...response];
        }, error => {
            console.log(error);
        });
    }
    onBrandSelected(brandId) {
        const params = this.shopService.getShopParames();
        params.brandId = brandId;
        params.pageNumber = 1;
        this.shopService.setShopParames(params);
        this.getProducts();
    }
    onTypeSelected(typeId) {
        const params = this.shopService.getShopParames();
        params.typeId = typeId;
        params.pageNumber = 1;
        this.shopService.setShopParames(params);
        this.getProducts();
    }
    onSortSelected(sort) {
        const params = this.shopService.getShopParames();
        params.sort = sort;
        this.shopService.setShopParames(params);
        this.getProducts();
    }
    onPageChanged(event) {
        const params = this.shopService.getShopParames();
        if (params.pageNumber !== event) {
            params.pageNumber = event;
            this.shopService.setShopParames(params);
            this.getProducts(true);
        }
    }
    onSearch() {
        const params = this.shopService.getShopParames();
        params.search = this.searchTerm.nativeElement.value;
        params.pageNumber = 1;
        this.shopService.setShopParames(params);
        this.getProducts();
    }
    onReset() {
        this.searchTerm.nativeElement.value = "";
        this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_2__.ShopParams();
        this.shopService.setShopParames(this.shopParams);
        this.getProducts();
    }
};
ShopComponent.ctorParameters = () => [
    { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__.ShopService }
];
ShopComponent.propDecorators = {
    searchTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['search', { static: false },] }]
};
ShopComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-shop',
        template: _shop_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shop_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShopComponent);



/***/ }),

/***/ 7838:
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopModule": () => (/* binding */ ShopModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-item/product-item.component */ 9277);
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.component */ 3006);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details/product-details.component */ 6783);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop-routing.module */ 8098);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ShopModule = class ShopModule {
};
ShopModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_1__.ProductItemComponent,
            _shop_component__WEBPACK_IMPORTED_MODULE_2__.ShopComponent,
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailsComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_4__.ShopRoutingModule
        ],
        exports: [_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_1__.ProductItemComponent]
    })
], ShopModule);



/***/ }),

/***/ 5085:
/*!**************************************!*\
  !*** ./src/app/shop/shop.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopService": () => (/* binding */ ShopService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_models_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/pagination */ 1118);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/shopParams */ 6487);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ShopService = class ShopService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
        this.products = [];
        this.brands = [];
        this.types = [];
        this.pagination = new _shared_models_pagination__WEBPACK_IMPORTED_MODULE_0__.Pagination();
        this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_1__.ShopParams();
        this.productCache = new Map();
    }
    getProducts(useCache) {
        if (useCache === false) {
            this.productCache = new Map();
        }
        if (this.productCache.size > 0 && useCache === true) {
            if (this.productCache.has(Object.values(this.shopParams).join('-'))) {
                this.pagination.data = this.productCache.get(Object.values(this.shopParams).join('-'));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.pagination);
            }
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        if (this.shopParams.brandId !== 0) {
            params = params.append('brandId', this.shopParams.brandId.toString());
        }
        if (this.shopParams.typeId !== 0) {
            params = params.append('typeId', this.shopParams.typeId.toString());
        }
        if (this.shopParams.search) {
            params = params.append('search', this.shopParams.search);
        }
        params = params.append('sort', this.shopParams.sort);
        params = params.append('pageIndex', this.shopParams.pageNumber.toString());
        params = params.append('pageSize', this.shopParams.pageSize.toString());
        return this.http.get(this.baseUrl + 'products', { observe: 'response', params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            this.productCache.set(Object.values(this.shopParams).join('-'), response.body.data);
            this.pagination = response.body;
            return response.body;
        }));
    }
    setShopParames(params) {
        this.shopParams = params;
    }
    getShopParames() {
        return this.shopParams;
    }
    getTypes() {
        if (this.types.length > 0) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.types);
        }
        return this.http.get(this.baseUrl + 'products/types').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            this.types = response;
            return response;
        }));
    }
    getBrands() {
        if (this.brands.length > 0) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.brands);
        }
        return this.http.get(this.baseUrl + 'products/brands').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            this.brands = response;
            return response;
        }));
        ;
    }
    getProduct(id) {
        let product;
        this.productCache.forEach((products) => {
            product = products.find(p => p.id === id);
        });
        if (product) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(product);
        }
        return this.http.get(this.baseUrl + 'products/' + id);
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ShopService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ShopService);



/***/ }),

/***/ 4717:
/*!*******************************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.css?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 4178:
/*!*************************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.css?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".btn {\r\n  width: 30%;\r\n  height: 40px;\r\n}\r\n\r\n.image :hover {\r\n  opacity: 1;\r\n}\r\n\r\n.image.btn :hover {\r\n  opacity: 1;\r\n  transform: none;\r\n}\r\n\r\n.hover-overlay {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(255,255,255,0.5);\r\n  opacity: 0;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.hover-overlay.btn {\r\n  z-index: 1000;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.button.btn:first-of-type {\r\n  transform: translateX(-20px);\r\n}\r\n\r\n.button.btn:last-of-type {\r\n  transform: translateX(20px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltYWdlIDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmltYWdlLmJ0biA6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uaG92ZXItb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLmhvdmVyLW92ZXJsYXkuYnRuIHtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uLmJ0bjpmaXJzdC1vZi10eXBlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG59XHJcbi5idXR0b24uYnRuOmxhc3Qtb2YtdHlwZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 2289:
/*!****************************************************!*\
  !*** ./src/app/shop/shop.component.css?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".list-group-item {\r\n    cursor: pointer;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.list-group-item:focus {\r\n    outline: none;\r\n}\r\n\r\n.list-group-item.active {\r\n    border-radius: 10px;\r\n}\r\n\r\n.list-group-item:not(.active):hover {\r\n    color: white;\r\n    background-color: rgba(233, 86, 32, 0.705);\r\n    border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW06Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbTpub3QoLmFjdGl2ZSk6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDg2LCAzMiwgMC43MDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2167:
/*!********************************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container mt-5\">\r\n  <div class=\"row\" *ngIf=\"product\">\r\n    <div class=\"col-6\">\r\n      <img src=\"{{product.pictureUrl}}\" alt=\"{{product.name}}\" class=\"img-fluid w-100\" />\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <h3>{{product.name}}</h3>\r\n      <p style=\"font-size: 2em;\">{{product.price | currency}}</p>\r\n      <div class=\"d-flex justify-content-start align-items-center\">\r\n        <i (click)=\"decrementQuantity()\" class=\"fa fa-minus-circle text-warning mr-2\" style=\"cursor: pointer; font-size: 2em;\"></i>\r\n        <span class=\"font-weight-bold\" style=\"font-size: 1.5em;\">{{quantity}}</span>\r\n        <i (click)=\"incrementQuantity()\" class=\"fa fa-plus-circle text-warning mx-2\" style=\"cursor: pointer; font-size: 2em;\"></i>\r\n        <button (click)=\"addItemToBasket()\" class=\"btn btn-outline-primary btn-lg ml-4\">Add to card</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-12 ml-3\">\r\n        <h4>Description</h4>\r\n        <p>{{product.description}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n";

/***/ }),

/***/ 9894:
/*!**************************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card h-100 shadow-sm\">\r\n  <div class=\"image position-relative\" style=\"cursor: pointer;\">\r\n    <img src=\"{{product.pictureUrl}}\" alt=\"{{product.name}}\" class=\"img-fluid bg-info\" />\r\n    <div class=\"d-flex align-items-center justify-content-center hover-overlay\">\r\n      <button (click)=\"addItemToBasket()\" type=\"button\" class=\"btn btn-primary fa fa-shopping-cart mr-2\"></button>\r\n      <button routerLink=\"/shop/{{product.id}}\" type=\"button\" class=\"btn btn-primary\">View</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body d-flex flex-column\">\r\n    <a routerLink=\"/shop/{{product.id}}\">\r\n      <h6 class=\"text-uppercase\">{{product.name}}</h6>\r\n    </a>\r\n    <span class=\"mb-2\">{{product.price | currency}}</span>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 8980:
/*!*****************************************************!*\
  !*** ./src/app/shop/shop.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container mt-3\">\r\n  <div class=\"row\">\r\n\r\n    <section class=\"col-3\">\r\n      <ng-container *ngIf=\"types && brands\">\r\n        <h5 class=\"text-warning ml-3 mt-4 mb-3\">Sort</h5>\r\n        <select class=\"custom-select mb-4\" (change)=\"onSortSelected($event.target.value)\">\r\n          <option *ngFor=\"let sort of sortOptions\"\r\n                  [selected]=\"shopParams.sort === sort.value\"\r\n                  [value]=\"sort.value\">\r\n            {{sort.name}}\r\n          </option>\r\n        </select>\r\n        <h5 class=\"text-warning ml-3\">Brands</h5>\r\n        <ul class=\"list-group my-3\">\r\n          <li class=\"list-group-item\" *ngFor=\"let brand of brands\"\r\n              [class.active]=\"brand.id === this.shopParams.brandId\"\r\n              [value]=\"brand.id\"\r\n              (click)=\"onBrandSelected(brand.id)\">\r\n            {{brand.name}}\r\n          </li>\r\n        </ul>\r\n        <h5 class=\"text-warning ml-3\">Types</h5>\r\n        <ul class=\"list-group my-3\">\r\n          <li class=\"list-group-item\" *ngFor=\"let type of types\"\r\n              [class.active]=\"type.id === this.shopParams.typeId\"\r\n              [value]=\"type.id\"\r\n              (click)=\"onTypeSelected(type.id)\">\r\n            {{type.name}}\r\n          </li>\r\n        </ul>\r\n      </ng-container>\r\n    </section>\r\n\r\n    <section class=\"col-9\">\r\n      <div class=\"d-flex justify-content-between align-items-center pb-2\">\r\n\r\n        <app-paging-header \r\n          [totalCount]=\"totalCount\"\r\n          [pageSize]=\"shopParams.pageSize\"\r\n          [pageNumber]=\"shopParams.pageNumber\">\r\n        </app-paging-header>\r\n\r\n        <div class=\"form-inline\" *ngIf=\"products\">\r\n          <input (keyup.enter)=\"onSearch()\" class=\"form-control mr-2\" #search style=\"width: 300px\" type=\"text\" />\r\n          <button (click)=\"onSearch()\" class=\"btn btn-outline-primary my-2\">Search</button>\r\n          <button (click)=\"onReset()\" class=\"btn btn-outline-success my-2 ml-2\">Reset</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4 mb-4\" *ngFor=\"let item of products\">\r\n          <app-product-item [product]=\"item\"></app-product-item>\r\n        </div>\r\n      </div>\r\n      <div class=\"d-flex justify-content-center\" *ngIf=\"totalCount > 0\">\r\n        <app-pager\r\n                   [pageSize]=\"shopParams.pageSize\"\r\n                   [totalCount]=\"totalCount\"\r\n                   [pageNumber]=\"shopParams.pageNumber\"\r\n                   (pageChanged)=\"onPageChanged($event)\"\r\n                   >\r\n        </app-pager>\r\n      </div>\r\n\r\n    </section>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_shop_shop_module_ts.js.map