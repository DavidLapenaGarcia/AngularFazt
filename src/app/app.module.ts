import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHightLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterhighlightDirective } from './better-highlight/betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightLightDirective,
    BetterhighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
