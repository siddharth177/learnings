import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipeItem') recipeItem: Recipe;
  @Input('recipeId') recipeIndex: number;

  constructor(private router: Router) {
  }
}
