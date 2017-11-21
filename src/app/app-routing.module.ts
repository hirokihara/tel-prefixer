import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadyComponent }  from './app/ready/ready.component';
import { GenerateComponent }  from './app/generate/generate.component';

const routes: Routes = [
    {path: 'ready', component: ReadyComponent},
    {path: 'generate/:prefix', component: GenerateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
