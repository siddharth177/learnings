import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private _ingredients: Ingredient[] = [];

  onIngredientListChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  onAddIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.onIngredientListChanged.emit(this.ingredients);
  }

  onMoveToShoppingList(ingredients: Ingredient[]) {
    if(ingredients) {
      this._ingredients.push(...ingredients);
      this.onIngredientListChanged.emit(this.ingredients);
    }
  }
}
