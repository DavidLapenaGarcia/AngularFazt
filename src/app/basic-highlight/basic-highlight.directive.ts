import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
    selector: '[appBasicHightlight]'
})
export class BasicHightLightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
