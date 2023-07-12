import { Component } from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // @ts-ignore
  private subscription: Subscription;
  ngOnInit() {
    // @ts-ignore
    const customIntervalObservable = new Observable((observer) => {
      let cnt = 0;
      setInterval(() => {
        observer.next(cnt++);
      }, 1000)
    });

    // @ts-ignore
    this.subscription = customIntervalObservable.subscribe((count) => {
      console.log(count);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
