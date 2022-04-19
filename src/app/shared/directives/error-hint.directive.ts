import {
	AfterViewInit,
	Directive,
	ElementRef,
	Renderer2,
	RendererStyleFlags2,
} from '@angular/core';

@Directive({
	selector: '[appErrorHint]',
})
export class ErrorHintDirective implements AfterViewInit {
	constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

	ngAfterViewInit(): void {
		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'margin-bottom',
			'.1rem',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'padding',
			'.1rem',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'border',
			'2px solid #f44336',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'border-radius',
			'4px',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'background-color',
			'rgba(255, 255, 255, 0.9)',
			RendererStyleFlags2.Important,
		);
	}
}
