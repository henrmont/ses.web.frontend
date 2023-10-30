import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAccountViewComponent } from './account/views/login-account-view/login-account-view.component';
import { CreateAccountViewComponent } from './account/views/create-account-view/create-account-view.component';
import { authGuard, authResolve } from './account/guards/auth.guard';
import { noAuthGuard } from './account/guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginAccountViewComponent,
    canActivate: [noAuthGuard]
  },
  {
    path: 'registrar',
    component: CreateAccountViewComponent,
    canActivate: [noAuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard],
    resolve: {resolve: authResolve}
  },
  {
    path: 'projetos',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
    canActivate: [authGuard],
    resolve: {resolve: authResolve}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
