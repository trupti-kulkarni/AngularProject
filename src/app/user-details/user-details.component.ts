import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { GetUserService } from '../Shared/get-user.service';
import { User } from '../Shared/User';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

  users: User[];
  selectedUser: User=null;
  @ViewChild('sidenav') sidenav: any;
 
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
      // (error) => {
      //   console.log(error);
      // }


    )

  }
 
   
  loadUser(user) {
  
    this.getUsers.addActiveLinkIndex(0);
    this.router.navigate(['/userDetails/'+user.id]);
  }
  submitFeedback(){
    this.getUsers.addActiveLinkIndex(1);
    let userSelected: NavigationExtras={
     queryParams:{
       "username": this.selectedUser.username,
       "email": this.selectedUser.email,
       "phone":this.selectedUser.phone,

     }
    }
    this.router.navigate(['UserFeedbackForm'],userSelected);
  }

}
