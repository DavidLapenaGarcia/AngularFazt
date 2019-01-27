import { Component, OnInit } from '@angular/core';
import { SpyNgModuleFactoryLoader } from '@angular/router/testing';

@Component({
  //selector: '[app-servers]', to make it attribute
  //selector: '.app-servers', to make it a html class
  selector: 'app-servers',
  /*template: `<app-server>Loading...</app-server>
            <app-server>Loading...</app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles : [`
            .white-text-task3{
              color: white;
            }
          `],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No serverCrated';
  serverName: string='Initialy';
  serverCreated =false;
  servers = ['test', 'test2'];

  task3If:boolean= false;
  task3number=1;
  task3Array= [];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }
  buttonTask3(){
    this.task3If = !this.task3If;
    this.task3Array.push(this.task3Array.length+1);

  }



  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='serverCREATED! Name is '+this.serverName;
  }  
  onUpdateServerNane(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
