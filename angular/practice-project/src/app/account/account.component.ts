import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  // @ts-ignore
  @Input() account: { name: string, status: string };
  // @ts-ignore
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    const loggingService = new LoggingService();
    loggingService.logStatusChange(status);
  }
}
