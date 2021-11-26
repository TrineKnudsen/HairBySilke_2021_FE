import { Component, OnInit } from '@angular/core';
import {TreatmentsService} from "../shared/treatments.service";
import {TreatmentDto} from "../shared/treatment.dto";
import {Observable} from "rxjs";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  treatments: TreatmentDto[] | undefined;
  treatments$: Observable<TreatmentDto[]> | undefined;

  constructor(private _treatmentsService: TreatmentsService) { }

  ngOnInit(): void {
    this._treatmentsService.getAll()
      .subscribe(treatments => {
        this.treatments = treatments;
      });

  }

}
