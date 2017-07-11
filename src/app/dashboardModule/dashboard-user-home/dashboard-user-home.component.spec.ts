import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserHomeComponent } from './dashboard-user-home.component';

describe('DashboardUserHomeComponent', () => {
  let component: DashboardUserHomeComponent;
  let fixture: ComponentFixture<DashboardUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
