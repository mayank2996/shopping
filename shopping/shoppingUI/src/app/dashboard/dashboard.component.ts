import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { Product } from "src/assets/product";
import { Order } from "../../assets/order";
import { LoginService } from "../login/login.service";
import { DashboardService } from "./dashboard.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  public productArr = [];
  public valid = true;
  public value: string = "All";
  public searchElement: string = '';
  public products = [];
  public quantity;
  public noMatch = false;
  //  public oId: string;
  //  public alertSuccess = false;
  //  public close;
  public errorMessage: string;
  public productobj = new Product();
  public objUpdate = new Order();
  public loader = true;
  constructor(private db: DashboardService,
    private route: Router,
    private login: LoginService,
    private snackbar: MatSnackBar) { }

  public ngOnInit() {


    this.db.getItem().subscribe(
      (s) => {

        this.products = s;
        this.productArr = s;
        this.loader = false;

      },
      (e) => {
        this.errorMessage = e.error.message;
      },
    );
  }

  public onClick(v) {
    this.valid = true;
    this.value = v;
    this.noMatch = false;
    if (this.value === "All") {
      this.productArr = this.products;

    } else {
      this.productArr = this.products.filter((element) => {
        if (element.pCategory === this.value) {
          return true;
        }
      });
    }
  }


  public onProductClick(id) {

    this.route.navigate(["/product/" + id]);

  }


  public onWishlist(product) {
    if (sessionStorage.getItem("userId")) {
    this.db.updateWishlist(product, sessionStorage.getItem("userId")).subscribe(
      (s) => { this.snackbar.open(JSON.stringify(s), "close", { duration: 2000, panelClass: ["order-info"] }); }
      ,
      (e) => { console.log(e.error.message) }
    )
  }

  else {
    this.route.navigate(['/login']);
  }
}


  public onSearch() {
    this.valid = false;
    console.log(this.searchElement)
    if (this.searchElement != '') {
      this.productArr = this.products.filter((element) => {
        if ((element.pName.toUpperCase()).startsWith
          (this.searchElement.toUpperCase())) {
          return true;
        }

      });
    }
    else {
      if (this.value === "All") {
        this.productArr = this.products;

      } else {
        this.productArr = this.products.filter((element) => {
          if (element.pCategory === this.value) {
            return true;
          }
        });
      }
    }
    if (this.productArr.length === 0) {
      this.noMatch = true;
    } else {
      this.noMatch = false;
    }

  }

  public onNotify() {
    this.snackbar.open("we will notify you", "close", { duration: 2000, panelClass: ["notify"] });
  }

  public onBuy(id) {
    if (sessionStorage.getItem("userId")) {
      this.productobj = this.products.find((element) => {
        if (element.id === id) {
          return true;
        }
      });
      this.quantity = this.productobj.pSeller.pQuantity;
      this.quantity -= 1;
      this.objUpdate.orderId = "100";
      this.objUpdate.pId = id;
      this.objUpdate.orderDate = new Date();
      this.objUpdate.price = this.productobj.price *
        (1 - this.productobj.pSeller.pDiscount) +
        this.productobj.pSeller.pShippingCharges;

      this.db.updateUser(this.objUpdate, sessionStorage.getItem("userId")).subscribe((element) => {

        this.products.forEach((ele) => {
          if (ele.id === id) {
            ele.pSeller.pQuantity -= 1;

          }
        });

        this.snackbar.open("Order has been placed with order Id "
          + element,
          "close", { duration: 2000, panelClass: ["order-success"] });
      },
        (err) => {
          const error = err;
        });
    }
    else {
      this.route.navigate(['/login']);
    }
  }
}
