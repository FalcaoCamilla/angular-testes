import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BankingComponent } from './shared/banking/banking.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './shared/investiments/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    BankingComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
