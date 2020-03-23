import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from './User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

   url='https://jsonplaceholder.typicode.com/users'
  
 
   // selectedUser=new BehaviorSubject <any>(null);
   activeIndexLink= new BehaviorSubject<any> (null);
  // loggedInUser= new BehaviorSubject<any>(null);
  constructor( private http : HttpClient) { 
  
    
  }

  fetchUsers(): Observable<any>{
   return this.http.get (this.url);

  }
 

  getActiveLinkIndex() {
    return this.activeIndexLink.asObservable();
  }

  addActiveLinkIndex(index) {
    this.activeIndexLink.next(index);
  }
  
}
