import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetOffreRoutingModule } from './set-offre-routing.module';
import { SetoffreComponent } from './setoffre/setoffre.component';


@NgModule({
  declarations: [
    SetoffreComponent
  ],
  imports: [
    CommonModule,
    SetOffreRoutingModule
  ]
})
export class SetOffreModule { }
