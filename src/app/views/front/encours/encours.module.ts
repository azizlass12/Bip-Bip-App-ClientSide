import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncoursRoutingModule } from './encours-routing.module';
import { EncoursComponent } from './encours/encours.component';


@NgModule({
  declarations: [
    EncoursComponent
  ],
  imports: [
    CommonModule,
    EncoursRoutingModule
  ]
})
export class EncoursModule { }
