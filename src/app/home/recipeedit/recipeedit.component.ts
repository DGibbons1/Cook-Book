import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { Recipe } from '../../models/recipe';
import { MockDB } from 'src/app/mockDB/mockDB';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  private isNew: boolean;
  private selectedID: number;
  public selectedRecipe: Recipe;

  constructor(private database: MockDB, private router: Router, private route: ActivatedRoute) {
    // Check if new or edit requried
    if (this.router.url === '/recipes/new') {
      this.isNew = true;
    } else {
      this.isNew = false;
      this.route.params.subscribe((params: Params) => {
        this.selectedID = Number(params.id);
        this.selectedRecipe = this.database.getRecipe(this.selectedID);
        if (!this.selectedRecipe) {
          // Navigate to the recipes home page if recipe ID is not found
         this.router.navigateByUrl('/recipes');
         return;
        }
        // Set instance variables
        this.name = this.selectedRecipe.name;
        this.imgUrl = this.selectedRecipe.imagePath;
        this.description = this.selectedRecipe.description;
        this.ingredients = this.selectedRecipe.ingredients;
      });
    }

  }

  ngOnInit() {}

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
    let recipeID: number;
    if ( this.testRecipeDataEntry() ) {
      if (this.isNew) {
        recipeID = this.getNextRecipeID();
      } else {
        recipeID = this.selectedRecipe.recipeID;
      }
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
