import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { EventEmitter } from '@angular/core';

export class MockDB {

    // Instance Variables
    private recipeArr: Recipe[] = [];
    public onDataChangeEvent: EventEmitter<any> = new EventEmitter();
    private shoppingList: Ingredient[] = [];

    // Constructor
    constructor() {}

    // Method to set up DB
    public setupDB(): void {
        this.addRecipeOne();
        this.addRecipeTwo();
        this.addRecipeThree();
    }

    // Getter Method
    public getRecipes(): Recipe[] {
        return this.recipeArr;
    }

    public getShoppingList(): Ingredient[] {
        return this.shoppingList;
    }

    public getRecipe(id: number): Recipe {
        let index = -1;
        for (const i of this.recipeArr) {
            if (i.recipeID === id) {
                index = this.recipeArr.indexOf(i);
            }
        }
        if (index > -1) {
            return this.recipeArr[index];
        } else {
            return null;
        }
    }

    // Method to add Recipe to DB Array
    public addRecipe(newRecipe: Recipe): void {
        let isNew = true;
        let index: number;
        for (const [i, v] of this.recipeArr.entries()) {
            if (v.recipeID === newRecipe.recipeID) {
                isNew = false;
                index = i;
            }
        }
        if (isNew) {
            this.recipeArr.push(newRecipe);
        } else {
            this.recipeArr[index] = newRecipe;
        }
    }

    // Method to delete recipe from DB Array
    public deleteRecipe(id: number): void {
        let index = -1;
        for (const i of this.recipeArr) {
            if (Number(i.recipeID) === id) {
                index = this.recipeArr.indexOf(i);
            }
        }
        if (index > -1) {
            this.recipeArr.splice(index, 1);
        }
        // Emit Event to notify application that recipe list has been changed.
        this.onDataChangeEvent.emit(true);
    }

    // Method to Add Recipe 1
    private addRecipeOne(): void {
        const tempArr = [];
        tempArr.push(new Ingredient('Black Beans', 1 ));
        tempArr.push(new Ingredient('Canned Corn', 0.5 ));
        tempArr.push(new Ingredient('Mozzarella Cheese', 120 ));
        tempArr.push(new Ingredient('Red Bell Pepper', 1 ));
        tempArr.push(new Ingredient('Flour Tortillas', 6 ));
        const tempRecipe: Recipe = new Recipe(
            0,
            'Black Bean Burritos',
            // tslint:disable-next-line: max-line-length
            'Heat a large skillet to medium heat, add the bell peppers, onion, beans, corn, cilantro, butter, juice of the lime, and spices, saute for 2-4 minutes on high. Remove from heat and set aside. To make the wraps, Lay tortilla flat on plate or counter, add 1/4 cup of the bean mixture, 2 tablespoons rice, 2-3 tablespoons cheese. Be sure to leave about 2-3 inches from the corners. Wrap burrito by folding over the edges. Continue this for all 8 burritos. After the burritos are wrapped heat a large skillet or pan, add 1 teaspoon oil, place the burritos on the skillet for 1-2 minutes on each side until they are golden and crispy. For the "ridges" use a griddle that has the ridged lines. Serve warm with sour cream or salsa.',
            '../../../assets/images/burrito-img.jpg',
            tempArr,
        );
        this.recipeArr.push(tempRecipe);
    }

    // Method to Add Recipe 2
    private addRecipeTwo(): void {
        const tempArr = [];
        tempArr.push(new Ingredient('Pizza Dough Balls', 2 ));
        tempArr.push(new Ingredient('Mozzarella', 100 ));
        tempArr.push(new Ingredient('Spicy Salami', 200 ));
        tempArr.push(new Ingredient('Fresh Chillis', 3 ));
        tempArr.push(new Ingredient('Oliva Oil', 1 ));
        const tempRecipe: Recipe = new Recipe(
            1,
            'Pizza Diavola',
            // tslint:disable-next-line: max-line-length
            'For dough, combine oil, yeast and 2 tbsp lukewarm water in a bowl to dissolve yeast. Combine flour and 1 tbsp salt in a bowl and make a well in the centre. Add 680ml water and yeast mixture to well and mix with your hands to form a sticky dough (3-4 minutes). Cover with plastic wrap to hydrate (15 minutes), then knead on a lightly floured bench until smooth (2 minutes). Return to bowl, cover with plastic wrap and refrigerate to ferment (24 hours). Preheat oven to 230°C or highest setting and preheat a pizza stone (see note). Portion dough into six on a lightly floured surface. Working with one piece at a time, place lightly floured hands around the dough and pull it towards you along the bench so the leading edge pulls under. Rotate, tucking edges under, and repeat to form a smooth ball – the aim is to create tension in the dough. Repeat with remaining dough, transfer to a greased tray, cover loosely with greased plastic wrap and rest at room temperature until doubled in size (1½-2 hours).',
            '../assets/images/pizza-img.jpg',
            tempArr,
        );
        this.recipeArr.push(tempRecipe);
    }

    // Method to Add Recipe 3
    private addRecipeThree(): void {
        const tempArr = [];
        tempArr.push(new Ingredient('Boneless Chicken', 3 ));
        tempArr.push(new Ingredient('Garlic Clove', 1 ));
        tempArr.push(new Ingredient('Cajun Powder', 2 ));
        tempArr.push(new Ingredient('Cayenne Pepper', 1 ));
        tempArr.push(new Ingredient('Red Pepper', 1 ));
        const tempRecipe: Recipe = new Recipe(
            2,
            'Cajun Chicken Stir-Fry',
            // tslint:disable-next-line: max-line-length
            'A spicy cajun chicken stir fry. Heat the oil in a large frying pan and fry the chicken, Perfect Shake Cajun Special Blend and onion for 4-5 minutes until browned. Add the pepper and carrots and fry for 2-3 minutes. Blend the cornflour with the tomato pureé, chicken stock and 4 tbs pineapple juice. Add to the pan with the pineapple chunks and bring to the boil, stirring until thickened. Simmer gently for 1 minute.',
            '../assets/images/stir-fry-img.jpg',
            tempArr,
        );
        this.recipeArr.push(tempRecipe);
    }

    // Update Shopping list
    public updateShoppingList(updatedList: Ingredient[]): void {
        this.shoppingList = updatedList;
    }

    // Add items to the shopping list
    public addToShoppingList(newItems: Ingredient[]): void {
        this.shoppingList.push(...newItems);
    }

}
