import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserOrders() {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders');
  }

  getOrderById(id: number) {
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + id);
  }
}
