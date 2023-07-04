import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertComponent} from "./alert/alert.component";
import {SuccessAlertComponent} from "./alert/successAlert/successAlert.component";
import {WarningAlertComponent} from "./alert/warningAlert/warningAlert.component";
import {FormsModule} from "@angular/forms";
import {UserDisplayComponent} from "./userDisplay/userDisplay.component";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserDisplayComponent
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
