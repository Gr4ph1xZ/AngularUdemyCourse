import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipeService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(
      (params: Params) => {
        this.recipeId = +params["id"];
        this.recipe = this.recipeService.getRecipe(this.recipeId);
      }
    );

  }

  addRecipeToShoppingList(){
    this.recipeService.addRecipeToShoppingList(this.recipe);
  }

}
