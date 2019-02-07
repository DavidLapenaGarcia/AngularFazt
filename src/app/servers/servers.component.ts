import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload() {
    /* navigate()
    Does not know in what route are, only the component where it is,
    so the commponent template; but not the route on the nav.
    To tell in what route we are, we need to pass another parametter.
    And naw we use the ActiveRoute declarated in the constructor.
  */
    this.router.navigate(['./'], {relativeTo: this.activeRoute});
  }

}
