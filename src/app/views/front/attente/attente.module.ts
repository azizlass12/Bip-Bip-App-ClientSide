import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttenteRoutingModule } from './attente-routing.module';
import { AttenteComponent } from './attente/attente.component';


@NgModule({
  declarations: [
    AttenteComponent
  ],
  imports: [
    CommonModule,
    AttenteRoutingModule
  ]
})
export class AttenteModule { }
