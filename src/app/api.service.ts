import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class Eventservice {
 
  BaseUrl = "http://localhost:3000/"
 
  private registerUrl = this.BaseUrl + 'auth/register';
  private loginUrl = this.BaseUrl + 'auth/login';


 
  constructor(private http: HttpClient) { }
 
  registerApi(body: any): Observable<any> {
    return this.http.post(this.registerUrl, body);
  }

  loginApi(body: any): Observable<any> {
    return this.http.post(this.loginUrl, body);
  }
}
 