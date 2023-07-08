import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _recipes: Recipe[] = [
    new Recipe('Test Recipe', 'For Testing',
      'https://www.foodandwine.com/thmb/FUO2HaAAAPkIKrAfyrE6G8ls-H0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/recipetester-ft-0318-2710aa8b7070463f89de25a168261b05.jpg'),
    new Recipe('Sample Recipe', 'For Sample',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
      [new Ingredient('meat', 2), new Ingredient('chilli', 1)])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  get recipes(): Recipe[] {
    return this._recipes.slice(); // will return a copy of the recipe list
  }


}
