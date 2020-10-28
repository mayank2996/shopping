import { Component, OnInit } from '@angular/core';
import { WishlistService } from './wishlist.service';
import { LoginService } from '../login/login.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { DashboardService } from '../dashboard/dashboard.service';
import { Order } from 'src/assets/order';
import { Router } from "@angular/router";
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
 wishlistProduct:any;
 prodID:string;
 length:any;
 public objUpdate = new Order();
  constructor(private wishlistService:WishlistService,private db :DashboardService,private route: Router,private snackbar:MatSnackBar) { 
    
  }

  ngOnInit() {
this.wishlistService.getUser(sessionStorage.getItem("userId")).subscribe(
  (s)=>{this.wishlistProduct=s;
       this.length=this.wishlistProduct.wishlist.length;
       console.log(this.length)
  }
)
  

  }

  public onBuy(prod) {
   
    this.objUpdate.orderId = "";
    this.objUpdate.pId = prod.id;
    this.objUpdate.orderDate = new Date();
    this.objUpdate.price = prod.price *
     (1 - prod.pSeller.pDiscount) +prod.pSeller.pShippingCharges;
     
    
    this.db.updateUser(this.objUpdate, sessionStorage.getItem("userId")).subscribe((element) => {
    
     

      this.snackbar.open("Order has been placed with order Id " + element,
       "close", {duration: 2000, panelClass: ["order-success"]});
       this.wishlistService.updateWishlist(Number( prod.id),sessionStorage.getItem("userId")).subscribe(
        (success)=>{console.log(success)
         this.ngOnInit();},
         (error)=>{console.log(11)})
    
      },
      (err) => {const error = err;
        
      });
    }


  public onRemove(pid)
{
  
this.wishlistService.updateWishlist(Number(pid),sessionStorage.getItem("userId")).subscribe(
  (success)=>{
   this.ngOnInit();}
)
}



  public onNotify() {
    this.snackbar.open("we will notify you", "close", {duration: 2000, panelClass: ["notify"]});
  }
  public shopping() {
    this.route.navigate(["\dashboard"]);
  }
}
