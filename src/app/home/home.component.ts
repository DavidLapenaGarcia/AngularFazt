import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'; // Angular version..
import { interval, Observer } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000);
    myNumbers.subscribe(
      (number: number) => {
        console.log('1 ${number}');
      }
    );
    const myObserbable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        setTimeout(() => {
          observer.next('Error xd');
        }, 5000);
        setTimeout(() => {
          observer.complete();
        }, 6000);
        setTimeout(() => {
          observer.next('last package');
        }, 7000);
      }
    );
    myObserbable.subscribe(
      (data: string) => { console.log('data: ' + data); },
      (error: string) => { console.log('error: ' + error); },
      () => { console.log('completed'); }

    );

  }

}
