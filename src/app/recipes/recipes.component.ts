import { RecepieService } from './recipe.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecepieService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* Video 109.  Using Service for Cross-Coponent Communication.
        Here we are listen to the RecipeService's event.
        To get the sata, we use subscribe( (data: type) => {action} );
    this.recipeService.recipieSelected
      .subscribe(
        (recipe: Recipe) => {
          this.recipeSelected = recipe;
        }
        );
    */

  }

}
