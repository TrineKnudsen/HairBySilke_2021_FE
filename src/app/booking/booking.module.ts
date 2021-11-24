import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';


@NgModule({
  declarations: [
    BookAppointmentComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
