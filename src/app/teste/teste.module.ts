import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteRoutingModule } from './teste-routing.module';
import { PageOneComponent } from './views/page-one/page-one.component';
import { PageTwoComponent } from './views/page-two/page-two.component';
import { PageThreeComponent } from './views/page-three/page-three.component';


@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
  ],
  imports: [
    CommonModule,
    TesteRoutingModule
  ]
})
export class TesteModule { }
