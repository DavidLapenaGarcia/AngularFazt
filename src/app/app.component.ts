import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName:string = "";
  diseableButtton:boolean = false;

  constructor(){
    this.diseableButtton = false;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  onWritteUser(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    if(this.userName.length>0){
      this.diseableButtton = true;
    }
  }

  buttonCliked(){
    this.userName = "";
    console.log("why?");
  }
}
