import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreRoutingModule } from './livre-routing.module';
import { LivreComponent } from './livre/livre.component';


@NgModule({
  declarations: [
    LivreComponent
  ],
  imports: [
    CommonModule,
    LivreRoutingModule
  ]
})
export class LivreModule { }
