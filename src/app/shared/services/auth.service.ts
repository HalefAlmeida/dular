import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/core/login/login.service';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CrudService<User> {

  constructor(
    protected http: HttpClient,
    private userService: UserService
  ) {
    super(http, `${environment.API}users`)
  }

  /**Autentica um usuário na aplicação por meio de usuário e senha
   * 
   * @param email Email do usuário a ser autenticado
   * @param password Senha do usuário a ser autenticado
   * @returns 
   */
  autenticate(email: string, password: string) {
    return this.http.post(`${environment.API}users`, { email, password }, { observe: 'response' })
      .pipe(
        tap(res => {
          const authToken = res.headers.get('Authorization')
          console.log(res)
          this.userService.setToken(authToken)
        })
      )
  }

  logout() {
    return this.http.get(`${environment.API}users`)
  }

}
