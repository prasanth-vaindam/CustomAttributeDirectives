import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
})
export class SetBackgroundDirective {
  constructor(private element: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'pink');

    this.render.addClass(this.element.nativeElement, 'heading');
  }
}
