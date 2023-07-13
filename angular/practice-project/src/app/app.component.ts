import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  // @ts-ignore
  title: 'handling-forms-practice-project';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Basic';
  // @ts-ignore
  @ViewChild('signupForm') signupForm: NgForm;

  onsubmit() {

  }
}
