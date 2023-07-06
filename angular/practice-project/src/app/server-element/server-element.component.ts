import {Component, Input} from '@angular/core';
import {Element} from "../element.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  @Input('srvElement') element: Element;

  constructor(element: Element) {
    this.element = element;
  }
}
