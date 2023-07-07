import {Component, EventEmitter, Output} from '@angular/core';
import {TimeInterval} from "rxjs";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  isPause = false;
  interval: any;
  // @ts-ignore
  @Output('newNumber') newNumber = new EventEmitter<number>();
  @Output('isPaused') isPaused = new EventEmitter<boolean>();
  @Output('isCleared') isCleared = new EventEmitter<boolean>();

  onPlay() {
    if (!this.isPause) {
      this.interval = setInterval(() => {
        this.newNumber.emit(Math.floor(Math.random() * 1000) + 1)
      }, 1000);
    } else {
      this.isPause = false;
      this.onPlay();
    }
  }

  onPause() {
    this.isPause = true;
    this.isPaused.emit(true);
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onClear() {
    this.isCleared.emit(true);
  }
}
