import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { isLoggedInGuard } from './guards/is-logged-in.guard';
import { hasRoleGuard } from './guards/has-role.guard';
import { authRoleGuardGuard } from './guards/auth-role-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    canMatch: [isLoggedInGuard],
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'microfono',
    canMatch: [isLoggedInGuard],
    loadChildren: () => import('./microfono/microfono.module').then( m => m.MicrofonoPageModule)
  },
  {
    path: 'control',
    canMatch: [isLoggedInGuard],
    loadChildren: () => import('./control/control.module').then( m => m.ControlPageModule)
  },
  {
    path: 'admin',
    canMatch: [hasRoleGuard],
    canActivate: [authRoleGuardGuard],
    data:{
      allowedRoles: [1]
    },
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'search',
    canMatch: [hasRoleGuard],
    canActivate: [authRoleGuardGuard],
    data:{
      allowedRoles: [1]
    },
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'see-users',
    canMatch: [hasRoleGuard],
    canActivate: [authRoleGuardGuard],
    data:{
      allowedRoles: [1]
    },
    loadChildren: () => import('./see-users/see-users.module').then( m => m.SeeUsersPageModule)
  },
  {
    path: 'delete-user',
    canMatch: [hasRoleGuard],
    canActivate: [authRoleGuardGuard],
    data:{
      allowedRoles: [1]
    },
    loadChildren: () => import('./delete-user/delete-user.module').then( m => m.DeleteUserPageModule)
  },
  {
    path: 'update-user',
    canMatch: [hasRoleGuard],
    canActivate: [authRoleGuardGuard],
    data:{
      allowedRoles: [1]
    },
    loadChildren: () => import('./update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'account',
    canMatch: [isLoggedInGuard],
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
