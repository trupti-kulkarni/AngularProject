import { Component, ViewChild } from '@angular/core';
import { GetUserService } from './Shared/get-user.service';
import { User } from './Shared/User';
import { map }  from 'rxjs/operators'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'MatTable';
  // users : User[];
   navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router, private userService: GetUserService) {
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

  this.userService.activeIndexLink.subscribe(
    (activeLinkIndex=> this.activeLinkIndex=activeLinkIndex )
   
     );
  // this.router.events.subscribe((res) => {
  //   console.log("active tab index",this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' )));
  //   this.userService.activeIndexLink.next(this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.')))
  //    // this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' ));
  // });
}
ngAfterViewInit(){
// this.userService.activeIndexLink.subscribe(
//   (activeLinkIndex=> this.activeLinkIndex=activeLinkIndex )
 
//    );
}

setActiveIndex(link){
  this.activeLinkIndex=link.index;
  //this.router.navigateByUrl(link.link)
}
}
