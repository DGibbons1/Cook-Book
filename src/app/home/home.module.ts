import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import routing module
import { HomeRoutingModule } from './home-routing.module';

// Import Components
import { RecipeInitComponent } from '../home/recipe-init/recipe-init.component';
import { RecipedetailComponent } from '../home/recipedetail/recipedetail.component';
import { RecipeeditComponent } from '../home/recipeedit/recipeedit.component';
import { HomeComponent } from './home.component';
import { RecipelistComponent } from './recipelist/recipelist.component';


@NgModule({
  declarations: [
    HomeComponent,
    RecipeInitComponent,
    RecipedetailComponent,
    RecipeeditComponent,
    RecipelistComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
