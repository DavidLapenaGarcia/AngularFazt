import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';

import { Component} from '@angular/core';

  /* VIDEO 99.2 Injecting the Logging Service into Components
      To tell how give the service, we add a provider
  */
 /* VIDEO 102.1 How much SINstance os Service Should It Be?
      Delete from provaiders, to evit instance a new AccountService,
      and get the service hereidtaired by app.component
  */
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  /* VIDEO 99.1 Injecting the Logging Service into Components
      In the construcot, naw, Angular knows what we want but no how giv us the instance.
  */
  constructor ( private loggingService: LoggingService,
                private accountsService: AccountsService ) {}


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  /* VIDEO 99.3  Injecting the Logging Service into Components
    Naw we can use our propierty 'loggingService: LoggingService'.
    So, naw angular are making the instance for as.
  */
    this.loggingService.losStatusChange(accountStatus);
  }
}
