import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory } from '../pages/get-started/interface/product-category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getProductCategory(): Observable<any> {
    return this.http.get('http://localhost:3000/getProductCategory');
  }
}
