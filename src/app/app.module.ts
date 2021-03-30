import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { NgxMaskIonicModule } from 'ngx-mask-ionic';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePage } from '../app/pages/home/home.page';
import { ProfilePage } from '../app/pages/profile/profile.page';
import { ProfileListPage } from '../app/pages/profile-list/profile-list.page';

import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ProfilePage,
    ProfileListPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskIonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    AppService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
