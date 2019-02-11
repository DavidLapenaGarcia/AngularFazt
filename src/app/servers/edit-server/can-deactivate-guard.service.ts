import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/* Controlling Navigation with canDeactive 5
We create a new service, creating an interface.
*/

export interface CanComponentDeactivate {
    /* Controlling Navigation with canDeactive 6
    Naw we implement a canActivate method, will be an interface. So he do not containd the logic, he only contains
    the information about how he must like.
    */
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
/* Controlling Navigation with canDeactive 7
    Here we writte the service it self.
    It implements CanDeactive, that is generic so needs some interface,
    and we will give our interface.
*/
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateGuard> {
    canDeactivate(  component: CanComponentDeactivate,      // Some component with our interface
                    currentRoute: ActivatedRouteSnapshot,   // The current route
                    currentState: RouterStateSnapshot,      // The state of the route
                    nextState?: RouterStateSnapshot):       // And the route where we want to go, optional?
                    Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
