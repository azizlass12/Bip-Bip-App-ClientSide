import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttentComponent } from './attent/attent.component';

const routes: Routes = [
  {path:'',component:AttentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentRoutingModule { }
