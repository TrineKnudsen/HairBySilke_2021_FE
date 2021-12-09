import { Component, OnInit } from '@angular/core';
import {AdminService} from "../shared/admin.service";
import {Observable} from "rxjs";
import {AppointmentListDto} from "../../booking/shared/appointment-list.dto";
import {AppointmentDto} from "../../booking/shared/appointment.dto";
import {TreatmentListDto} from "../../treatments/shared/treatmentListDto";
import {TimeSlotListDto} from "../../booking/shared/time-slot-list.dto";
import {BookingTimeslotService} from "../../booking/shared/booking-timeslot.service";
import {TreatmentsService} from "../../treatments/shared/treatments.service";
import {ifStmt} from "@angular/compiler/src/output/output_ast";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  appointmentList$: Observable<AppointmentListDto> | undefined;
  appointmentListByDay$: Observable<AppointmentListDto> | undefined;
  treatmentList$: Observable<TreatmentListDto> | undefined;
  timeslotsByTreat$: Observable<TimeSlotListDto> | undefined;
  selectedTreatment: string | any;
  selectedTimeSlot: string | any;
  weekday: string | any;
  panelOpenState = false;
  selectedAppointment$: number | any;

  constructor(private _route: ActivatedRoute, private _adminService: AdminService, private _bookingService: BookingTimeslotService, private _treatmentsService: TreatmentsService) { }

  ngOnInit(): void {
    this.selectedAppointment$ = Number(this._route.snapshot.paramMap.get('id'));
    this.appointmentList$ = this._adminService.getAll();
    this.treatmentList$ = this._treatmentsService.getAll();
  }

  getTimeSlotByTreatment(treatmentDuration: number): void {
    this.timeslotsByTreat$ = this._bookingService.getTimeSlotsByTreatment(treatmentDuration);
  }

  getAppointmentsByWeekDay(dayOfWeek: string){
    this.appointmentListByDay$ = this._adminService.getByWeekDay(dayOfWeek);
  }

  getAppointment(id: number): Observable<AppointmentDto> {
    return this._adminService.getAppointment(id);
  }

  deleteAppointment(appointment: AppointmentDto) {

  }
}
