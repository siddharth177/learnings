import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertComponent} from "./alert/alert.component";
import {SuccessAlertComponent} from "./alert/successAlert/successAlert.component";
import {WarningAlertComponent} from "./alert/warningAlert/warningAlert.component";
import {FormsModule} from "@angular/forms";
import {UserDisplayComponent} from "./userDisplay/userDisplay.component";
import {DisplayParaComponent} from "./displayPara/displayPara.component";
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { EvenComponent } from './game-control/even/even.component';
import { OddEvenComponent } from './odd-even/odd-even.component';
import {BasicHighlightDirective} from "./basicHighlight/basic-highlight.directive";
import { BetterHighlightDirective } from './basicHighlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import {HomeComponent} from "./home/home.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserDisplayComponent,
    DisplayParaComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    OddEvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
