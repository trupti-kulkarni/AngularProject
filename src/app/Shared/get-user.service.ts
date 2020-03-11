import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

   url='https://jsonplaceholder.typicode.com/users'
 
   // selectedUser=new BehaviorSubject <any>(null);
   activeIndexLink= new BehaviorSubject<any> (-1);
  constructor( private http : HttpClient) { }

  fetchUser(){
   return this.http.get (this.url);

  }
  
}
