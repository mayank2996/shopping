import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class DashboardService {
 public url = "http://localhost:3000/getproduct";
 public url2 = "http://localhost:3000/updateproduct/";
 public url3="http://localhost:3000/updatewishlist/"
  constructor(private http: HttpClient) { }
  public getItem(): Observable<any> {
    return this.http.get(this.url);
  }
  public updateUser(obj, username): Observable<any> {
    return this.http.put(this.url2 + username, obj);
  }
  public updateWishlist(product,username){
    return this.http.put(this.url3+username,product);
  }
}
