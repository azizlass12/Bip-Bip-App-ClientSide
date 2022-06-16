import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatacmdRoutingModule } from './datacmd-routing.module';
import { DatacmdComponent } from './datacmd/datacmd.component';


@NgModule({
  declarations: [
    DatacmdComponent
  ],
  imports: [
    CommonModule,
    DatacmdRoutingModule
  ]
})
export class DatacmdModule { }
