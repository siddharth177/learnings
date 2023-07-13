import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Element} from "./element.model";
import {AccountsService} from "./services/accounts.service";
import {UserService} from "./user/user.service";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit, OnDestroy {
  // @ts-ignore
  title: 'handling-forms-practice-project';

  // @ts-ignore
  @ViewChild('f') signupForm: NgForm;

  constructor() {
  }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(this.signupForm);

  }

  ngOnDestroy() {
  }

}
