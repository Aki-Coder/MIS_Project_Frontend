import { Component, OnInit, OnDestroy } from '@angular/core';
import { PredmetiService } from 'app/services/predmeti.service';
import { Predmet } from 'app/models/predmet.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit,OnDestroy {

  public subjects: Predmet[];
  private sub : Subscription;


   constructor(public service: PredmetiService,
               public routing:Router) {
   
   
   }

  ngOnInit() {
    this.sub = this.service.getPredmeti().subscribe(data => this.subjects = data);
  }

  getStudents(idProfesor:number,naziv:string) {
   this.routing.navigate(["/student",idProfesor,naziv]);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
