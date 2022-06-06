import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpencmdRoutingModule } from './opencmd-routing.module';
import { OpencmdComponent } from './opencmd/opencmd.component';


@NgModule({
  declarations: [
    OpencmdComponent
  ],
  imports: [
    CommonModule,
    OpencmdRoutingModule
  ]
})
export class OpencmdModule { }
