import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadyRoutingModule } from './ready-routing.module';

import { ReadyComponent } from './ready.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReadyRoutingModule,
    FormsModule
  ],
  declarations: [ReadyComponent]
})
export class ReadyModule { }
