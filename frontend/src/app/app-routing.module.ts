import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { isLoggedInGuard } from './guards/is-logged-in.guard';

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
    canMatch: [isLoggedInGuard],
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }