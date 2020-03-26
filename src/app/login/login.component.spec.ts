import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../Shared/auth.service';
import { of, throwError } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ɵpatchComponentDefWithScope } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
 let authSpy :jasmine.Spy;
 let loginSpy:jasmine.Spy;
 let router : Router
 let signupError:jasmine.Spy;
 let authService=jasmine.createSpyObj('AuthService',[
  'signUp',
  'login',
  'setUser',
  'getUserObservable'

])
const AuthResponse={
  idToken :'1',
  email :'tsk@gmail.com',
  refreshToken :'xyz',
  expiresIn :'3600',
  localId:'abc'

}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule,
        HttpClientModule,
        RouterTestingModule,
        RouterModule],
      providers:[
        { provide: AuthService,
          useValue: authService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    authSpy=authService.signUp.and.returnValue(of(AuthResponse));
    loginSpy=authService.login.and.returnValue(of(AuthResponse));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should switch login mode',()=>{
    component.switchMode();
    fixture.detectChanges();
    expect(component.isLoginMode).toBeTruthy();
  })

  it('should redirect to user table ',()=>{
   
    const navigateSpy = spyOn(router, 'navigate');
   
    component.onSubmit();
   
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['/userTable']);
    
  })
  it("should reset user",()=>{
    component.resetUser();
    let user;
    authService.getUserObservable.and.returnValue(of(null));
    authService.getUserObservable().subscribe(
      resp=> user=resp
    )
    expect(user).toBeNull();
  })

  it("should chek loginMode and call login api accordingly",()=>{
    component.isLoginMode=true;
    component.onSubmit();
    fixture.detectChanges();
    if(component.isLoginMode){
     expect(loginSpy).toBeTruthy();
     expect(component.isLoading).toBeFalsy();
    }
    
  })
  xit("should throw error on signup if user is already created",()=>{
    signupError=authService.signUp.and.returnValue(throwError({status:400, message: "EMAIL_EXISTS"}));
  
  })
});
