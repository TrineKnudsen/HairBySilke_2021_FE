import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  constructor(private _http: HttpClient) {
    // _http.get()
  }
}
