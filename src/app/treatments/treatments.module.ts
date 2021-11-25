import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentsRoutingModule } from './treatments-routing.module';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    TreatmentDetailsComponent
  ],
  imports: [
    CommonModule,
    TreatmentsRoutingModule,
    HttpClientModule
  ]
})
export class TreatmentsModule { }
