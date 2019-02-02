import { Component,
OnInit, OnChanges, DoCheck, AfterContentInit,
Input, ViewEncapsulation, SimpleChanges, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
// using ViewEncapsulation.None, Father css naw will go on in this component.
// using ViewEncapsulation.Native, only if the browser is able to emulate
// using ViewEncapsulation.Emulaete,predeterminated

export class ServerElementComponent implements
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  // To be able to get data from the app.component's https using alias
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('OnInit called!');
    console.log('TextContent:: ' + this.header.nativeElement.textContent);
    console.log('PARAGRAPH:: ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('DoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called');
    console.log('PARAGRAPH:: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit called');
    console.log('TextContent2:: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('Destroyed called');
  }
}
