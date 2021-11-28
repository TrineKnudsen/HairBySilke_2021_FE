import { Component, OnInit } from '@angular/core';
import {BookingTimeslotService} from "../shared/booking-timeslot.service";
import {Observable} from "rxjs";
import {TimeSlotListDto} from "../shared/time-slot-list.dto";

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})

export class BookAppointmentComponent implements OnInit {
  timeSlots$: Observable<TimeSlotListDto> | undefined;

  constructor(private _bookingService: BookingTimeslotService) { }

  ngOnInit(): void {
    this.timeSlots$ = this._bookingService.getAll();
  }
}


