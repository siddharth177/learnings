import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServerComponent} from "./servers/server/server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/:name', component: UserComponent},
  {
    path: 'servers', canActivateChild:[AuthGuardService],component: ServersComponent, children: [
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
      {path: ':id', component: ServerComponent}
    ]
  },
  {path: 'server', redirectTo: '/servers', pathMatch: 'full'},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}    // should be at the last route in the list
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
