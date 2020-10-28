import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class ViewOrderService {
 public url="http://localhost:3000/updateorder/"
  constructor(private login: LoginService,private http: HttpClient) { }
  public getUser(value): Observable<any> {
    return this.http.get("http://localhost:3000/getuser/"+value);
  }
  public updateOrder(prodid,username)
  {
   
    return this.http.put("http://localhost:3000/updateorder/" + prodid , username);
  }
}
