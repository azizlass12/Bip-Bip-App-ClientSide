import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreeRoutingModule } from './livree-routing.module';
import { LivreeComponent } from './livree/livree.component';


@NgModule({
  declarations: [
    LivreeComponent
  ],
  imports: [
    CommonModule,
    LivreeRoutingModule
  ]
})
export class LivreeModule { }
