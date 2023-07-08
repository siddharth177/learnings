import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _recipes: Recipe[] = [
    new Recipe('Test Recipe', 'For Testing', 'https://www.foodandwine.com/thmb/FUO2HaAAAPkIKrAfyrE6G8ls-H0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/recipetester-ft-0318-2710aa8b7070463f89de25a168261b05.jpg')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  get recipes(): Recipe[] {
    return this._recipes.slice(); // will return a copy of the recipe list
  }


}
