import {Component, Input} from '@angular/core';
import {Element} from "../element.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  // @ts-ignore
  @Input('srvElement') element: Element;
}
