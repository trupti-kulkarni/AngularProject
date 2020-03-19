import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GetUserService } from '../Shared/get-user.service';
import { RouterModule,Router, convertToParamMap, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, BehaviorSubject } from 'rxjs';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserDetailsComponent } from './user-details.component';
import { MatCardModule } from '@angular/material/card';
import { User } from '../Shared/User';


describe('User Details Component', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let router : Router
  let getUsersSpy: jasmine.Spy;
  let errorSpy: jasmine.Spy;


  beforeEach(async(() => {
    const expectedUsers: any[] = [{

      id: 1,
      name: 'tsk',
      username:'tsk',
      email: 'tk@gslab.com',
      company: {
        name: 'GS Lab',
        catchPhrase: 'HII',
        bs: 'gjgj',
      },
      address: {
      street: "Kattie Turnpike", 
      suite: "Suite 198",
       city: "Lebsackbury", 
       zipcode: "31428-2261"
    },
      
      phone: '89027673',
      website: 'abc.com',
      geo: {
        'lat': '-37.3159',

        "lng": '81.1496'
      },


    }]
    const userService = jasmine.createSpyObj('GetUserService', [
      'fetchUsers'
     
    ]);
   getUsersSpy= userService.fetchUsers.and.returnValue(of(expectedUsers));
   


    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ], 
      imports:[
        BrowserAnimationsModule,
        RouterTestingModule,
        RouterModule,
        MatCardModule
      ],
      providers:[
       { provide:GetUserService , useValue: userService },
       {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock1
      },
       
      ]

    }).compileComponents();
    fixture = TestBed.createComponent(UserDetailsComponent);
    router = fixture.debugElement.injector.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create component",()=>{
    expect(component).toBeTruthy();
  })

  it("should fetch users",()=>{
    expect(getUsersSpy.calls.any()).toBe(true, 'getUsersSpy called');
    expect(component.users).toBeTruthy();

  })

 

//   it('should fetch users list', () => {
//     //  component.loadUsers();
//     expect(getUsersSpy.calls.any()).toBe(true, 'getUsersSpy called');
//     expect(component.users).toBeTruthy();
//   });



// it("should load selected user",()=>{
//     const user={
//         id:1
//     }
//     const navigateSpy = spyOn(router, 'navigate');
//     component.loadSelectedUser(user);
//     GetUserService.activeLinkIndex.next(0);
//      expect(navigateSpy).toHaveBeenCalledWith(['/userDetails/1']);
// })
  
  
});
export class ActivatedRouteMock1 {
    paramMap = of(
      convertToParamMap({
        id: 1
      })
    );
  }
  
  
  
