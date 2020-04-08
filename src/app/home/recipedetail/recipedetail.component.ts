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

  constructor(private database: MockDB, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.selectedID = Number(params.id);
      this.selectedRecipe = this.database.getRecipe(this.selectedID);
      this.ingredientsArr = this.selectedRecipe.ingredients;
    });
  }

  // Method to remove the seleced recipe from the database.
  public deleteRecipe(id: number): void {
    this.database.deleteRecipe(id); // Remove record from Database
    this.router.navigateByUrl('/recipes'); // Navigate to recipe page
  }

}
