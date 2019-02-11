/*
This class is an a basic Guard Service
*/

import { AuthService } from './auth.service';
import { CanActivateChild, CanActivate, ActivatedRouteSnapshot,
        RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {  } from '@angular/router/src/interfaces';

@Injectable()
/* Protecting Child (Nasted) Routes with canActivateChild 1
we implement canActivateChhild
*/
export class AuthGuard implements CanActivate, CanActivateChild {
/*
We need the AuthService maked for ownselves and the router to navigate with it
*/
    constructor(private authServide: AuthService,
                private router: Router) {}
/*  Protecting Child (Nasted) Routes with canActivateChild 2
This method needs be able to navigate and to know the activated route.
It will return an Obserbable boolean, a Promise boolean, or boolean.
*/
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot)
                : Observable<boolean> | Promise<boolean> | boolean {

        return this.authServide.isAuthenticated().then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            }
        );
    }
    /* Protecting Child (Nasted) Routes with canActivateChild 3
    Implementing the canActivateChild method.
    This method calls to canActivate.
    Naw we can call it on pur app-routes using a diferent hoock.
    */
    canActivateChild(route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot)
                    : Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }

}
