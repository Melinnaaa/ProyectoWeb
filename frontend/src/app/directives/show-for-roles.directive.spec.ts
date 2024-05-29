import { ShowForRolesDirective } from './show-for-roles.directive';
import { AuthService } from '../services/auth.service';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('ShowForRolesDirective', () => {
  let directive: ShowForRolesDirective;
  let authService: AuthService;
  let templateRef: TemplateRef<any>;
  let viewContainer: ViewContainerRef;

  beforeEach(() => {
    const authServiceStub = {
      getRole: () => '1', // Stub getRole to return a role
      isLoggedIn: () => true // Stub isLoggedIn to return true
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: TemplateRef, useValue: {} },
        { provide: ViewContainerRef, useValue: { createEmbeddedView: () => {}, clear: () => {} } }
      ]
    });

    authService = TestBed.inject(AuthService);
    templateRef = TestBed.inject(TemplateRef);
    viewContainer = TestBed.inject(ViewContainerRef);
    directive = new ShowForRolesDirective(authService, templateRef, viewContainer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should show the view for allowed roles', () => {
    spyOn(authService, 'getRole').and.returnValue(1);
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    spyOn(viewContainer, 'createEmbeddedView');

    directive.allowedRoles = [1];
    directive.ngOnInit();

    expect(viewContainer.createEmbeddedView).toHaveBeenCalledWith(templateRef);
  });

  it('should clear the view for disallowed roles', () => {
    spyOn(authService, 'getRole').and.returnValue(2);
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    spyOn(viewContainer, 'clear');

    directive.allowedRoles = [1];
    directive.ngOnInit();

    expect(viewContainer.clear).toHaveBeenCalled();
  });
});
