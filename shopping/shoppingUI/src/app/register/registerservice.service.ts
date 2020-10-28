import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  // public url = "http://localhost:3000/adduser";
  // constructor(private http: HttpClient) { }
  // public addUser(u): Observable<any> {
  //   return this.http.post(this.url,u);
  // }
  private url = "http://localhost:3000/adduser";
  constructor(private http: HttpClient) { }
  public addUser(value): Observable<any> {
    
    return this.http.post(this.url, value);
  }
}
