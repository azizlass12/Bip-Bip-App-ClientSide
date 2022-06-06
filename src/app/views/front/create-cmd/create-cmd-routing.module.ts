import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCmdComponent } from './create-cmd/create-cmd.component';

const routes: Routes = [
  {path:'',component:CreateCmdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCmdRoutingModule { }
