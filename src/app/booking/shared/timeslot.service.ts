import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TimeSlotListDto} from "./time-slot-list.dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TimeslotService {
  private timeSlotApi = environment.api + '/Booking';

  constructor(private _http: HttpClient) { }

  getAll(): Observable<TimeSlotListDto> {
    return this._http
      .get<TimeSlotListDto>(this.timeSlotApi)
  }
}
