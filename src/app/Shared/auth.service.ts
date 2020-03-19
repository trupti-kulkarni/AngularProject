import { Injectable } from '@angular/core';
import { GetUserService } from './get-user.service';
import { User } from './User';
import { AuthUser } from './AuthUser';

@Injectable()
export class AuthService {
  constructor(private userService: GetUserService) {}
  // ...
  public isAuthenticated(): boolean {
   // const token = localStorage.getItem('token');
  // console.log("in is authenticated---");
    // this.userService.loggedInUser.subscribe(
    //     (user : AuthUser )=>{
    //      console.log("user is-------",user)
    //      if(user.username ==='admin' && user.password ==='admin'){
    //         return true;
    //      }
    //     }
    // )
    // Check whether the token is expired and return
    // true or false
    //return !this.jwtHelper.isTokenExpired(token);
    return true;
  }
}