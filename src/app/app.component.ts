import { AccountsService } from './accounts.service';
import { Component, OnInit } from '@angular/core';

/* Video 103 . 1 Inyecting Services into Services
  Deleted from provaiders [AccountsService], because we will
  instance that service on more hight level, in thie app.mosule.ts.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  constructor ( private accountsService: AccountsService ) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
