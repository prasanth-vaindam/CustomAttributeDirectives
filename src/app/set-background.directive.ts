import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
})
export class SetBackgroundDirective {
  constructor(private element: ElementRef, private render: Renderer2) {
    //this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
    //this.render.addClass(this.element.nativeElement, 'heading');
  }
  //@HostBinding('style.backgroundColor') backgoundcolor: string = 'violet';
  @HostBinding('style.backgroundColor') backgoundcolor: string = 'violet';
}
