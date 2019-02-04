import { LoggingService } from './../logging.service';

import { Component, EventEmitter, Output } from '@angular/core';

  /* Injecting the Logging Service into Components: 2
      To tell how give the service, we add a provider
  */
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  /*Injecting the Logging Service into Components: 1
      In the construcot, naw, Angular knows what we want but no how giv us the instance.
  */
  constructor (private loggingService: LoggingService) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
  /* Injecting the Logging Service into Components: 3
    Naw we can use our propierty 'loggingService: LoggingService'.
    So, naw angular are making the instance for as.
  */
    this.loggingService.losStatusChange(accountStatus);
  }
}
