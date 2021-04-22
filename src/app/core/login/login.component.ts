import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  mostrarMenu: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: [null, Validators.email],
      password: [null, Validators.required]
    })

    this.auth.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  fazerLogin() {
    this.auth.fazerLogin(this.form.value['email'], this.form.value['password'])
  }


  getErrorMessage(control) {
    if (this.form.get(control).hasError('minlength')) {
      return 'O valor mínimo permitido é de 8 caracteres';
    } else if (this.form.get(control).hasError('maxlength')) {
      return 'O valor máximo permitido é de 15 caracteres';
    } else if (this.form.get(control).hasError('required')) {
      return 'Um valor deve ser informado para o campo';
    };

    return this.form.get(control).hasError('email') ? 'O valor informado não é um e-mail válido' : '';
  }

}
