import { Component, OnInit } from '@angular/core';
import { MockDB } from 'src/app/mockDB/mockDB';
import { Recipe } from 'src/app/models/recipe';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  public selectedRecipe: Recipe;
  public selectedID: number;
  public ingredientsArr: Ingredient[];

  constructor(private database: MockDB, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.selectedID = Number(params.id);
      this.selectedRecipe = this.database.getRecipe(this.selectedID);
      if (!this.selectedRecipe) {
        // Navigate to the recipes home page if recipe ID is not found
       this.router.navigateByUrl('/recipes');
       return;
      }
      this.ingredientsArr = this.selectedRecipe.ingredients;
    });
  }

  ngOnInit() {}

  // Method to remove the seleced recipe from the database.
  public deleteRecipe(id: number): void {
    this.database.deleteRecipe(id); // Remove record from Database
    this.router.navigateByUrl('/recipes'); // Navigate to recipe page
  }

  // Method to allow user to edit the recipe
  public onEdit(id: number): void {
    this.router.navigateByUrl('/recipes/' + id + '/edit');
  }

  // Method to add current ingredients to shopping list
  public onShoppingListAdd(): void {
    this.database.addToShoppingList(this.selectedRecipe.ingredients);
  }

}
