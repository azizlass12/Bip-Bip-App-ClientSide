import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistreRoutingModule } from './registre-routing.module';
import { RegistreComponent } from './foldercomponentREGISTRE/registre/registre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistreComponent
  ],
  imports: [
    CommonModule,
    RegistreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistreModule { }
