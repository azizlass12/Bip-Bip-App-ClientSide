import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IntroHomeComponent } from './intro-home/intro-home.component';




@NgModule({
  declarations: [
    HomeComponent,
    IntroHomeComponent,
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
