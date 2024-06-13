import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosSensoresPage } from './datos-sensores.page';

describe('DatosSensoresPage', () => {
  let component: DatosSensoresPage;
  let fixture: ComponentFixture<DatosSensoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosSensoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
