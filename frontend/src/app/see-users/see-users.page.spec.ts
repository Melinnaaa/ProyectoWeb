import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeUsersPage } from './see-users.page';

describe('SeeUsersPage', () => {
  let component: SeeUsersPage;
  let fixture: ComponentFixture<SeeUsersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
