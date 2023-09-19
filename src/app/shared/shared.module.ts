import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MaterialModule } from '../material/material.module';
import { HeaderAppLayoutComponent } from './app-layout/components/header-app-layout/header-app-layout.component';
import { FooterAppLayoutComponent } from './app-layout/components/footer-app-layout/footer-app-layout.component';
import { WebMenuAppLayoutComponent } from './app-layout/components/web-menu-app-layout/web-menu-app-layout.component';
import { MobileMenuAppLayoutComponent } from './app-layout/components/mobile-menu-app-layout/mobile-menu-app-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderAppLayoutComponent,
    FooterAppLayoutComponent,
    WebMenuAppLayoutComponent,
    MobileMenuAppLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
