import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input('recipe') recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onMoveToShoppingList() {
    this.shoppingListService.onMoveToShoppingList(this.recipe.ingredients);
  }

}
