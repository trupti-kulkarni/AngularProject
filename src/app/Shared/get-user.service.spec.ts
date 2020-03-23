import { TestBed, async, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { GetUserService } from './get-user.service';
import { HttpClient } from '@angular/common/http'


describe('GetUserService', () => {

  let injector :TestBed
  let service :GetUserService
  let httpMock : HttpTestingController
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers:[GetUserService]

    })
    injector = getTestBed();

    service = injector.get(GetUserService);
    
    httpMock = injector.get(HttpTestingController);
  });

  it("should return obsrvable<User> users", () => {
  
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
        street: 'string',
        suite: 'string',
        city: 'string',
        zipcode: 123,
      },
      phone: '89027673',
      website: 'abc.com',
      geo: {
        'lat': '-37.3159',

        "lng": '81.1496'
      },


    }]
    service.fetchUsers().subscribe(

      (users) => {
        expect(users.length).toBe(1);
        expect(users).toEqual(expectedUsers);
      });
      const req = httpMock.expectOne(service.url);
      expect(req.request.method).toBe('GET');
      req.flush(expectedUsers);

  });
  
  it("should add and get active link",()=>{
    service.addActiveLinkIndex(1);
       
    service.getActiveLinkIndex().subscribe(
      index=>{
        expect(index).toBe(1); 
      }
    )
  })



});
