import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppointmentListDto} from "../../booking/shared/appointment-list.dto";
import {AppointmentDto} from "../../booking/shared/appointment.dto";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminApi = environment.api + '/booking';

  constructor(private _http: HttpClient) { }

  getAll(): Observable<AppointmentListDto> {
    return this._http
      .get<AppointmentListDto>(this.adminApi);
  }

  getByWeekDay(weekDay: string): Observable<AppointmentListDto> {
    return this._http.get<AppointmentListDto>(this.adminApi + '/' + weekDay);
  }

  getAppointment(id: number): Observable<AppointmentDto> {
    const params = new HttpParams().set('id', id);
    return this._http.get<AppointmentDto>(this.adminApi + '/' + id, {params});
  }
}
