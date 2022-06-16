import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesoffresComponent } from './mesoffres/mesoffres.component';

const routes: Routes = [
  {path:'',component:MesoffresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesoffresRoutingModule { }
