import { Component } from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // @ts-ignore
  private subscription: Subscription;
  ngOnInit() {
    this.subscription = interval(1000).subscribe(cnt => {
      console.log(cnt);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
