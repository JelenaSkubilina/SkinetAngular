import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [
    ProductItemComponent,
    ShopComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductItemComponent, ShopComponent]
})
export class ShopModule { }
