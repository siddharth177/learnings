import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: { name: string, status: string }[] = [{name: 'Chris', status: 'active'},
    {name: 'Sam', status: 'active'},
    {name: 'Max', status: 'inactive'},
    {name: 'Peter', status: 'inactive'}];

  onSetToInactive(id: number) {
    // @ts-ignore
    this.users.at(id).status = 'inactive';
  }

  onSetToActive(id: number) {
    // @ts-ignore
    this.users.at(id).status = 'active';
  }
}
