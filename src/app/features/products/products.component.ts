import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { delay, map, tap } from "rxjs/operators";

export interface Tile {
  cols: number;
  rows: number;
  product: Product;
}

export interface Product {
  title,
  value,
  photo
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [{
    title: 'Fritadeira Elétrica sem Óleo Mondial',
    value: '499',
    photo: '../../../assets/produto-00001.webp'
  },
  {
    title: 'BLACK+DECKER Ferro de Passar 1800W Preto 220V',
    value: '399',
    photo: '../../../assets/produto-00002.jpg'
  },
  {
    title: 'Britania Batedeira Planetária BBP515V Inox 500W',
    value: '449.90',
    photo: '../../../assets/produto-00003.jpg'
  }]

  tiles: Tile[] = [
    { cols: 2, rows: 3, product: this.products[0] },
    { cols: 2, rows: 3, product: this.products[1] },
    { cols: 2, rows: 3, product: this.products[2] },
    { cols: 2, rows: 3, product: this.products[2] },
    { cols: 2, rows: 3, product: this.products[2] },
    { cols: 2, rows: 3, product: this.products[2] }
  ];

  products$: Observable<Product[]>

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productService.read()
  }

}
