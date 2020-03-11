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

    this.getUsers.fetchUser().subscribe(

      (response) => {
        this.users = <User[]>response;
        this.route.paramMap.subscribe(

          (params => {
            // console.log("parameter is----",params,params.get('id'));
            // console.log("user is---",this.users[+params.get('id')-1])
            
            this.selectedUser = this.users[+params.get('id')-1];
            let id='user-'+this.selectedUser.id;
            //console.log(document.getElementById(this.selectedUser.username));
            //document.getElementById('user-'+(this.selectedUser.id)).style.backgroundColor ='gray';
          
          }

          ),

        )
       
      },
      (error) => {
        console.log(error);
      }


    )




  }
  // ngViewAfterInit(){
  //   document.getElementById('user-'+(this.selectedUser.id -1)).style.backgroundColor ='gray';
          
  // }

  loadUser(user) {
   // console.log("user ", user.name, "is loaded");
    //console.log(document.getElementById(user.username));
    this.getUsers.activeIndexLink.next(0);
    this.router.navigate(['/userDetails', user.id]);
  }

}
