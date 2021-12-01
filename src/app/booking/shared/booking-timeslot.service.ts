import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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


  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getAll(): Observable<TimeSlotListDto> {
    return this._http
      .get<TimeSlotListDto>(this.timeSlotApi);
  }

  getTimeSlotsByTreatment(treatmentDuration: number): Observable<TimeSlotListDto> {
    return this._http
      .get<TimeSlotListDto>(this.timeSlotApi + "/" + treatmentDuration, this.httpOptions);
  }

  createBooking(appointmentDto: AppointmentDto): Observable<AppointmentDto> {
    return this._http
      .post<AppointmentDto>(this.bookingsApi, appointmentDto);
  }
}
