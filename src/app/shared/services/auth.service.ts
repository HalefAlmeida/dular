
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(email, password) {

    if (email === 'teste@teste.com' &&
      password === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  logout() {
    this.usuarioAutenticado = false;

    this.mostrarMenuEmitter.emit(false);
  }

}
