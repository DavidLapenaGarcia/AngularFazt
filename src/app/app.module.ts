import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

/* Video 103 . 2 Inyecting Services into Services
  Provaiding the Service AccountsService here. And..
  ...making the instance for all components, unless we provaid again like before.
  Doing that, we are able to inyect one Service to another Service. (See more Video 103)
*/
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
