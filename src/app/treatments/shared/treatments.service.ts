import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {TreatmentDto} from "./treatment.dto";

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {
  private treatmentsApi = environment.api + '/treatments';


  constructor(private _http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getAll(): Observable<TreatmentDto[]> {
    return this._http
      .get<TreatmentDto[]>(this.treatmentsApi);
  }
}
