import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecepieService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeServices: RecepieService) { }

  ngOnInit() {
    this.recipes = this.recipeServices.getRecipies();
  }

}
