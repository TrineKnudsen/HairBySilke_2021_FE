import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TimeSlotListDto} from "./time-slot-list.dto";
import {TreatmentDto} from "../../treatments/shared/treatment.dto";

@Injectable({
  providedIn: 'root'
})
export class BookingTimeslotService {
  private bookingsApi = environment.api + '/Booking';
  private timeSlotApi = environment.api + '/TimeSlot';

  constructor(private _http: HttpClient) { }

  getAll(): Observable<TimeSlotListDto> {
    return this._http
      .get<TimeSlotListDto>(this.timeSlotApi);
  }

  getTimeSlotsByTreatment(treatmentDuration: number): Observable<TimeSlotListDto> {
    return this._http
      .get<TimeSlotListDto>(this.timeSlotApi + "/" + treatmentDuration);
  }
}
