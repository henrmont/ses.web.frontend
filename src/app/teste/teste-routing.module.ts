import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../shared/app-layout/app-layout.component';
import { PageOneComponent } from './views/page-one/page-one.component';
import { PageTwoComponent } from './views/page-two/page-two.component';
import { PageThreeComponent } from './views/page-three/page-three.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'page-one',
        component: PageOneComponent
      },
      {
        path: 'page-two',
        component: PageTwoComponent
      },
      {
        path: 'page-three',
        component: PageThreeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteRoutingModule { }
