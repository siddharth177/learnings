import {EventEmitter, Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

@Injectable({providedIn: 'root'})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {
  }

  onStatusChange = new EventEmitter<string>();

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatusChange(updateInfo.newStatus);
  }
}
