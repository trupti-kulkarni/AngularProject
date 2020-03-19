import { Component} from '@angular/core';
import { GetUserService } from './Shared/get-user.service';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './Shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks: any[];
  activeLinkIndex = -1; 
  isAuthenticated: boolean=false;

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

   this.isAuthenticated=this.authService.isAuthenticated();
    
   console.log("path from root is--",this.activeRoute)
  this.userService.activeIndexLink.subscribe(
    (activeLinkIndex=> this.activeLinkIndex=activeLinkIndex )
   
     );
  // this.router.events.subscribe((res) => {
  //   console.log("active tab index",this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' )));
  //   this.userService.activeIndexLink.next(this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.')))
  //    // this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' ));
  // });
}


setActiveIndex(link){
  this.activeLinkIndex=link.index;
}
}
