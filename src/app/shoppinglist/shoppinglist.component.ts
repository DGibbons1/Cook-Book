import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { MockDB } from '../mockDB/mockDB';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  // Declare instance variables
  public ingredients: Ingredient[] = [];
  public newIngredientName: string;
  public newIngredientQty: number;

  constructor(private database: MockDB, private router: Router) {
    this.ingredients = this.database.getShoppingList();
    if (!this.ingredients) {
      this.ingredients = [];
    }
   }

  ngOnInit() {}

  public onClear(): void {
    this.ingredients = [];
    this.database.updateShoppingList(this.ingredients);
  }

  public onAdd(): void {
    if ( this.newIngredientName && this.newIngredientName.length > 0 && this.newIngredientQty && this.newIngredientQty > 0) {
      const tempIngredient: Ingredient = new Ingredient(this.newIngredientName, this.newIngredientQty);
      this.ingredients.push(tempIngredient);
      this.database.updateShoppingList(this.ingredients);
      this.newIngredientName = '';
      this.newIngredientQty = null;
    }
  }

  public onDelete(index: number): void {
    this.ingredients.splice(index, 1);
    this.database.updateShoppingList(this.ingredients);
  }

}
