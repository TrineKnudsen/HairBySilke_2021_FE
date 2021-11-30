import { Component, OnInit } from '@angular/core';
import {BookingTimeslotService} from "../shared/booking-timeslot.service";
import {Observable} from "rxjs";
import {TimeSlotListDto} from "../shared/time-slot-list.dto";
import {TreatmentListDto} from "../../treatments/shared/treatmentListDto";
import {TreatmentsService} from "../../treatments/shared/treatments.service";
import {filter, map} from "rxjs/operators";
import {TreatmentDto} from "../../treatments/shared/treatment.dto";
import {TimeSlotDto} from "../shared/time-slot.dto";
import {CustomerDto} from "../../customer/shared/customer-dto";

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})

export class BookAppointmentComponent implements OnInit {

  timeSlots$: Observable<TimeSlotListDto> | undefined;
  treatmentList$: Observable<TreatmentListDto> | undefined;
  timeslotsByTreat$: Observable<TimeSlotListDto> | undefined;

  constructor(private _bookingService: BookingTimeslotService, private _treatmentsService: TreatmentsService) { }

  ngOnInit(): void {
    this.treatmentList$ = this._treatmentsService.getAll();
  }

  getTimeSlotByTreatment(treatmentDuration: number): void {
    this.timeslotsByTreat$ = this._bookingService.getTimeSlotsByTreatment(treatmentDuration);
  }

  bookAppointment(timeslot: TimeSlotDto, treatment: TreatmentDto, customer: CustomerDto) {

  }
}


