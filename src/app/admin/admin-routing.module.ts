import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookAppointmentComponent} from "../booking/book-appointment/book-appointment.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "../auth/guards/auth.guard";

const routes: Routes = [
  {path: '',
    component: AdminComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
