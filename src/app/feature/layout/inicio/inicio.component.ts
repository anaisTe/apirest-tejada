import { Component } from '@angular/core';
import { LoginService } from '../../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor(
    private _loginService: LoginService,
    private router: Router
  ) {}

  goOut() {
    this._loginService.logout();
    this.router.navigate(['login'])
  }

}
