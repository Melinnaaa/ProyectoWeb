import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteUserPage } from './delete-user.page';

describe('DeleteUserPage', () => {
  let component: DeleteUserPage;
  let fixture: ComponentFixture<DeleteUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
