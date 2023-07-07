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
    BasicHighlightDirective
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
