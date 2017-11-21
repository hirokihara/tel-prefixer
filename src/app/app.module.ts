import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReadyModule } from './app/ready/ready.module';
import { GenerateModule } from './app/generate/generate.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReadyModule,
    GenerateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
