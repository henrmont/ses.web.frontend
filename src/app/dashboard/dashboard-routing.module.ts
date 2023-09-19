import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { AppLayoutComponent } from '../shared/app-layout/app-layout.component';
import { authResolve } from '../account/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardViewComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
