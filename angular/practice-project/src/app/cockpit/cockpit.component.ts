import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Element} from "../element.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // @ts-ignore
  @ViewChild('serverContent', {static: true}) newServerContent: ElementRef;

  @Output() onServerCreated = new EventEmitter<{ name: string, content: string }>();
  @Output('onBpCreated') onBlueprintCreated = new EventEmitter<{ name: string, content: string }>();
  @Output('onReset') onServerBlueprintReset = new EventEmitter<{removeLast: boolean}>();

  onAddServer(name: HTMLInputElement) {
    this.onServerCreated.emit({name: name.value, content: this.newServerContent.nativeElement.value});
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.onBlueprintCreated.emit({name: name.value, content: this.newServerContent.nativeElement.value});
  }

  onRemoveLast() {
    this.onServerBlueprintReset.emit({removeLast: true});
  }
}
