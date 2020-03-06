import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-feedbak-form',
  templateUrl: './user-feedbak-form.component.html',
  styleUrls: ['./user-feedbak-form.component.css']
})
export class UserFeedbakFormComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }
  userForm:FormGroup;
 
  ngOnInit(): void {

  this.userForm = new FormGroup({

    'userName':new FormControl(null,Validators.required),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    
    'phone': new FormControl(null,Validators.minLength(10)),
    
    'street': new FormControl(null),
    'city' : new FormControl(null),
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