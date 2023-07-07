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

  onAddServer(name: HTMLInputElement) {
    this.onServerCreated.emit({name: name.value, content: this.newServerContent});
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.onBlueprintCreated.emit({name: name.value, content: this.newServerContent});
  }
}
