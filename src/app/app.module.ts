import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipelistComponent } from './home/recipelist/recipelist.component';
import { RecipedetailComponent } from './/home/recipedetail/recipedetail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeeditComponent } from './home/recipeedit/recipeedit.component';
import { RecipeInitComponent } from './home/recipe-init/recipe-init.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppinglistComponent,
    RecipelistComponent,
    RecipedetailComponent,
    HeaderComponent,
    RecipeeditComponent,
    RecipeInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
