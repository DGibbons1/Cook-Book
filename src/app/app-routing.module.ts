import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import each Component required for routing
import { HomeComponent } from './home/home.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

// Declare Routes
const routes: Routes = [
  { path: 'recipes', component: HomeComponent },
  { path: 'shoppinglist',  component: ShoppinglistComponent},
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
