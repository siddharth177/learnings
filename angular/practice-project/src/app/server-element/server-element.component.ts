import {Component, ElementRef, Input, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';
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
  // @ts-ignore
  @ViewChild('elementName', {static: true}) elementName: ElementRef;

  constructor() {
    console.log('constructor created');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit Called");
    console.log('Element Name: ' + this.elementName.nativeElement.textContent); // elementName is not present before view creation
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Element Name:' + this.elementName.nativeElement.textContent);  // elementName will be present
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
