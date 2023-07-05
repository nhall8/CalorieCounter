import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

interface Meal {
  name: string;
  calories: number;
  photo?: string;
}

@Component({
  selector: 'app-meal-modal',
  templateUrl: './meal-modal.page.html',
  styleUrls: ['./meal-modal.page.scss'],
})
export class MealModalPage implements OnInit {
  @Input() isProfile: boolean = false;
  @Input() meals: Meal[] = [];

  isEditing = false;
  
  mealForm: FormGroup = this.formBuilder.group({ meals: this.formBuilder.array([]) });

  constructor(private formBuilder: FormBuilder, private modalController: ModalController) { }

  ngOnInit() {
    this.isEditing = !this.isProfile;

    const mealsFormArray = this.mealForm.get('meals') as FormArray;
    
    if (this.meals && this.meals.length > 0) {
      this.meals.forEach(meal => {
        mealsFormArray.push(this.createMealFormGroup(meal));
      });
    } else {
      mealsFormArray.push(this.createMealFormGroup());
    }
  } 
    
  get mealsArray(): FormArray {
    return this.mealForm.get('meals') as FormArray;
  }
  
  createMealFormGroup(meal: Meal = {name: '', calories: 0}): FormGroup {
    return this.formBuilder.group({
      name: [meal.name || '', Validators.required],
      calories: [meal.calories || '', Validators.required],
      photo: [meal.photo || '']
    });
  }

  enableEditing() {
    this.isEditing = true;
  }

  addMeal() {
    this.mealsArray.push(this.createMealFormGroup());
  }

  removeMeal(index: number) {
    this.mealsArray.removeAt(index);
  }

  saveMeal() {
    console.log(this.mealForm.value);
    this.modalController.dismiss(this.mealForm.value);
  }

  cancel() {
    this.modalController.dismiss();
  }

  // async takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //   }
  
  //   const imageData = await this.camera.getPicture(options);
  //   const base64Image = 'data:image/jpeg;base64,' + imageData;
    
  //   return base64Image;
  // }

  // async uploadPicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //   }
  
  //   const imageData = await this.camera.getPicture(options);
  //   const base64Image = 'data:image/jpeg;base64,' + imageData;
  
  //   return base64Image;
  // }

}
