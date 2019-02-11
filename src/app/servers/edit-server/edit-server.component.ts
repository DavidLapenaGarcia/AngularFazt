import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})

/*  Controlling Navigation with canDeactive 8
implementing our canComponentDeactivate*/
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  /* Controlling Navigation with canDeactive 1
  We want to ask to the user if he wants to exit in the middle of some edit.
  So first we create a new propiety
  */
 changesSaved = false;

/* Controlling Navigation with canDeactive 3
Once changes are changed, we want to navigate so we incorpore router
*/
  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    /* Retriving Parameters
    */
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
    this.route.fragment.subscribe();
    /* Controlling Navigation with canDeactive 10
    Getting the actual id, and subscribe route params to update the id if params change
     */
    const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(1);
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    /* Controlling Navigation with canDeactive 2
    Here is where the changes are saved*/
    this.changesSaved = true;
    /* Controlling Navigation with canDeactive 4
    So naw we can navigate to 'up Route', so servers route
    */
   this.router.navigate(['../'], {relativeTo: this.route});
  }
  /* Controlling Navigation with canDeactive 9
  Naw we must implement our interface, and see if we are allow to edit,
  there are some changes, and if the changes are saved
   */
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (  (this.serverName !== this.server.name || this.serverStatus !== this.server.status)
        && !this.changesSaved) {
      return confirm('Do you want to confirm this changes?');
    } else {
      return true;
    }
  }

}
