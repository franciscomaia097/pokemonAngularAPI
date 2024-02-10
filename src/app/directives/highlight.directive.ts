import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
    this.zoom('scale(1.1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.zoom('scale(1)');
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private zoom(setting: string) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', setting);
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.3s ease-in-out'
    );
  }
}
