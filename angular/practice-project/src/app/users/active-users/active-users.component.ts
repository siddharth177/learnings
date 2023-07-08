import {Component, Input} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  // @ts-ignore
  @Input() user: {name: string, status: string};
  // @ts-ignore
  @Input() id: number;

  constructor(private userService: UsersService) {
  }

  onStatusChange() {
    this.userService.onSetToInactive(this.id);
  }
}
