import { Component, OnInit } from '@angular/core';
import {AdminService} from "../shared/admin.service";
import {Observable} from "rxjs";
import {AppointmentListDto} from "../../booking/shared/appointment-list.dto";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  appointmentList$: Observable<AppointmentListDto> | undefined;
  appointmentListByDay$: Observable<AppointmentListDto> | undefined;
  weekday: string | any;

  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this.appointmentList$ = this._adminService.getAll();
  }

  getAppointmentsByWeekDay(dayOfWeek: string){
    this.appointmentListByDay$ = this._adminService.getByWeekDay(dayOfWeek);
  }
}
