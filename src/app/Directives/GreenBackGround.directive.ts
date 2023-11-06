import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[GreenBackGround]',
})
export class setGreenBackGround {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnInit() {}
}
