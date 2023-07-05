import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MealModalPage } from '../meal-modal/meal-modal.page';


interface MealDay {
  date: Date;
  totalCalories: number;
  meals: Meal[];
}

interface Meal {
  name: string;
  calories: number;
  photo?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isEditing = false;

  profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    targetCalories: 2000
  };

  mealHistory: MealDay[] = [
    { 
      date: new Date(), 
      totalCalories: 1500,
      meals: [
        { name: 'Chicken Salad', calories: 350, photo: 'https://thedelightfullaugh.com/wp-content/uploads/2020/09/smashed-double-cheeseburger.jpg' },
        { name: 'French Fries', calories: 365,  photo: 'https://thedelightfullaugh.com/wp-content/uploads/2020/09/smashed-double-cheeseburger.jpg'},
        { name: 'Chocolate Shake', calories: 285,  photo: 'https://thedelightfullaugh.com/wp-content/uploads/2020/09/smashed-double-cheeseburger.jpg' },
      ]
    },
    { 
      date: new Date(new Date().setDate(new Date().getDate()-1)), 
      totalCalories: 1800,
      meals: [ 
        { name: 'Spaghetti Bolognese', calories: 600 },
        { name: 'Bruschetta', calories: 120 },
        { name: 'Gelato', calories: 200 },
        { name: 'Cappuccino', calories: 130 }
      ]
    },
    { 
      date: new Date(new Date().setDate(new Date().getDate()-2)), 
      totalCalories: 2000,
      meals: [ 
        { name: 'Steak', calories: 679 },
        { name: 'Baked Potato', calories: 130 },
        { name: 'Caesar Salad', calories: 350 },
        { name: 'Red Wine', calories: 125 }
      ]
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  startEditing() {
    this.isEditing = true;
  }

  saveChanges() {
    this.isEditing = false;
  }

  async openMealDetails(day: MealDay) {
    const modal = await this.modalCtrl.create({
      component: MealModalPage,
      componentProps: {
        'meals': day.meals,
        'isProfile': true // Specify this modal is being opened from ProfilePage
      }
    });
  
    return await modal.present();
  }
  
}