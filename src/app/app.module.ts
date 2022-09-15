import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  { CustTitleModule } from "cust-title";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustTitleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
