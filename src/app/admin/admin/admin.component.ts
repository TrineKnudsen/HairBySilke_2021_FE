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
import {CustomerDto} from "../../customer/shared/customer-dto";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  appointmentList$: Observable<AppointmentListDto> | undefined;
  treatmentList$: Observable<TreatmentListDto> | undefined;
  timeslotsByTreat$: Observable<TimeSlotListDto> | undefined;
  selectedTreatment: string | any;
  selectedTimeSlot: string | any;

  constructor(private _route: ActivatedRoute, private _adminService: AdminService, private _bookingService: BookingTimeslotService, private _treatmentsService: TreatmentsService) { }

  ngOnInit(): void {
    this.appointmentList$ = this._adminService.getAll();
    this.treatmentList$ = this._treatmentsService.getAll();
  }

  getTimeSlotByTreatment(treatmentDuration: number): void {
    this.timeslotsByTreat$ = this._bookingService.getTimeSlotsByTreatment(treatmentDuration);
  }

  deleteAppointment(appointmentId: number) {
    this._bookingService.deleteAppointment(appointmentId).subscribe();
    this.refresh();
  }

  updateAppointment(id: number, newTreatmentName: string, newTimeSlot: string) {
    this._bookingService.updateAppointment(id, {treatmentName:newTreatmentName, start:newTimeSlot} as AppointmentDto)
      .subscribe();
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }
}
