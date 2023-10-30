import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccountInterceptor } from './account/account.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ProjectModule } from './project/project.module';
import { LayoutComponent } from './layout/layout.component';

import { HeaderLayoutComponent } from './layout/components/header-layout/header-layout.component';
import { FooterLayoutComponent } from './layout/components/footer-layout/footer-layout.component';
import { WebMenuLayoutComponent } from './layout/components/web-menu-layout/web-menu-layout.component';
import { MobileMenuLayoutComponent } from './layout/components/mobile-menu-layout/mobile-menu-layout.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    WebMenuLayoutComponent,
    MobileMenuLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AccountModule,
    ProjectModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccountInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
