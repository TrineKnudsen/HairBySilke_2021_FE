import { Component, OnInit } from '@angular/core';
import {TreatmentsService} from "../shared/treatments.service";
import {TreatmentDto} from "../shared/treatment.dto";
import {Observable} from "rxjs";
import {TreatmentListDto} from "../shared/treatmentListDto";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  treatments$: Observable<TreatmentListDto> | undefined;

  constructor(private _treatmentsService: TreatmentsService) { }

  ngOnInit(): void {
    this.treatments$ = this._treatmentsService.getAll();

  }

}
