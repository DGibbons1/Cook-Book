import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Import each Component required for routing
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

// Declare Routes
const routes: Routes = [
  { path: 'recipes', loadChildren: './home/home.module#HomeModule' },
  { path: 'shoppinglist',  component: ShoppinglistComponent},
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
