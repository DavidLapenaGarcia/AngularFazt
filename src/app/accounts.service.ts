import { LoggingService } from './logging.service';

/*

*/
import { Injectable } from '@angular/core';

/* Video 103 . 7 Inyecting Services into Services
    But it breacks, becouse our service has not metadata.
    @Comomnent or @Directive have, but here we need add some
    "metadata-connector", and that is @Injectable()
*/
@Injectable()

export class AccountsService {
    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  /* Video 103 . 7 Inyecting Services into Services
      But naw we need to tell at constructor what we need.
  */
  constructor( private loggingService: LoggingService) {
  }
  addAccount(name: string, status: string): void {
      this.accounts.push({name: name, status: status});
      /* Video 103 . 6 Inyecting Services into Services
      Adding here the LoggingService method that we commented on our components.
      */
      this.loggingService.losStatusChange(status);
  }

  updateStatus(id: number, status: string) {
      this.accounts[id].status = status;
      /* Video 103 . 6 Inyecting Services into Services
      Adding here the LoggingService method that we commented on our components.
      */
      this.loggingService.losStatusChange(status);
  }
}
