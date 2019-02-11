/*
This class is an a basic Guard Service
*/

import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
/*
We need the AuthService maked for ownselves and the router to navigate with it
*/
    constructor(private authServide: AuthService,
                private router: Router) {}
/*
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
}
