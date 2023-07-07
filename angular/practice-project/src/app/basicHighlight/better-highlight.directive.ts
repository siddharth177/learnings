import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input('defaultColor') defaultColor = 'transparent';
  @Input('highlightColor') highlightColor = 'blue';

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement, 'background-color', 'blue'
    // )

    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement, 'background-color', 'blue'
    // )
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement, 'background-color', 'transparent'
    // )
    this.bgColor = this.defaultColor;
  }
}
