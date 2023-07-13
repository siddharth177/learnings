import {Component} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // @ts-ignore
  id: number;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // @ts-ignore
      this.id = +params.id;
    });
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onActivate() {
    this.userService.activateEmitter.next(true);
  }
}
