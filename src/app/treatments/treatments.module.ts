import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentsRoutingModule } from './treatments-routing.module';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';


@NgModule({
  declarations: [
    TreatmentDetailsComponent
  ],
  imports: [
    CommonModule,
    TreatmentsRoutingModule
  ]
})
export class TreatmentsModule { }
