import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MescommandeRoutingModule } from './mescommande-routing.module';
import { MescommandeComponent } from './mescommande/mescommande.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MescommandeComponent
  ],
  imports: [
    CommonModule,
    MescommandeRoutingModule,
    FormsModule
  ]
})
export class MescommandeModule { }
