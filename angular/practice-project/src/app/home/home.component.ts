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
        if(cnt === 3)
          observer.complete();
        if(cnt > 5)
          observer.error(new Error('count greater than 5'));
      }, 1000)
    });

    // @ts-ignore
    this.subscription = customIntervalObservable.subscribe((count) => {
        console.log(count);
      },
      (error) => {
        console.log(error);
        alert('counter greater than required');
      },
      () => {
        console.log('observer completed');
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
