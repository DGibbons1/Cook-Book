import { Recipe } from '../models/Recipe';
import { Ingredient } from '../models/ingredient';

export class MockDB {

    // Instance Variables
    private recipeArr: Recipe[] = [];

    // Constructor
    constructor() {
        this.addRecipeOne();
        this.addRecipeTwo();
        this.addRecipeThree();
    }

    // Getter Method
    public getRecipes(): Recipe[] {
        return this.recipeArr;
    }

    // Method to add Recipe to DB Array
    public addRecipe(newRecipe: Recipe): void {
        this.recipeArr.push(newRecipe);
    }

    // Method to delete recipe from DB Array
    public deleteRecipe(id: number): void {
        let index = -1;
        for (const i of this.recipeArr) {
            if (i.recipeID === id) {
                index = this.recipeArr.indexOf(i);
            }
        }
        this.recipeArr.splice(index, 1);
    }

    // Method to Add Recipe 1
    private addRecipeOne(): void {
        const tempArr = [];
        tempArr.push(new Ingredient('Olive Oil', 1 ));
        tempArr.push(new Ingredient('Chicken Strips', 200 ));
        tempArr.push(new Ingredient('Onion, Sliced', 1 ));
        const tempRecipe: Recipe = new Recipe(
            0,
            'Black Bean Burritos',
            // tslint:disable-next-line: max-line-length
            'A spicy cajun chicken stir fry. Heat the oil in a large frying pan and fry the chicken, Perfect Shake Cajun Special Blend and onion for 4-5 minutes until browned. Add the pepper and carrots and fry for 2-3 minutes. Blend the cornflour with the tomato pureé, chicken stock and 4 tbs pineapple juice. Add to the pan with the pineapple chunks and bring to the boil, stirring until thickened. Simmer gently for 1 minute.',
            '../../../assets/images/burrito-img.jpg',
            tempArr,
        );
        this.recipeArr.push(tempRecipe);
    }

    // Method to Add Recipe 2
    private addRecipeTwo(): void {
        const tempArr = [];
        tempArr.push(new Ingredient('Olive Oil', 1 ));
        tempArr.push(new Ingredient('Chicken Strips', 200 ));
        tempArr.push(new Ingredient('Onion, Sliced', 1 ));
        const tempRecipe: Recipe = new Recipe(
            1,
            'Pizza Diavola',
            // tslint:disable-next-line: max-line-length
            'A spicy cajun chicken stir fry. Heat the oil in a large frying pan and fry the chicken, Perfect Shake Cajun Special Blend and onion for 4-5 minutes until browned. Add the pepper and carrots and fry for 2-3 minutes. Blend the cornflour with the tomato pureé, chicken stock and 4 tbs pineapple juice. Add to the pan with the pineapple chunks and bring to the boil, stirring until thickened. Simmer gently for 1 minute.',
            '../assets/images/pizza-img.jpg',
            tempArr,
        );
        this.recipeArr.push(tempRecipe);
    }

    // Method to Add Recipe 3
    private addRecipeThree(): void {
        const tempArr = [];
        tempArr.push(new Ingredient('Olive Oil', 1 ));
        tempArr.push(new Ingredient('Chicken Strips', 200 ));
        tempArr.push(new Ingredient('Onion, Sliced', 1 ));
        const tempRecipe: Recipe = new Recipe(
            3,
            'Cajun Chicken Stir-Fry',
            // tslint:disable-next-line: max-line-length
            'A spicy cajun chicken stir fry. Heat the oil in a large frying pan and fry the chicken, Perfect Shake Cajun Special Blend and onion for 4-5 minutes until browned. Add the pepper and carrots and fry for 2-3 minutes. Blend the cornflour with the tomato pureé, chicken stock and 4 tbs pineapple juice. Add to the pan with the pineapple chunks and bring to the boil, stirring until thickened. Simmer gently for 1 minute.',
            '../assets/images/stir-fry-img.jpg',
            tempArr,
        );
        this.recipeArr.push(tempRecipe);
    }

}
