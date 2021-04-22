import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import { environment } from 'src/environments/environment';

export class User {
  id: number
  name: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService extends CrudService<User> {

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}users`)
  }
}
