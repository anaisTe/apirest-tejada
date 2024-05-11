import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../core/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../../../core/services/product.service';
import { IProducto } from '../../../core/models/product.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {

  productsList: IProducto[] = []

  constructor(
    private _loginService: LoginService,
    private router: Router,
    private _products: ProductService
  ) {}

  goOut() {
    Swal.fire({
      title: "¿Está seguro de cerrar la sesión?",
      icon: "warning",
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then( (result) => {
      if(result.isConfirmed) {
        this._loginService.logout();
        this.router.navigate(['login'])
      }
    })

  }

  getItems() {
    this._products.getProducts().subscribe({
      next: (val) => {
        this.productsList = val
        // console.log('val',val);
      }
    })
  }

  ngOnInit(): void {
    this.getItems()
  }
}
