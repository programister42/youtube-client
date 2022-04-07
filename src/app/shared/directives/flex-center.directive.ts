import {
	AfterViewInit,
	Directive,
	ElementRef,
	Renderer2,
	RendererStyleFlags2,
} from '@angular/core';

@Directive({
	selector: '[appFlexCenter]',
})
export class FlexCenterDirective implements AfterViewInit {
	constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

	ngAfterViewInit(): void {
		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'display',
			'flex',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'justify-content',
			'center',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'align-items',
			'center',
			RendererStyleFlags2.Important,
		);

		this.renderer2.setStyle(
			this.elementRef.nativeElement,
			'gap',
			'10px',
			RendererStyleFlags2.Important,
		);
	}
}
