import {
	AfterViewInit,
	Directive,
	ElementRef,
	Renderer2,
	RendererStyleFlags2,
} from '@angular/core';

@Directive({
	selector: '[appChipIcon]',
})
export class ChipIconDirective implements AfterViewInit {
	constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

	ngAfterViewInit(): void {
		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'font-size',
			'1rem',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'height',
			'1rem',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'width',
			'1rem',
			RendererStyleFlags2.Important,
		);
	}
}
