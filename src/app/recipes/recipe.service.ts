import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable ()
export class RecepieService {
    // recipieSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Pa amb tomaquet',
            'I amb corder millor',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [new Ingredient('bread', 1), new Ingredient('tomato', 2)]
            ),
        new Recipe(
        'Truita',
        'Lo gabatx no sap cuinar',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('Ou', 1), new Ingredient('Sal', 2)]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipies(): Recipe[] {
        // Using slice() we return an a copy of the array, so not the same instance.
        return this.recipes.slice();
    }

    getRecipeById(index: number): Recipe {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
