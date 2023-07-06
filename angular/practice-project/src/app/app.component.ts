import {Component} from '@angular/core';
import {Element} from "./element.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-project';

  serverElements: Element[] = [{type: 'sample', name: 'sample', content: 'sample'}];

  newServerName = '';
  newServerContent = '';
}
