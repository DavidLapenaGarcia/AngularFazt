import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  /**
   * onServerAdded
   * This function is only executable by a button on app.component
   */
  onServerAdded(nameInput) {
    this.serverCreated.emit({
      serverName: nameInput,
      serverContent: this.newServerContent
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
