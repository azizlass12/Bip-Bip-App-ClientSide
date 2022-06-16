import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesoffresRoutingModule } from './mesoffres-routing.module';
import { MesoffresComponent } from './mesoffres/mesoffres.component';
import { OffreDetailsComponent } from './mesoffres/offre-details/offre-details.component';
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  declarations: [
    MesoffresComponent,
    OffreDetailsComponent
  ],
  imports: [
    CommonModule,
    MesoffresRoutingModule,
    MatDialogModule
  ]
})
export class MesoffresModule { }
