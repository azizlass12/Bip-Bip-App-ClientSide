import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelclientRoutingModule } from './delclient-routing.module';
import { DelclientComponent } from './delclient/delclient.component';


@NgModule({
  declarations: [
    DelclientComponent
  ],
  imports: [
    CommonModule,
    DelclientRoutingModule
  ]
})
export class DelclientModule { }
