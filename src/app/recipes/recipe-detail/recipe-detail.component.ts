import { RecepieService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recepieService: RecepieService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /* video 152.1 Configuring routes Parameters.
  This only will gat the route parameter the first time that route is charged.
    const id = this.route.snapshot.params['id'];

  But doing that we will get anytime the parametter:
    */
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recepieService.getRecipeById(this.id);
      }
    );
  }

  onAddIngredientsToShopping(): void {
    this.recepieService.addIngredientsToShoppingList(this.recipe.ingridients);
  }

}
