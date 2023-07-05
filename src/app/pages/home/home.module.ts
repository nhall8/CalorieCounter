import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  schemas: [
  NO_ERRORS_SCHEMA
],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot()
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
