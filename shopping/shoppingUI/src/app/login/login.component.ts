import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";
import { LoginService} from "../login/login.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
 public userLogin: FormGroup;
 public buffetBookingForm: FormGroup;
public errorMessage = "";
public re=false;
successMessage="";
 @Output()
 public userInfo = new EventEmitter();

 public user: any = "";
  constructor( private form: FormBuilder,
               private login: LoginService,
               private route: Router) { }

  public ngOnInit() {
    this.re=false;
    this.userLogin = this.form.group({
      username: ["", [Validators.required,
        Validators.pattern(/^[a-z]{3,}[@][a-z]{3,}(.com)$/)]],
      password: ["", [Validators.required,
         Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
    });

    this.login.getTime().subscribe(
      (success)=>{console.log(success);
      })
  
 
}


  
public submit(u) {

  this.login.getUser(this.userLogin.value).subscribe(
    (success) => {
      this.user = success;
      console.log("yes",this.userLogin.value)
     // sessionStorage.setItem("userInfo",this.userLogin.value)
      sessionStorage.setItem("userId",success.userName);
      sessionStorage.setItem("name",success.name);
      window.location.reload();
      this.route.navigate(["/dashboard"]);

    },
    (error) => {this.errorMessage = error.error.message;

    },
);

  }
  register(event)
  {
    
    this.re=true;
    this.route.navigate(["/register"]);
  }
}
