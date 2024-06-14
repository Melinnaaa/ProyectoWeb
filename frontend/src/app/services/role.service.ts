import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getRole();
    if (role === '1') {  // admin role
      this.router.navigate(['/admin']);
      return false;
    } else if (role === '0') {  // user role
      this.router.navigate(['/principal']);
      return false;
    }
    return true;
  }
}