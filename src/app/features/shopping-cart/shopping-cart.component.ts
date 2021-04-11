import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<Cart[]>

  constructor(
    private cartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.list()
  }

}
