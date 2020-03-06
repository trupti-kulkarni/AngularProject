import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbakFormComponent } from './user-feedbak-form.component';

describe('UserFeedbakFormComponent', () => {
  let component: UserFeedbakFormComponent;
  let fixture: ComponentFixture<UserFeedbakFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFeedbakFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedbakFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
