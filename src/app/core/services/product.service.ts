import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<IProducto[]> {
    return this.httpClient.get<IProducto[]>('http://localhost:3000/products');
  }
}
