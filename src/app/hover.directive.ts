import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostBinding('style.backgroundColor') background1: string = 'violet';

  @HostListener('mouseenter') mouseenter1() {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'Red');
    this.render.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.render.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.render.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}
