import {Component} from "@angular/core";

@Component({
  selector: 'app-success-alert',
  templateUrl: './successAlert.component.html',
  styleUrls: ['./successAlert.component.css']
})
export class SuccessAlertComponent{
  alertValue = 10;
  getAlertValue() {
    return this.alertValue;
  }
}
