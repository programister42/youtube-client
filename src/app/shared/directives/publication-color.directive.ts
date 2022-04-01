import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

enum PublicationColor {
  Red = '#ff8a80',
  Green = '#ccff90',
  Blue = '#82b1ff',
}

@Directive({
  selector: '[appPublicationColor]',
})
export class PublicationColorDirective implements AfterViewInit {
  @Input('appPublicationColor') publicationDate!: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  getColor(): PublicationColor {
    const msInDay = 1000 * 60 * 60 * 24;
    const date = new Date(this.publicationDate);
    const currentDate = new Date();
    if (Number(currentDate) - Number(date) < msInDay * 7) {
      return PublicationColor.Blue;
    } else if (Number(currentDate) - Number(date) < msInDay * 30) {
      return PublicationColor.Green;
    } else {
      return PublicationColor.Red;
    }
  }

  ngAfterViewInit(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `4px solid ${this.getColor()}`,
      RendererStyleFlags2.Important,
    );
  }
}
