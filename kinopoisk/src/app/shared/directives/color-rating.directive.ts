import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorRating]',
})
export class ColorRatingDirective implements OnInit {
  @Input() rating!: string;

  constructor(
    private elementRef: ElementRef,
    private render2: Renderer2,
  ) { }

  ngOnInit(): void {
    if (Number(this.rating) > 9) {
      this.render2.setStyle(this.elementRef.nativeElement, 'color', 'green');
    }
  }
}
