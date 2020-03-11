import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetUserService } from '../Shared/get-user.service';

@Component({
  selector: 'app-user-feedbak-form',
  templateUrl: './user-feedbak-form.component.html',
  styleUrls: ['./user-feedbak-form.component.css']
})
export class UserFeedbakFormComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private userService: GetUserService) { }
  userForm:FormGroup;
  
  ngOnInit(): void {
    
 
  this.userForm = new FormGroup({

    'userName':new FormControl(null,Validators.required),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    
    'phone': new FormControl(null,[Validators.required,Validators.minLength(10)]),
    
    'street': new FormControl({value: '', disabled: true}),
    'city' : new FormControl({value: '', disabled: true}),
    'state' : new FormControl(null),
    'zipcode': new FormControl(null),
    'comments': new FormControl(null)


  });

  }

  onSubmit(){
    this.snackbar.open("Thanks For the Feedback!!",'',{
      duration:2000,
    });
}
}