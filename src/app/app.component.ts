import { Component} from '@angular/core';
import { GetUserService } from './Shared/get-user.service';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './Shared/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks: any[];
  activeLinkIndex = -1; 
  isAuthenticated: boolean;

  constructor(private router: Router, private userService: GetUserService , private activeRoute: ActivatedRoute, private authService: AuthService) {
    this.navLinks = [
        {
            label: 'Users',
            link: './userTable',
            index: -1
        }, {
            label: 'User Details',
            link: './userDetails/1',
            index: 0
         },
          {
            label: 'Feedback Form',
            link: './UserFeedbackForm',
            index: 1
        }, 
        
        
    ];
}

   
ngOnInit(): void {

   console.log("path from root is--",this.activeRoute)
  this.userService.getActiveLinkIndex() .subscribe(
    (activeLinkIndex=> this.activeLinkIndex=activeLinkIndex )
   
     );
    
    this.fetchUser();
    
  // this.router.events.subscribe((res) => {
  //   console.log("active tab index",this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' )));
  //   this.userService.activeIndexLink.next(this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.')))
  //    // this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' ));
  // });
}

fetchUser(){
  this.authService.getUserObservable().subscribe(
    (user)=>{
      console.log("user is---",user);
      if(user){
        this.isAuthenticated=true;
        console.log("authentication is---",this.isAuthenticated)
      }

    }
  )
}

setActiveIndex(link){
  this.activeLinkIndex=link.index;
}
}
