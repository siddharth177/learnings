import {Component} from '@angular/core';
import {Element} from "./element.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-project';

  serverElements: Element[] = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push(new Element('server', this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
