import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrofonoPage } from './microfono.page';

describe('MicrofonoPage', () => {
  let component: MicrofonoPage;
  let fixture: ComponentFixture<MicrofonoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
