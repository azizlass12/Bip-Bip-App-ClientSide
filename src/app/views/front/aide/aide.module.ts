import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AideRoutingModule } from './aide-routing.module';
import { AideComponent } from './aide/aide.component';


@NgModule({
  declarations: [
    AideComponent
  ],
  imports: [
    CommonModule,
    AideRoutingModule
  ]
})
export class AideModule { }
