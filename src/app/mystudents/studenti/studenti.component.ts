import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'app/models/student.model';
import { StudentiService } from 'app/services/studenti.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit,OnDestroy {

  public students: Student[];
  private subs: Subscription;
  private paramsSubs : Subscription;


  constructor(public service: StudentiService,
    public acr: ActivatedRoute) {

  }

  ngOnInit(): void {
    var idProfesor;
    var naziv; 
    this.paramsSubs = this.acr.params.subscribe(params => {
      //console.log(params);
      idProfesor = params["idProfesor"];
      naziv = params["naziv"];
      
    });
    this.subs = this.service.getStudents(idProfesor, naziv).subscribe(data => { this.students = data; console.log(data) });
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
    this.paramsSubs.unsubscribe();
  }



}
