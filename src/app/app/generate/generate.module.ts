import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateRoutingModule } from './generate-routing.module';

import { GenerateComponent } from './generate.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GenerateRoutingModule,
    FormsModule,
  ],
  declarations: [GenerateComponent]
})
export class GenerateModule { }
