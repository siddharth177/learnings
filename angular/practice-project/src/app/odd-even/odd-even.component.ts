import { Component } from '@angular/core';

@Component({
  selector: 'app-odd-even',
  templateUrl: './odd-even.component.html',
  styleUrls: ['./odd-even.component.css']
})
export class OddEvenComponent {
  odds = [1, 3, 5];
  evens = [2,4];
  onlyOdd = false;

  value: number = 15;
}
