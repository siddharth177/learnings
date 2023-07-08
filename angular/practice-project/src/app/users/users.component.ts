import {Component} from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: {name: string, status: string}[] = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.users;
  }
}
