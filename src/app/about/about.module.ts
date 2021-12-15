import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {AboutComponent} from "./about.component";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AboutComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        HttpClientModule,
        MatCardModule
    ]
})
export class AboutModule { }
