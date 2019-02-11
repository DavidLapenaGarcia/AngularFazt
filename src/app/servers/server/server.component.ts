import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router: Router ,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* // Here we are getting the data
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    // And here we are reacting where whatever changes
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );*/

    /*  Resolving Dynamic Data with the resolve Guard 4
    And naw we coment the old code because we are able to use an Resolver.
    */
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
      } );
  }

}
