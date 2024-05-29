import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authRoleGuardGuard } from './auth-role-guard.guard';

describe('authRoleGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authRoleGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
