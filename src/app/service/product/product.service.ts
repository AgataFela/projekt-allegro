import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'https://jsonplaceholder.typicode.com/orders';

  constructor(private http: HttpClient) { }
}
