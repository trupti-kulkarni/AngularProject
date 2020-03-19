import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import { GetUserService } from './Shared/get-user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Component } from '@angular/core';

describe('AppComponent', () => {
 let httpClient : HttpClient;
 let httpTestingController: HttpTestingController;
 let component: AppComponent;
 let fixture: ComponentFixture<AppComponent>;
//let userService=jasmine.createSpyObj('GetUserService',['fetchUsers','activeIndexLink'])

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
       GetUserService
      ]
     
    }).compileComponents();
    
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

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

//  it("should fetch active index",()=>{
//    expect(activeIndexSpy.calls.any()).toBe(true,'activeindex spy');
//    expect(component.activeLinkIndex).toBe(1);
//  })

});

