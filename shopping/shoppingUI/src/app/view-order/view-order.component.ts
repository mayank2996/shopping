import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login/login.service";
import { ViewOrderService } from "./view-order.service";
import { log } from 'util';

@Component({
  selector: "app-view-order",
  templateUrl: "./view-order.component.html",
  styleUrls: ["./view-order.component.css"],
})
export class ViewOrderComponent implements OnInit {
  public userInfo: any;
  public username:string;
  public length: number;
  public userOrder:Array<any>;
  public errorMessage;
  constructor( private loginService: LoginService, private route: Router,private viewService:ViewOrderService) { }

  public ngOnInit() {

if(sessionStorage.getItem("userId"))
{
  this.username=sessionStorage.getItem("userId");
  this.viewService.getUser(this.username).subscribe(
    (user) => {this.userInfo = user;
                  console.log(user)
               this.userOrder = user.purchase;
               this.length = user.purchase.length;
                    },
    (error) => {
      this.errorMessage = error.error.message;
      this.username="";
    },
  );
}
else{
  this.username="";
}
  }
  public shopping() {
    this.route.navigate(["\dashboard"]);
  }
public updateOrder(orderid)
{
  console.log(222,Number(orderid));
this.viewService.updateOrder(Number(orderid),this.userInfo).subscribe(
  (success)=>{console.log(success)
   this.ngOnInit();}
)
}
}
