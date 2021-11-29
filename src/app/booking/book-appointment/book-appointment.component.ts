import { Component, OnInit } from '@angular/core';
import {BookingTimeslotService} from "../shared/booking-timeslot.service";
import {Observable} from "rxjs";
import {TimeSlotListDto} from "../shared/time-slot-list.dto";
import {TreatmentListDto} from "../../treatments/shared/treatmentListDto";
import {TreatmentsService} from "../../treatments/shared/treatments.service";

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})

export class BookAppointmentComponent implements OnInit {
  timeSlots$: Observable<TimeSlotListDto> | undefined;
  treatmentList$: Observable<TreatmentListDto> | undefined;

  constructor(private _bookingService: BookingTimeslotService, private _treatmentsService: TreatmentsService) { }

  ngOnInit(): void {
    this.timeSlots$ = this._bookingService.getAll();
    this.treatmentList$ = this._treatmentsService.getAll();
  }

  getTimeSlotbyTreament(): Observable<TimeSlotListDto> {
    
  }
}


