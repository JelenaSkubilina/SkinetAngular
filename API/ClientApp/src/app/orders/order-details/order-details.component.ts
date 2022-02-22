import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { IOrder } from '../../shared/models/order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: IOrder;

  constructor(private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService) {
    this.bcService.set('@orderDetails', '');
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.ordersService.getOrderById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(order => {
      this.order = order;
      this.bcService.set('@orderDetails', `Order# ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }

}
