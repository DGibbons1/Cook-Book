import { Ingredient } from './ingredient';

export class Recipe {

    // Instance Variables
    public recipeID: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    // Constructor
    constructor(id: number, name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
        this.recipeID = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }

}
