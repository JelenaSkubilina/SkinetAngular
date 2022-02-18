import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: false }) searchTerm: ElementRef;

  products: IProduct[];
  types: IType[];
  brands: IBrand[];
  shopParams: ShopParams;
  totalCount: number;

  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' }
  ];

  constructor(private shopService: ShopService) {
    this.shopParams = this.shopService.getShopParames();
  }

  ngOnInit(): void {
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

  onBrandSelected(brandId: number) {
    const params = this.shopService.getShopParames();
    params.brandId = brandId;
    params.pageNumber = 1;
    this.shopService.setShopParames(params);
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    const params = this.shopService.getShopParames();
    params.typeId = typeId;
    params.pageNumber = 1;
    this.shopService.setShopParames(params);
    this.getProducts();
  }

  onSortSelected(sort: string) {
    const params = this.shopService.getShopParames();
    params.sort = sort;
    this.shopService.setShopParames(params);
    this.getProducts();
  }

  onPageChanged(event: any) {
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
    this.shopParams = new ShopParams();
    this.shopService.setShopParames(this.shopParams);
    this.getProducts();
  }
}
