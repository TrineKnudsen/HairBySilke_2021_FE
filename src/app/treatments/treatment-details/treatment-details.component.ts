import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TreatmentListDto} from "../shared/treatmentListDto";
import {TreatmentsService} from "../shared/treatments.service";


@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrls: ['./treatment-details.component.css']
})
export class TreatmentDetailsComponent implements OnInit {
  treatments$: Observable<TreatmentListDto> | undefined

  constructor(private _treatsmentsService: TreatmentsService) { }

  ngOnInit(): void {
  }

}
