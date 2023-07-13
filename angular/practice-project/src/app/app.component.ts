import {Component, OnDestroy, OnInit} from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(formElement: NgForm) {
    console.log(ngForm );

  }

  ngOnDestroy() {
  }

}
