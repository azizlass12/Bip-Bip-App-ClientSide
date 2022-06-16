import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatacmdComponent } from './datacmd/datacmd.component';

const routes: Routes = [
  {path:'',component:DatacmdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatacmdRoutingModule { }
