import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-feedbak-form',
  templateUrl: './user-feedbak-form.component.html',
  styleUrls: ['./user-feedbak-form.component.scss']
})
export class UserFeedbakFormComponent implements OnInit {

   username:string;
   email:string;
   phone:string;
  constructor(private snackbar: MatSnackBar, private route:ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.username = params["username"];
      this.email = params["email"];
      this.phone=params["phone"];
  });
   }
  userForm: FormGroup;
  states = ["Andhra Pradesh", "Rajasthan", "Maharashtra", "Madhya Pradesh"];
  cities = {
    "Andhra Pradesh": ['Hyderabad','nizamabad'],
    "Rajasthan": ['Jodhpur','Jaipur'],
    "Maharashtra": ["Pune", "Mumbai","Solapur"],
    "Madhya Pradesh": ["Indore","Sagar","Bhopal"]

  }
  selectedCities: [];

  ngOnInit(): void {


    this.userForm = new FormGroup({

      'userName': new FormControl(this.username, Validators.required),
      'email': new FormControl(this.email, [Validators.required, Validators.email]),

      'phone': new FormControl(this.phone, [Validators.required, Validators.minLength(10)]),
      'state': new FormControl('', Validators.required),
     
      'city': new FormControl({ value: '', disabled: true }),
      'street': new FormControl({ value: '', disabled: true }),
      'zipcode': new FormControl('', Validators.required),
      'comments': new FormControl('', Validators.required)


    });

    this.loadCities();

  }
  loadCities() {

    this.userForm.get('state').valueChanges.subscribe(
      (value) => {
        this.selectedCities = this.cities[value];
      }
    )

  }

  onSubmit() {
    this.snackbar.open("Thanks For the Feedback!!", '', {
      duration: 2000,
    });
    // this.userForm.markAsUntouched;
    // this.userForm.reset();
  }

}