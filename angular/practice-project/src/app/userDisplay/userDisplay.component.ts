import {Component} from "@angular/core";

@Component({
  selector: 'app-user-display',
  templateUrl: './userDisplay.component.html',
  styleUrls: ['./userDisplay.component.css']
})
export class UserDisplayComponent {
  username = null;

  getUserName() {
    if (this.username != null)
      return this.username;
    return '';
  }

  resetUsername() {
    this.username = null;
  }
}
