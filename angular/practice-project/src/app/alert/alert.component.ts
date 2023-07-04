import {Component} from "@angular/core";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent{
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
