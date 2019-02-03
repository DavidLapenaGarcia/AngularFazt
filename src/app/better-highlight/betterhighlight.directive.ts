import {
  Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input
  } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transperemt';
  @Input('appBetterhighlight') highlightColor: string = 'orange';
  @HostBinding('style.backgroundColor') backGroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // HostBinding()  wins this battle
    /* this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'blue'
    ); */

    // Because on instance defaultColor is not setted
    this.backGroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /* this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'orange'
    ); */
    this.backGroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /* this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'blue'
    ); */
    this.backGroundColor = 'blue';
  }
}
