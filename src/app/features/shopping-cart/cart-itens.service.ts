import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import { environment } from 'src/environments/environment';

export interface CartItem {

}

@Injectable({
  providedIn: 'root'
})
export class CartItensService extends CrudService<CartItem>{

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}cart_itens`)
  }
}
