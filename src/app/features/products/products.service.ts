import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, takeUntil, take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Product } from './products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = `${environment.API}/products`

  constructor(
    private http: HttpClient
  ) { }

  read() {
    return this.http.get<Product[]>(this.API)
      .pipe(
        delay(500),
        take(1)
      )
  }
}
