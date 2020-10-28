import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  static userName;
 private url = "http://localhost:3000/getuser";
 private url2="http://localhost:8080/employee/6"
  constructor(private http: HttpClient) { }
  public getUser(value): Observable<any> {
    LoginService.userName = value;
    console.log(1,value);
    return this.http.post(this.url, value);
  }

  public  getTime(){

    return this.http.get(this.url2);
  }
  public getUsername():any {
//console.log(LoginService.userName)
    return LoginService.userName;
  }
}
