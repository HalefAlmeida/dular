import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/login/login.service';
import * as jwt_decode from 'jwt-decode';
import { TokenService } from './token.service';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User>{

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}users`)
  }
}
