import { Component } from '@angular/core';
import {Element} from "../element.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
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
