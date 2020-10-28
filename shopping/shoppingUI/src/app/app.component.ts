import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public title = "app";
  public userInfo;
  public isValid = true;
public username;
  constructor(private route: Router) {}
  public ngOnInit(){

    this.username=sessionStorage.getItem("name");
    
    
  }
public onLogout() {
  sessionStorage.clear();
  this.username="";
  
  this.route.navigate(["/login"]);
}
myFunction() {
  var x = document.getElementById("myTopnav");
  console.log(x)
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
}

