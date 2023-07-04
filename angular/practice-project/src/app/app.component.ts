import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-project';
  isAlertCheckAllowed = false;
  alertStatusValue = 10;  // for success

  constructor() {
    setTimeout(() => {
      this.isAlertCheckAllowed = true;
    }, 2000);
  }

  onAlertStatusCheck (newVal: any) {
    this.alertStatusValue = newVal.target.value;
  }
}
