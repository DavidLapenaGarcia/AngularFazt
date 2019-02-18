import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  ngOnInit() {
  }


/* video 152 Configuring routes Parameters
  We do not need this code.
constructor(private recipeService: RecepieService) { }


onRecipeItem() {
    this.recipeService.recipieSelected.emit(this.recipe);
  }
*/

}
