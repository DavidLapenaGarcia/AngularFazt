import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
// using ViewEncapsulation.None, Father css naw will go on in this component.
// using ViewEncapsulation.Native, only if the browser is able to emulate
// using ViewEncapsulation.Emulaete,predeterminated

export class ServerElementComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  // To be able to get data from the app.component's https using alias

  constructor() { }

  ngOnInit() {
  }

}
