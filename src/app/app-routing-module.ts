import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {path: '',                component: HomeComponent },
  {path: 'users',           component: UsersComponent, children: [
      {path: ':id/:name',   component: UserComponent }
  ]   },
  // Adding guard as a canActivate parameter with our AuthGuard
  {path: 'servers',         component: ServersComponent,
    /* Protecting Child (Nasted) Routes with canActivateChild 4
        Naw we are protecting the servers's routes childs, but not servers's route
    */
                        //  canActivate: [AuthGuard],
                            canActivateChild: [AuthGuard],
                            children: [
      /* Resolving Dynamic Data with the resolve Guard 3
      Here we add 'resolve:' parameter and difine the data to get (the 'kay' is server, in this case)
      */
      {path: ':id',         component: ServerComponent, resolve: { server: ServerResolver} },
      {path: ':id/edit',    component: EditServerComponent,
                            canDeactivate: [CanDeactivateGuard]}
  ]   },
//  {path: 'not-found',       component: PageNotFoundComponent},
  {path: 'not-found',       component: ErrorPageComponent, data: {message: 'Page not found'}},
  // It must be the last route!
  {path: '**',       redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
