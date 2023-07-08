import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUsersComponent } from './active-users.component';

describe('ActiceUsersComponent', () => {
  let component: ActiveUsersComponent;
  let fixture: ComponentFixture<ActiveUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveUsersComponent]
    });
    fixture = TestBed.createComponent(ActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
