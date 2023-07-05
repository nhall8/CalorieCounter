import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MealModalPage } from '../meal-modal/meal-modal.page';

interface Meal {
  name: string;
  calories: number;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  targetCalories = 2000;
  consumedCalories = 1200;
  remainingCalories = this.targetCalories - this.consumedCalories;

  recentMeals: Meal[] = [
    { name: 'Pasta', calories: 400, date: new Date() },
    { name: 'Apple', calories: 95, date: new Date(new Date().setMinutes(new Date().getMinutes() - 30)) },
    { name: 'Bread', calories: 200, date: new Date(new Date().setHours(new Date().getHours() - 1)) },
    { name: 'Pizza', calories: 600, date: new Date(new Date().setHours(new Date().getHours() - 2)) },
    { name: 'Orange', calories: 100, date: new Date(new Date().setDate(new Date().getDate() - 1)) }
  ].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 2);

  todaysMeals: Meal[] = [
    { name: 'Salad', calories: 300, date: new Date() },
    { name: 'Chicken Soup', calories: 200, date: new Date() }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  addMeal(meal: Meal) {
    this.consumedCalories += meal.calories;
    this.remainingCalories = this.targetCalories - this.consumedCalories;
    this.recentMeals.unshift(meal);
    this.recentMeals = this.recentMeals.slice(0, 2);
  }

  removeMeal(meal: Meal) {
    let index = this.todaysMeals.indexOf(meal);
    if (index > -1) {
      this.todaysMeals.splice(index, 1);
      this.consumedCalories -= meal.calories;
      this.remainingCalories = this.targetCalories - this.consumedCalories;
    }
  }

  async presentMealModal() {
    const modal = await this.modalController.create({
      component: MealModalPage,
      componentProps: {
        isProfile: false
      }
    });
    return await modal.present();
  }  
}