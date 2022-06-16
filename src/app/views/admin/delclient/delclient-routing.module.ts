import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelclientComponent } from './delclient/delclient.component';

const routes: Routes = [
  {path:'',component:DelclientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelclientRoutingModule { }
