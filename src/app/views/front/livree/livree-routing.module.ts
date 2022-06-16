import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from '../../admin/livre/livre/livre.component';
import { LivreeComponent } from './livree/livree.component';

const routes: Routes = [
  {path:'',component:LivreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreeRoutingModule { }
