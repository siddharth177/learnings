import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement, 'background-color', 'blue'
    // )
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement, 'background-color', 'blue'
    // )
    this.bgColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement, 'background-color', 'transparent'
    // )
    this.bgColor = 'transparent';
  }
}
