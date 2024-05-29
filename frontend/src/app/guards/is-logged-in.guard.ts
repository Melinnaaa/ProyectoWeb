import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const isLoggedInGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = authService.isLoggedIn();

  if (!isLoggedIn) {
    router.navigate(['/login']);
  }

  return isLoggedIn;
};
