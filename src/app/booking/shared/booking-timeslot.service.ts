import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TimeSlotListDto} from "./time-slot-list.dto";
import {TreatmentDto} from "../../treatments/shared/treatment.dto";
import {TimeSlotDto} from "./time-slot.dto";
import {AppointmentDto} from "./appointment.dto";

@Injectable({
  providedIn: 'root'
})
export class BookingTimeslotService {
  private bookingsApi = environment.api + '/Booking';
  private timeSlotApi = environment.api + '/TimeSlot';


  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<TimeSlotListDto> {
    return this._http
      .get<TimeSlotListDto>(this.timeSlotApi);
  }

  getTimeSlotsByTreatment(treatmentDuration: number): Observable<TimeSlotListDto> {
    return this._http
      .get<TimeSlotListDto>(this.timeSlotApi + "/" + treatmentDuration);
  }

  createBooking(appointmentDto: AppointmentDto): Observable<AppointmentDto> {
    return this._http
      .post<AppointmentDto>(this.bookingsApi, appointmentDto);
  }

  updateAppointment(id: number, updatedAppointment: AppointmentDto): Observable<AppointmentDto> {
    return this._http
      .put<AppointmentDto>(this.bookingsApi + id, updatedAppointment)
  }
}
