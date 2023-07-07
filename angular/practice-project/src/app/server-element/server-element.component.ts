import {Component, Input, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Element} from "../element.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent {

  // @ts-ignore
  @Input('srvElement') element: Element;

  constructor() {
    console.log('constructor created');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit Called");
  }
}
