import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'For Testing', 'https://www.foodandwine.com/thmb/FUO2HaAAAPkIKrAfyrE6G8ls-H0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/recipetester-ft-0318-2710aa8b7070463f89de25a168261b05.jpg')
  ];
}
