import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import { GetUserService } from './Shared/get-user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { AuthService } from './Shared/auth.service';
import { of } from 'rxjs';


describe('AppComponent', () => {
 let httpClient : HttpClient;
 let httpTestingController: HttpTestingController;
 let component: AppComponent;
 let fixture: ComponentFixture<AppComponent>;
let authService=jasmine.createSpyObj('AuthService',['getUserObservable']);

//let activeIndexSpy =spyOnProperty(GetUserService.activeLinkIndex, 'value', 'get').and.returnValue(1);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
       
      ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule
      ],
      providers:[
       GetUserService,
       { provide: AuthService,
        useValue: authService }
      ]
     
    }).compileComponents();
    
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  let authUserSpy=authService.getUserObservable.and.returnValue(of({email:'abc@gmail.com',password:'123456'}));
  it('should have navLinks of type array', async () => {
    expect(component.navLinks).toBeInstanceOf(Array);
  });

 it("should set active link index",()=>{
   const link={
     index:1
   }
   component.setActiveIndex(link);
   expect(component.activeLinkIndex).toBe(link.index);
 })

 it("should fetch user",()=>{
  
   component.fetchUser();
   authService.getUserObservable().subscribe(
     (user)=>{
       expect(user).toEqual({email:'abc@gmail.com',password:'123456'});
     }
   )

   expect(component.isAuthenticated).toBeTruthy();

   

 })
//  it("should fetch active index",()=>{
//    expect(activeIndexSpy.calls.any()).toBe(true,'activeindex spy');
//    expect(component.activeLinkIndex).toBe(1);
//  })

});

