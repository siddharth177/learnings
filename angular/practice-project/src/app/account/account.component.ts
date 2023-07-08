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

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {
    this.loggingService = inject(LoggingService);
  }


  // @ts-ignore
  @Input() account: { name: string, status: string };
  // @ts-ignore
  @Input() id: number;


  onSetTo(status: string) {
    this.loggingService.logStatusChange(status);
    this.accountService.onStatusChange.emit(status);
  }
}
