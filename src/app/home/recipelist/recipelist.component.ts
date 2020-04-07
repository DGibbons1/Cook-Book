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

  constructor(private router: Router, private database: MockDB) {
    this.setDataChangedEventListener();
    this.recipesArr = database.getRecipes();
  }

  ngOnInit() {}

  // Set Event Listener for changes to recipe list
  private setDataChangedEventListener(): void {
    this.database.onDataChangeEvent.subscribe(
      (res: boolean) => {
        if (res) {
          this.recipesArr = this.database.getRecipes();
        }
      }
    );
  }

}
