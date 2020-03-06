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
  activeLinkIndex = 0; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Users',
            link: './userTable',
            index: 0
        }, {
            label: 'User Details',
            link: './userDetails/1',
            index: 1
         },
          {
            label: 'Feedback Form',
            link: './UserFeedbackForm',
            index: 2
        }, 
    ];
}

   
ngOnInit(): void {
//   this.router.events.subscribe((res) => {
//       this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
//   });
// }
}
}
