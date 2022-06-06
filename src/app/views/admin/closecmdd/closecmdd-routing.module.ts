import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosecmddComponent } from './closecmdd/closecmdd.component';

const routes: Routes = [
  {path:'',component:ClosecmddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosecmddRoutingModule { }
