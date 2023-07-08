import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {

  // private loggingService?: LoggingService;

  constructor(private accountService: AccountsService) {
  }


  // @ts-ignore
  @Input() account: { name: string, status: string };
  // @ts-ignore
  @Input() id: number;


  onSetTo(status: string) {
    this.accountService.onStatusChanged({id: this.id, newStatus: status});
    this.accountService.onStatusChange.emit(status);
  }
}
