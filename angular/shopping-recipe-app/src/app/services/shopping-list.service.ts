import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private _ingredients: Ingredient[] = [];

  onIngredientListChanged = new Subject<Ingredient[]>();
  constructor() { }

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  onAddIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.onIngredientListChanged.next(this.ingredients);
  }

  onMoveToShoppingList(ingredients: Ingredient[]) {
    if(ingredients) {
      this._ingredients.push(...ingredients);
      this.onIngredientListChanged.next(this.ingredients);
    }
  }
}
