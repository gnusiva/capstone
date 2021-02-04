import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getProductCategory(): Observable<any> {
    return this.http.get('http://localhost:3000/getProductCategory');
  }

  getBrands(): Observable<any> {
    return this.http.get('http://localhost:3000/getBrands');
  }

  createUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/createNewUser', data);
  }

}
