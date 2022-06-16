import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttenteComponent } from './attente/attente.component';

const routes: Routes = [
  {path:'',component:AttenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttenteRoutingModule { }
