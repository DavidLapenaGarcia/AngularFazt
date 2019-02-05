import { RecepieService } from './../recipe.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recepieService: RecepieService,
              private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddIngredientsToShopping(): void {
    this.recepieService.addIngredientsToShoppingList(this.recipe.ingridients);
  }

}
