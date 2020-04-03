import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipelistComponent } from './home/recipelist/recipelist.component';
import { ReceipedetailComponent } from './receipedetail/receipedetail.component';
import { RecepiedetailComponent } from './home/recepiedetail/recepiedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppinglistComponent,
    RecipelistComponent,
    ReceipedetailComponent,
    RecepiedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
