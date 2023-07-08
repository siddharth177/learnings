import {Component, OnInit} from '@angular/core';
import {Element} from "./element.model";
import {AccountsService} from "./services/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  // @ts-ignore
  title: 'services-practice-project';

  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountsService) {
    this.accounts = this.accountService.accounts;
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  protected readonly AccountsService = AccountsService;
}
