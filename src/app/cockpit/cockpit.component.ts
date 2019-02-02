import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

   newServerName = '';
   newServerContent = '';
  @ViewChild('serverConentInput') serverContentInput: ElementRef; // U can cath this, but never set value

  constructor() { }

  ngOnInit() {
  }
  /**
   * onServerAdded
   * This function is only executable by a button on app.component
   */
  onServerAdded(nameInput: HTMLInputElement) {
     this.serverCreated.emit({
      serverName: nameInput.value, // Local Reference
      serverContent: this.serverContentInput.nativeElement.value // By @ViewChild and getting acces to template & DOM
      });
  }
  /**
   * onBlueprintAdded
   * This function is only executable by a button on app.component
   */
  onBlueprintAdded() {
      this.blueprintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
  }
}
