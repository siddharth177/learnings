import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  // @ts-ignore
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      // () => console.log('got query params as: ' + this.activatedRoute.snapshot.queryParams)
      (queryParams: Params) => {
        console.log('got query params as: ' + this.activatedRoute.snapshot.queryParams['allowEdit']);
        this.allowEdit = queryParams['allowEdit'] === '1';
      }
    );
    this.activatedRoute.fragment.subscribe(
      () => console.log('got the fragments passed: ' + this.activatedRoute.snapshot.fragment)
    );
    // @ts-ignore
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    else {
      return true;
    }
  }

}
