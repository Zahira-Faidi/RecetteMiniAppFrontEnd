import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecetteComponent } from './list-recette/list-recette.component';
import { FormRecetteComponent } from './form-recette/form-recette.component';
import { LoginComponent } from './login/login.component';
import { FormIngredientComponent } from './form-ingredient/form-ingredient.component';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';

const appRoutes: Routes = [
  { path: 'Recette', component: ListRecetteComponent },
  { path: 'AjouterRecette', component: FormRecetteComponent },
  { path: 'Ingredient', component: ListIngredientComponent },
  { path: 'AjouterIngredient', component: FormIngredientComponent },

  { path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
