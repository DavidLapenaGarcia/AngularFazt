import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // tslint:disable-next-line:no-output-rename
  @Output('recipeChosed') recipeEmitter = new EventEmitter<Recipe> ();
  constructor() { }

  ngOnInit() {
  }

  onRecipeItem(recipeClicked: Recipe) {
    this.recipeEmitter.emit(recipeClicked);
  }

}
