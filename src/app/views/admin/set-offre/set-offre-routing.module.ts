import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetoffreComponent } from './setoffre/setoffre.component';

const routes: Routes = [
  {path:'',component:SetoffreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetOffreRoutingModule { }
