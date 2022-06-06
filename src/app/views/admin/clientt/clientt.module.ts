import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienttComponent } from './clientt/clientt.component';
import { ClienttRoutingModule } from './clientt.routing.module';


@NgModule({
  declarations: [
ClienttComponent  ],
  imports: [
    CommonModule,
    ClienttRoutingModule  ]
})
export class ClienttModule { }
