import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, takeUntil, take } from 'rxjs/operators';
import { CrudService } from 'src/app/shared/services/crud.service';

import { environment } from 'src/environments/environment';
import { Product } from './products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends CrudService<Product>{

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}products`)
  }

}
