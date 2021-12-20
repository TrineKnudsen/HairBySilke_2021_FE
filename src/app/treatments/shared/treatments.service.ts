import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {TreatmentDto} from "./treatment.dto";
import {TreatmentListDto} from "./treatmentListDto";

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<TreatmentListDto> {
    return this._http
      .get<TreatmentListDto>(environment.api + '/treatment');
  }
}
