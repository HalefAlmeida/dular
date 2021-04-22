import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(
    private _fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required]
    })
  }

  login() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.auth.autenticate(email, password).subscribe(
      () =>
        this.router.navigate(['products']),
      err => {
        console.log(err);
        this.form.reset();
        alert('Usuário ou senha incorreto!');
      }
    )
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
