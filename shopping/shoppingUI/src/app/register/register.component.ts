import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterserviceService } from './registerservice.service';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userRegister :FormGroup;
  public successmessage="";
  public errorMessage="";
  constructor(private form:FormBuilder,private registerService:RegisterserviceService,private route:Router) { }

  ngOnInit() {
    this.userRegister=this.form.group(
      {
        username: ["",[Validators.required,Validators.pattern(/^[a-z]{3,}[@][a-z]{3,}(.com)$/)]],
        password: ["", [Validators.required,
          Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
          name:["",[Validators.required,Validators.pattern(/^[A-Za-z]{3,}$/)]],
          contactno:["",[Validators.required,Validators.pattern(/^[6-9][0-9]{9}$/)]]

      }
    );
  }
register()
{
  console.log(this.userRegister.value)
  this.registerService.addUser(this.userRegister.value).subscribe(
    (success)=>{console.log(success)
    if(success=="User already exists")
       {
         this.errorMessage=success;
         this.successmessage="";
       } 
      else{
        this.successmessage="registeration successfull";
        this.errorMessage="";
      }},
    (error)=>{console.log(error,"222")}
  )

}
login(){
  this.route.navigate(['/login'])
}

}
