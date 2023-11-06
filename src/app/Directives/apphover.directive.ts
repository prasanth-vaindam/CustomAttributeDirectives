import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApphover]',
})
export class ApphoverDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') mouseenter11() {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'Red');
    this.render.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.render.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.render.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') mouseeleave11() {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'Pink');
    this.render.setStyle(this.element.nativeElement, 'margin', '20px 30px');
    this.render.setStyle(this.element.nativeElement, 'padding', '20px 40px');
    this.render.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}
