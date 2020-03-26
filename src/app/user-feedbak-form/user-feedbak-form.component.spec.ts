import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbakFormComponent } from './user-feedbak-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, Observable } from 'rxjs';
import { convertToParamMap, ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserFeedbakFormComponent', () => {
  let component: UserFeedbakFormComponent;
  let fixture: ComponentFixture<UserFeedbakFormComponent>;
  let snack: MatSnackBar;
  let router:Router;
  let MockRouter = jasmine.createSpy('navigate');
   class ActivatedRouteMock1 {
    queryParams = of(
      convertToParamMap({
        username : 'tk',
        email : 'tk@gmail.com',
        phone:'8907268134'
      })
    );
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFeedbakFormComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        RouterModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock1
        },
        
      ]
    })
      .compileComponents();
      fixture = TestBed.createComponent(UserFeedbakFormComponent);
      component = fixture.componentInstance;
      router = fixture.debugElement.injector.get(Router);
      snack=fixture.debugElement.injector.get(MatSnackBar);
      fixture.detectChanges();
  
  }));


  it('should create Feedback form', () => {
    expect(component).toBeTruthy();
  });

  it('should load cities when state is selected', () => {
    component.userForm.get('state').setValue('Maharashtra');

    component.loadCities();
    expect(component.selectedCities).toBeTruthy();

  });

  it("should not load cities when state is not selected", () => {
    component.userForm.get('state').value == '';

    component.loadCities();
    expect(component.selectedCities).toBeFalsy();

  })

  it('should open snack bar on submit form', () => {
    
    let spy = spyOn(snack,'open');
    let feedbackData = {
      userName: 'tk',
      email: 'tk@gmail.com',
      phone: '8907268134',
      state: 'Maharashtra',
      city: 'Pune',
      street: 'abc',
      zipcode: '413004',
      comments: 'good!',
    };
    component.userForm.setValue(feedbackData);
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  })

  

});


