import {
  Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding
  } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backGroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // HostBinding()  wins this battle
    this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'blue'
    );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /* this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'orange'
    ); */
    this.backGroundColor = 'orange';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /* this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'blue'
    ); */
    this.backGroundColor = 'blue';
  }
}
