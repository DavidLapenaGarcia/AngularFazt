import { Component, OnInit } from '@angular/core';
import { SpyNgModuleFactoryLoader } from '@angular/router/testing';

@Component({
  //selector: '[app-servers]', to make it attribute
  //selector: '.app-servers', to make it a html class
  selector: 'app-servers',
  /*template: `<app-server>Loading...</app-server>
            <app-server>Loading...</app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No serverCrated';
  serverName: string='';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus="serverCREATED";
  }  
  onUpdateServerNane(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
