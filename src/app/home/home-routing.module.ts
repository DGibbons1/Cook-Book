import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import each Component required for routing
import { RecipeInitComponent } from './recipe-init/recipe-init.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { RecipeeditComponent } from './recipeedit/recipeedit.component';
import { HomeComponent } from './home.component';

// Declare Routes
const recipesRoutes: Routes = [
  { path: '', component: HomeComponent,
      children: [
          { path: '', component: RecipeInitComponent },
          { path: 'new', component: RecipeeditComponent },
          { path: ':id', component: RecipedetailComponent },
          { path: ':id/edit', component: RecipeeditComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
