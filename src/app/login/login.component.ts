import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from '../Shared/AuthUser';
import { GetUserService } from '../Shared/get-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: GetUserService) { }
  loginForm: FormGroup;
  user: AuthUser={
    username:'',
    password:''
  };
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      'userName':new FormControl(''),
      'password': new FormControl('')
    })
  }

  onLoggedIn(){
    this.userService.loggedInUser.next(this.user);
   this.router.navigateByUrl('/userTable')
  }
}
