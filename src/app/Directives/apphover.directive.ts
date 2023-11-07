import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appApphover]',
})
export class ApphoverDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @Input() backgr: string = 'transparent';
  @HostBinding('style.backgroundColor') backgoundcolor: string = this.backgr;
  @HostListener('mouseenter')
  mouseenter11() {
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
