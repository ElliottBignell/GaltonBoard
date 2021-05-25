import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BucketsComponent } from './buckets/buckets.component';
import { BarsComponent } from './bars/bars.component';
import { BinsComponent } from './bins/bins.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketsComponent,
    BarsComponent,
    BinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
