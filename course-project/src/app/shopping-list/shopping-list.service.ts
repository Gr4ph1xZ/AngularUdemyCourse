import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredientAdded = new Subject<void>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatos", 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    let wasAdded = false;
    for(let i = 0;i < this.ingredients.length;i++){
      if(this.ingredients[i].name == ingredient.name){
        this.ingredients[i].amount += ingredient.amount;
        wasAdded = true;
      }
    }
    if(!wasAdded){
      this.ingredients.push(ingredient);
    }
    this.ingredientAdded.next();
  }

}
