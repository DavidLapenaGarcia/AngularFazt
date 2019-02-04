import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecepieService {
    recipieSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];

    getRecipies(): Recipe[] {
        // Using slice() we return an a copy of the array, so not the same instance.
        return this.recipes.slice();
    }
}
