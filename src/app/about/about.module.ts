import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {AboutComponent} from "./about.component";


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule
  ]
})
export class AboutModule { }
