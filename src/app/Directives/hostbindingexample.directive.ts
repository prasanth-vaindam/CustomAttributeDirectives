import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHostbindingexample]',
})
export class HostbindingexampleDirective {
  @Input() bgcolor: string = 'Yellow';
  @HostBinding('style.backgroundColor') background1: string = '';
  @HostBinding('style.transition') trans: string = '0.5s';
  @HostBinding('style.margin') margin: string = '10px 20px';
  constructor(private element: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    console.log(this.bgcolor);
    this.background1 = this.bgcolor;
  }

  @Input() set display(value: Object) {
    let entries = Object.entries(value);
    console.log(entries);
    for (let [classname, conditiion] of entries) {
      if (conditiion) {
        this.render.addClass(this.element.nativeElement, classname);
      }
    }
  }

  @HostListener('mouseenter') mouseenter11() {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'Red');
    this.render.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.render.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.render.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}
