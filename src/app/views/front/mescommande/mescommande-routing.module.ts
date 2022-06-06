import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MescommandeComponent } from './mescommande/mescommande.component';

const routes: Routes = [
  {path:'',component:MescommandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MescommandeRoutingModule { }
