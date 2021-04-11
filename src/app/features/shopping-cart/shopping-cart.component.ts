import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, CartItensService } from './cart-itens.service';
import { Cart, ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<Cart[]>
  cartItens$: Observable<CartItem[]>

  constructor(
    private cartService: ShoppingCartService,
    private cartItensService: CartItensService
  ) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.list()
    this.cartItens$ = this.cartItensService.list()
  }

}
