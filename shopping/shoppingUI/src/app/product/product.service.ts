import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductService {

  public url = "http://localhost:3000/getproduct";
  constructor(private http: HttpClient) { }
  public getItem(): Observable<any> {
    return this.http.get(this.url);
  }
}
