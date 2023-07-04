import {Component} from "@angular/core";

@Component({
  selector: 'app-user-display',
  templateUrl: './userDisplay.component.html',
  styleUrls: ['./userDisplay.component.css']
})
export class UserDisplayComponent {
  username = null;
  allUsers: any = [];
  getUserName() {
    this.username = this.allUsers.get(0);
    if (this.username != null)
      return this.username;
    return '';
  }

  resetUserList() {
    this.allUsers = [];
  }

  addUser(newUser: any) {
    if (newUser && !this.allUsers.includes(newUser))
      this.allUsers.push(newUser);
  }

  getUserListSize() {
    return this.allUsers.length;
  }
}
