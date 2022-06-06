import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpencmdComponent } from './opencmd/opencmd.component';

const routes: Routes = [
  {path:'',component:OpencmdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpencmdRoutingModule { }
