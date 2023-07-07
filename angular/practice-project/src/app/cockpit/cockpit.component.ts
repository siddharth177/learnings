import {Component, EventEmitter, Output} from '@angular/core';
import {Element} from "../element.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';

  @Output() onServerCreated = new EventEmitter<{ name: string, content: string }>();
  @Output('onBpCreated') onBlueprintCreated = new EventEmitter<{ name: string, content: string }>();

  onAddServer() {
    this.onServerCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprint() {
    this.onBlueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
  }
}
