import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
