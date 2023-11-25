import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIngredientComponent } from './form-ingredient.component';

describe('FormIngredientComponent', () => {
  let component: FormIngredientComponent;
  let fixture: ComponentFixture<FormIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormIngredientComponent]
    });
    fixture = TestBed.createComponent(FormIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
