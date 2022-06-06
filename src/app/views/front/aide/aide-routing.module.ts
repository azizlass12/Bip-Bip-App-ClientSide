import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AideComponent } from './aide/aide.component';

const routes: Routes = [
  {path:'',component:AideComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AideRoutingModule { }
