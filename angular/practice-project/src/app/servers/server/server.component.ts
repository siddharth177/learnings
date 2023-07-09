import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // @ts-ignore
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // @ts-ignore
    // this.server = this.serversService.getServer(1);

    const id = +this.activatedRoute.snapshot.params['id'];  // + cast array into number
    // @ts-ignore
    this.server = this.serversService.getServer(id);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

}
