import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { OffresComponent } from './offres/offres.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OffresComponent
  ],
  imports: [
    CommonModule,
    OffresRoutingModule,
    FormsModule
  ]
})
export class OffresModule { }
