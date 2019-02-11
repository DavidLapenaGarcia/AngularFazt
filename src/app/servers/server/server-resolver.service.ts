/* Resolving Dynamic Data with the resolve Guard 1
We want to fetch a Server.
So we will use Resolve, and we difine an inteerface to make more easy to call Server.
And call to Injectable and the ServerService.
*/


import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    /* Resolving Dynamic Data with the resolve Guard 3
    Yes, here call in the constructor to call ServersService
    */
    constructor( private serverService: ServersService) {}

    /* Resolving Dynamic Data with the resolve Guard 2
    The resolve method will get the data passed on the route and redirect to the serviceServer
    */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable <Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}

