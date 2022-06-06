import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienttComponent } from './clientt/clientt.component';

const routes: Routes = [
  {path:'',component:ClienttComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienttRoutingModule { }
