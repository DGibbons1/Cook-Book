import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDB } from 'src/app/mockDB/mockDB';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  public recipesArr: Recipe[];

  constructor(private router: Router, database: MockDB) {
    this.recipesArr = database.getRecipes();
   }

  ngOnInit() {}

}
