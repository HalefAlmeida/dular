import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import { environment } from 'src/environments/environment';

export interface Cart {
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService extends CrudService<Cart> {

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}cart`)
  }
}
