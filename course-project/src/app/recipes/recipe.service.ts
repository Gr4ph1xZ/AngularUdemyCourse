import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe(
      "Wiener Schnitzel",
      "This is simply a test",
      "https://essenrezept.de/wp-content/uploads/2020/09/Wiener-Schnitzel-Rezept-1.png",
      [
        new Ingredient("Meat", 1),
        new Ingredient("French Fries", 30)
      ]),
    new Recipe(
      "Burger",
      "A nice Burger",
      "https://www.edeka.de/media/01-rezeptbilder/rezeptbilder-a-d/rez-edeka-burger-the-big-american-rezept-a-d-1-1.jpg",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 3),
        new Ingredient("Salat", 1)
      ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addRecipeToShoppingList(recipe: Recipe){
    for(let i = 0;i < recipe.ingredients.length;i++){
      this.shoppingListService.addIngredient(recipe.ingredients[i]);
    }
  }

}
