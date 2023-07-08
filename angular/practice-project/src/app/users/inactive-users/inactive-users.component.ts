import {Component, Input} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  // @ts-ignore
  @Input() user: {name: string, status: string};
  // @ts-ignore
  @Input() id: number;

  constructor(private userService: UsersService) {
  }

  onStatusChange() {
    this.userService.onSetToActive(this.id);
  }
}
