import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealModalPageRoutingModule } from './meal-modal-routing.module';

import { MealModalPage } from './meal-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealModalPageRoutingModule,
    ReactiveFormsModule // Add this
  ],
  declarations: [MealModalPage]
})
export class MealModalPageModule {}
