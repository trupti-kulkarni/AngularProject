import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFormComponent } from './td-form.component';

describe('TDFormComponent', () => {
  let component: TDFormComponent;
  let fixture: ComponentFixture<TDFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
