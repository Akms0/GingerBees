import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private url: string = 'http://localhost:3333';
  private token: string;
  httpOptions: any = {};
  
  constructor(private http: HttpClient) { 
  }

  addProducts(name: string, email: string): Observable<any>{
    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }
    
    return this.http.post<any>(`${this.url}/products`, {nomeProduto: name, email: email}, {headers: this.httpOptions});
  }

  login(email: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.url}/login`, {email: email, password: password}, {headers: this.httpOptions});
  }

  User(user: {name:string, email:string, password:string }): Observable<any>{
    return this.http.post<any>(`${this.url}/user`, user);
  }

 

  listProduct(): Observable<any>{

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }
    
    return this.http.get<any>(`${this.url}/products`, {headers: this.httpOptions})
  }
  
}