import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud.service';

export interface User {
  id,
  name,
  email,
  password
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CrudService<User> {

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}users`)
  }

  autenticate(email: string, password: string) {
    return this.http.post(`${environment.API}users`, { email, password }, { observe: 'response' })
      .pipe(
        tap(res => {
          const authToken = res.headers.get('Authorization')
          console.log(authToken)
        })
      )
  }
}
