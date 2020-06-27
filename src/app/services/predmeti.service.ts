import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Predmet } from 'app/models/predmet.model';
import { Observable } from 'rxjs';
import { Student } from 'app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class PredmetiService {


  constructor(private http: HttpClient) { }

  public getPredmeti() : Observable<Predmet[]>{

    return this.http.get<Predmet[]>("http://localhost:8080/findPredmets?idProfesor=1");
  }

  public getPredmetiZaStudenta():Observable<Predmet[]>{
    return this.http.get<Predmet[]>("http://localhost:8080/findMyPredmets?idStudent=1");
  }


}
