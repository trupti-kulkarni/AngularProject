import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {throwError, Subject, BehaviorSubject} from 'rxjs';
import { AuthUser } from './User.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   user = new BehaviorSubject<AuthUser>(null);
  constructor(private http : HttpClient) { }

   getUserObservable(){
     return this.user.asObservable();
   }
   setUser(user){
     this.user.next(user);
   }
  signUp(email:string,password:string){
     return this.http.post<AuthResponseDate>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCa7ZO94lhTy7WCq0iqDM1yGbvKbGrF08E',{
       email: email,
       password: password,
       returnSecureToken: true
     }).pipe(catchError(this.handleError),
     tap(respData=>{
      this.handleAuthentication(respData.email,respData.localId,respData.idToken,+respData.expiresIn)
    }));

  }

  login(email:string, password:string){
    return this.http.post<AuthResponseDate>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCa7ZO94lhTy7WCq0iqDM1yGbvKbGrF08E',{
       email: email,
       password: password,
       returnSecureToken: true
     }).pipe(catchError(this.handleError),
     tap(respData=>{
       this.handleAuthentication(respData.email,respData.localId,respData.idToken,+respData.expiresIn)
     })
     );

    
  }

  private handleAuthentication( email:string, userId:string, token:string, expiresIn:number){
    const expirationDate= new Date(
      new Date().getTime()+ +expiresIn +1000
    );

    const user= new AuthUser(email,userId,token,expirationDate);
    this.user.next(user)

  }
   handleError(errorResponse){
    console.log("error message is----",errorResponse);
    let error="an unknown error";
    if(!errorResponse.error || !errorResponse.error.error){
      return throwError(error);
    } 
    switch(errorResponse.error.error.message){
      case 'EMAIL_EXISTS':
        error="this email already exists!"
        break;
        case 'EMAIL_NOT_FOUND':
          error="Not registered email";
        break;
        case 'INVALID_PASSWORD':
          error="invalid password";
          break;

    }
    return throwError(error);
  }
  
  
}

export  interface AuthResponseDate{

idToken:string	//A Firebase Auth ID token for the newly created user.
email:	string	//The email for the newly created user.
refreshToken:	string	//A Firebase Auth refresh token for the newly created user.
expiresIn	:string	//The number of seconds in which the ID token expires.
localId:string;
registered ?: boolean

}