import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  /**
   * url base del microservicio de productos en springboot
   */
  private baseUrl = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) { }

  /**
   * 
   * @returns funcion que permite consumir la base de datos de productos
   */
  getProducts() : Observable<Product[]> {
    
    return this.httpClient.get<Product[]>(`${this.baseUrl}/products`);
  }
}
