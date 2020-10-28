import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private url = "http://localhost:3000/getuser/";
  constructor(private http:HttpClient) { }
  getUser(username)
  {
    return this.http.get(this.url+username);
  }

  updateWishlist(prodid,username)
  {
   
    return this.http.put("http://localhost:3000/removewishlist/" + prodid ,{username});
  }
}