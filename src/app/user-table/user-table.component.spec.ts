import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableComponent } from './user-table.component';
import { GetUserService } from '../Shared/get-user.service';
import { RouterModule,Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, BehaviorSubject } from 'rxjs';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;
  let router : Router
  let getUsersSpy: jasmine.Spy;
  let userService: any;
  


  beforeEach(async(() => {
    const expectedUsers: any[] = [{

      id: 1,
      name: 'tsk',
      username: 'tsk',
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
    userService = jasmine.createSpyObj('GetUserService', [
      'fetchUsers',
     'getActiveIndexLink',
     'addActiveLinkIndex'
    ]);

    
   getUsersSpy= userService.fetchUsers.and.returnValue(of(expectedUsers));

    TestBed.configureTestingModule({
      declarations: [ UserTableComponent ], 
      imports:[
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatTableModule,
        RouterTestingModule,
        RouterModule
      ],
      providers:[
       { provide:GetUserService , useValue: userService }
        
      ]

    }).compileComponents();
    fixture = TestBed.createComponent(UserTableComponent);
    router = fixture.debugElement.injector.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should fetch users list', () => {
    expect(getUsersSpy.calls.any()).toBe(true, 'getUsersSpy called');
    expect(component.users).toBeTruthy();
  });

  it('should navigate to userDetails page ', () => {
    const user={
      id:1
    }
    const navigateSpy = spyOn(router, 'navigate');

    component.loadUserInfo(user);
    userService.addActiveLinkIndex(0);
    fixture.detectChanges();
     expect(navigateSpy).toHaveBeenCalledWith(['/userDetails/1']);
  });

  it('filter should get apply',()=>{
    const event={
      target: {
        value: 'xyz'
      }
    }
    component.applyFilter(event);
    expect(component.dataSource.filter).toBe(event.target.value);

  })
  
  
});

