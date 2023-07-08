import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipeItem') recipeItem: Recipe;

  constructor(private recipeService: RecipeService) {
  }
  onRecipeSelect() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
