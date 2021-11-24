import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookAppointmentComponent} from "./book-appointment/book-appointment.component";

const routes: Routes = [
  {path: '',
  component: BookAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
