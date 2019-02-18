import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecepieService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeServices: RecepieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeServices.getRecipies();
  }

  onNew() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
