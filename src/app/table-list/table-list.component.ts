import { Component, OnInit } from '@angular/core';
import { Predmet } from 'app/models/predmet.model';
import { PredmetiService } from 'app/services/predmeti.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  private subjects:Predmet[];
  constructor(public servis:PredmetiService) {
    this.servis.getPredmetiZaStudenta().subscribe(data=>this.subjects=data);
   }

  ngOnInit() {
  }

}
