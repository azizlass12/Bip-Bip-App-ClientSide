import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncoursComponent } from './encours/encours.component';

const routes: Routes = [
  {path:'',component:EncoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncoursRoutingModule { }
