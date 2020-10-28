import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { Order } from "src/assets/order";
import { Product } from "src/assets/product";
import {DashboardService} from "../dashboard/dashboard.service";
import { LoginService } from "../login/login.service";
import { ProductService } from "./product.service";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  public productList;
  public productId: string;
  public quantity;
  public product = new Product();
public loader = true;
  public objUpdate = new Order();

  constructor(private db: DashboardService,
              private activate: ActivatedRoute,
              private login: LoginService,
              private snackbar: MatSnackBar,
              private route:Router) {

  }

  public ngOnInit() {
    this.activate.params.subscribe(
     (element) => {
                   this.productId = element.id;
},
     );
    this.db.getItem().subscribe(
      (productList) => {
           // console.log(productList);
            this.productList = productList;
            this.getProduct();
            this.quantity = this.product.pSeller.pQuantity;
            this.loader = false;
       },
      (e) => {
        const err = e;

      },
    );
//console.log(typeof(this.productId))
  }
  public onNotify() {
    this.snackbar.open("we will notify you", "close", {duration: 2000, panelClass: ["notify"]});
  }

public onBuy() {
  if(sessionStorage.getItem("userId"))
  {
this.quantity -= 1;
this.objUpdate.orderId = "";
this.objUpdate.pId = this.productId;
this.objUpdate.orderDate = new Date();
this.objUpdate.price = this.product.price *
 (1 - this.product.pSeller.pDiscount) + this.product.pSeller.pShippingCharges;

this.db.updateUser(this.objUpdate, sessionStorage.getItem("userId")).subscribe((element) => {

  this.snackbar.open("Order has been placed with order Id " + element,
   "close", {duration: 2000, panelClass: ["order-success"]});

},
(err) => {const error = err;

});
  }
  else{
    this.route.navigate(["/login"])
  }
}

public getProduct() {
  this.product = this.productList.find((element) => {
    if (element.id == this.productId) {
      return true;
    }
   

  });
  console.log(this.product)

}
}
