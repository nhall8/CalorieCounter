import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealModalPage } from './meal-modal.page';

describe('MealModalPage', () => {
  let component: MealModalPage;
  let fixture: ComponentFixture<MealModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MealModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
