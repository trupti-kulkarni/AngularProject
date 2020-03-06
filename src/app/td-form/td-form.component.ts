import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TDFormComponent implements OnInit {

  @ViewChild('userForm') userForm : NgForm;

  floatLabelControl = new FormControl('auto');

  

  constructor() { }

  ngOnInit(): void {
  }


  submitForm(){
    console.log("form---",this.userForm);
  }
}
