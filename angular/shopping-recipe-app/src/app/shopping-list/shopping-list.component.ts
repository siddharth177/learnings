import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  private _ingredientChangeSubs: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;  // will get a copy of ingredients list
    this._ingredientChangeSubs = this.shoppingListService.onIngredientListChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = this.shoppingListService.ingredients;
      }
    ) // will get new instance of ingredient list when a change occurs in the list
  }

  ngOnDestroy() {
    this._ingredientChangeSubs.unsubscribe();
  }
}
