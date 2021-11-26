import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentsRoutingModule } from './treatments-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ListComponent} from "./treatment-list/list.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TreatmentsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TreatmentsModule { }
