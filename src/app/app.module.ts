import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BucketsComponent } from './buckets/buckets.component';
import { BucketComponent } from './bucket/bucket.component';
import { BarsComponent } from './bars/bars.component';
import { BinsComponent } from './bins/bins.component';
import { BinComponent } from './bin/bin.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketsComponent,
    BucketComponent,
    BarsComponent,
    BinsComponent,
    BinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
