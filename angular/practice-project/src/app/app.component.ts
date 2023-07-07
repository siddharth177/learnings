import {Component} from '@angular/core';
import {Element} from "./element.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-control-practice-project';
  // @ts-ignore
  currentNumber: number;
  // @ts-ignore
  allNumbers: number[] = [];

  getCurrentNumber(newNumber: number) {
    this.currentNumber = newNumber;
  }

  onPause(isPause: boolean) {
    if (isPause)
      this.allNumbers.push(this.currentNumber);
  }

  onClear() {
    this.allNumbers = [];
  }
}
