import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, subscribeOn, catchError, tap, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
    constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean| Observable<boolean> {

        return this.auth.user.pipe(
           
            map((user) => !!user),
            tap(isAuth=>{
                if(!isAuth){
                    this.router.navigateByUrl('login');
                }
            })
          )

 

    //   this.auth.user.subscribe(
    //       user=>{
    //           if(user)
    //             return true;
    //           return false;
    //       }
    //   )
    //    return true;
  }
}
