import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealModalPage } from './meal-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MealModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealModalPageRoutingModule {}
