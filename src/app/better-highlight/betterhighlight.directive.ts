import {
  Directive, Renderer2, OnInit, ElementRef, HostListener
  } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'green'
      );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'orange'
    );
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'blue'
    );
  }
}
