import { Component, OnInit, ElementRef } from '@angular/core';
import { GetUserService } from '../Shared/get-user.service';
import { User } from '../Shared/User';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  users: User[];
  selectedUser: User=null;
  constructor(private getUsers: GetUserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

   
    this.getUsers.fetchUsers().subscribe(

      (response) => {
        this.users = <User[]>response;
        this.route.paramMap.subscribe(

          (params => {   
            this.selectedUser = this.users[+params.get('id')-1];
            let id='user-'+this.selectedUser.id;
          
          }

          ),

        )
       
      },
      (error) => {
        console.log(error);
      }


    )

  }
  

  loadUser(user) {
  
    this.getUsers.activeIndexLink.next(0);
    this.router.navigate(['/userDetails', user.id]);
  }

}
