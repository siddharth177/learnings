import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {

  // private loggingService?: LoggingService;

  constructor(private loggingService: LoggingService) {
    this.loggingService = inject(LoggingService);
  }


  // @ts-ignore
  @Input() account: { name: string, status: string };
  // @ts-ignore
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
  }
}
