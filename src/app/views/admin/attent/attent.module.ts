import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttentRoutingModule } from './attent-routing.module';
import { AttentComponent } from './attent/attent.component';


@NgModule({
  declarations: [
    AttentComponent
  ],
  imports: [
    CommonModule,
    AttentRoutingModule
  ]
})
export class AttentModule { }
