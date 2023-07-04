import {Component} from "@angular/core";

@Component({
  selector: 'app-display-para',
  templateUrl: './displayPara.component.html',
  styleUrls: ['./displayPara.component.css']
})
export class DisplayParaComponent {
  hideText = false;
  buttonText = 'hide';
  buttonLogs: string[] = [];

  updateButtonText(newLog: any) {
    this.hideText = !this.hideText;
    if (this.hideText)
      this.buttonText = 'show';
    else
      this.buttonText = 'hide';

    if(newLog)
    this.addButtonLogs(newLog);
  }

  addButtonLogs(newLog: string) {
    if(newLog)
      this.buttonLogs.push('Action Performed: ' + newLog );
  }

}
