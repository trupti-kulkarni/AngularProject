import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
      console.log("is authenicated--",this.auth.isAuthenticated())
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['Login']);
      return false;
    }
    return true;
  }
}