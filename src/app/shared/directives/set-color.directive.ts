import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {

  @Input() set appSetColor(value: any) {
    this.renderer.setStyle(this.el.nativeElement, 'background', value);
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

}
