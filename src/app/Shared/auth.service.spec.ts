import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock : HttpTestingController
  const AuthResponse={
    idToken :'1',
    email :'tsk@gmail.com',
    refreshToken :'xyz',
    expiresIn :'3600',
    localId:'abc'



  }

  beforeEach(() => {
    TestBed.configureTestingModule({

      declarations: [],
      imports: [HttpClientTestingModule],
      providers:[AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get signup response",()=>{
    const email='tsk@gmial.com';
    const password='123456';

    service.signUp(email,password).subscribe(
      (authResponse)=>{
        expect (authResponse).toBe(AuthResponse);
      }
    )

    const req = httpMock.expectOne('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCa7ZO94lhTy7WCq0iqDM1yGbvKbGrF08E');
    expect(req.request.method).toBe('POST');
    req.flush(AuthResponse);


  })

  it("should get login response",()=>{
    const email='tsk@gmial.com';
    const password='123456';

    service.login(email,password).subscribe(
      (authResponse)=>{
        expect (authResponse).toBe(AuthResponse);
      }
    )

    const req = httpMock.expectOne('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCa7ZO94lhTy7WCq0iqDM1yGbvKbGrF08E');
    expect(req.request.method).toBe('POST');
    req.flush(AuthResponse);


  })
  it("should add and subscribe to user subject ",()=>{
    let user={
      email:'abc@gmail.com'
    }
    service.setUser(user);
       
    service.getUserObservable().subscribe(
      user=>{
        expect(user).toBe(user); 
      }
    )
  })


  it("should handle error",()=>{
    let errorResonse={
      error:{
        error:{
          code: 400,
          message: "EMAIL_EXISTS"

        }
      }
    }

    service.handleError(errorResonse);
    expect(service.handleError).toThrow();
    


  })
});
