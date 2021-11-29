import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TimeSlotListDto} from "./time-slot-list.dto";

@Injectable({
  providedIn: 'root'
})
export class BookingTimeslotService {
  private treatmentsApi = environment.api + '/Booking';

  constructor(private _http: HttpClient) { }

  getAll(): Observable<TimeSlotListDto> {
    return this._http
      .get<TimeSlotListDto>(this.treatmentsApi);
  }
}
