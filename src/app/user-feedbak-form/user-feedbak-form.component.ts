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

      'userName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),

      'phone': new FormControl('', [Validators.required, Validators.minLength(10)]),
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
    this.userForm.reset;
  }

}