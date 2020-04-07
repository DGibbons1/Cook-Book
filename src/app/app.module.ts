import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';

// Import Mock Database
import { MockDB } from './mockDB/mockDB';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [MockDB],
  bootstrap: [AppComponent]
})
export class AppModule { }
