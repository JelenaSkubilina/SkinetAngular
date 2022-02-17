import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BasketService } from '../../basket/basket.service';
import { IBasket } from '../../shared/models/basket';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.css']
})
export class CheckoutReviewComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Input() appStepper: CdkStepper;

  constructor(private toastr: ToastrService,
    private basketService: BasketService) { }

  ngOnInit(): void {
  }

  createPaymentIntent() {
    return this.basketService.createPaymentIntent().subscribe((response: any) => {
      this.appStepper.next();
    }, error => {
      console.log(error);
    });
  }
}
