import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplyclass]',
})
export class ApplyclassDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}
  @Input() set display(value: Object) {
    let entries = Object.entries(value);
    console.log(entries);
    for (let entry in entries) {
      if (entry[1]) {
        this.render.addClass(this.element.nativeElement, entry[0]);
      }
    }
  }
}
