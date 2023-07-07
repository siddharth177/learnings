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

  onAddServer(serverElement: {name: string, content: string}) {
    this.serverElements.push(new Element('server', serverElement.name, serverElement.content));
  }

  onAddBlueprint(blueprintElement: {name: string, content: string}) {
    this.serverElements.push(new Element('blueprint', blueprintElement.name, blueprintElement.content));
  }

  onServerBlueprintLastRemove(isReset: {removeLast: boolean}) {
    if(isReset) {
      this.serverElements.splice(this.serverElements.length - 1, 1);
    }
  }

}
