import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   @ViewChild('loginForm') loginForm : NgForm;
   isLoginMode:boolean=false;
   isLoading: boolean=false;
   error:string;
 
  constructor( private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.resetUser();
  }

  resetUser(){
    //this.authService.setUser(null);
  }
  switchMode(){
    this.isLoginMode=!this.isLoginMode;
    console.log("login mode is--",this.isLoginMode)
  }
  onSubmit(){
   
    // console.log("email and password are---",this.loginForm.value.email,"pass",this.loginForm.value.password)
    // console.log("login mode---",this.isLoginMode);
    this.isLoading=true;
    if(this.isLoginMode){
      this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        Resp=>{
          console.log("response------",Resp)
          this.isLoading=false;
          this.router.navigate(['/userTable'])
        },
        (error)=>{
          this.isLoading=false;
          this.error=error;
          // console.log("error is--",error);
        }
      )

    }
    else{
    this.authService.signUp(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      authResp=>{
        console.log(authResp)
        this.isLoading=false;
        this.router.navigate(['/userTable'])
      },
      (error)=>{
        this.isLoading=false;
        this.error=error;
      }
    )

  }
    this.loginForm.reset();
  }

}
