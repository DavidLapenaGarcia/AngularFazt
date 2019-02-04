import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component, Input } from '@angular/core';

/* Video 103 . 3 Inyecting Services into Services
  Deleted from providers [LoggindService]
*/
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    /* Video 103 . 4 Inyecting Services into Services
       We comment this function because we will call this loggingSercices's methos
       on our AccountService Service.
    */
    // this.loggingService.losStatusChange(status);
  }
}
