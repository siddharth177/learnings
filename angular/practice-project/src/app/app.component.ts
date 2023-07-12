import {Component, OnDestroy, OnInit} from '@angular/core';
import {Element} from "./element.model";
import {AccountsService} from "./services/accounts.service";
import {UserService} from "./user/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit, OnDestroy{

  isActivated = false;
  // @ts-ignore
  private activateSubs: Subscription;

  // @ts-ignore
  title: 'observable-practice-project';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.activateSubs = this.userService.activateEmitter.subscribe(
      (activateStatus) => {this.isActivated = activateStatus;}
    );
  }

  ngOnDestroy() {
    this.activateSubs.unsubscribe();
  }

}
