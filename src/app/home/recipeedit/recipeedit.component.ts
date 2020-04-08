import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { Recipe } from '../../models/recipe';
import { MockDB } from 'src/app/mockDB/mockDB';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {

  // Declare variables
  public ingredients: Ingredient[] = [];
  public name: string;
  public imgUrl: string;
  public description: string;
  public newIngredientName: string;
  public newIngredientQty: number;

  constructor(private database: MockDB, private router: Router) {
   }

  ngOnInit() {
  }

  // Method to add ingredient to temp array
  public addIngredient(): void {
    if (this.testIngredientInput()) {
      const tempIngredient = new Ingredient(this.newIngredientName, this.newIngredientQty);
      this.ingredients.push(tempIngredient);
      this.newIngredientName = '';
      this.newIngredientQty = null;
    }
  }

  // Method to validate ingredient input
  private testIngredientInput(): boolean {
    if (this.newIngredientName && this.newIngredientName.length > 0 && this.newIngredientQty && Number(this.newIngredientQty)) {
      return true;
    } else {
      return false;
    }
  }

  // Method to remove an ingredient from the ingredients array
  public onDeleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
  }

  // Clear data from the new ingredient input fields
  public onClearIngredient(): void {
    this.newIngredientName = '';
    this.newIngredientQty = null;
  }

  // Method called when the cancel button is clicked
  public onCancel(): void {
    this.router.navigateByUrl('/recipes'); // Navigate back to recipe page
  }

  // Get the next available recipeID
  private getNextRecipeID(): number {
    const tempRecipeArr: Recipe[] = this.database.getRecipes();
    const tempNumberArr: number[] = [];
    for (const i of tempRecipeArr) {
      tempNumberArr.push(i.recipeID);
    }
    const newID = Math.max(...tempNumberArr) + 1;
    return newID;
  }

  // Add new recipe to Mock Database
  public onSave(): void {
    if ( this.testRecipeDataEntry() ) {
      const recipeID = this.getNextRecipeID();
      const tempRecipe: Recipe = new Recipe(recipeID, this.name, this.description, this.imgUrl, this.ingredients);
      this.database.addRecipe(tempRecipe);
      this.router.navigateByUrl('/recipes'); // Navigate back to recipe page
    } else {
      alert('All fields must be completed before saving a new recipe.');
    }
  }

  // Validate data entry
  private testRecipeDataEntry(): boolean {
    if (!this.name || this.name.length === 0) {
      return false;
    } else if (!this.imgUrl || this.imgUrl.length === 0) {
      return false;
    } else if (!this.description || this.description.length === 0) {
      return false;
    } else if (this.ingredients.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
