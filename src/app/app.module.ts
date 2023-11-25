import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRecetteComponent } from './form-recette/form-recette.component';
import { ListRecetteComponent } from './list-recette/list-recette.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormIngredientComponent } from './form-ingredient/form-ingredient.component';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRecetteComponent,
    ListRecetteComponent,
    NavbarComponent,
    LoginComponent,
    FormIngredientComponent,
    ListIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
