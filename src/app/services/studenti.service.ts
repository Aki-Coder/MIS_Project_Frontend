import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import {Student} from 'app/models/student.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class StudentiService {
  
  
constructor(private http: HttpClient) { }
  
    public getStudents(idProfesor:number, naziv:string) : Observable<Student[]>{
      let params = new HttpParams();
      params.set("idProfesor",idProfesor+"");
      params.set("naziv",naziv);
      return this.http.get<Student[]>("http://localhost:8080/findStudents?idProfesor="+idProfesor+"&naziv="+naziv);
  
    }
  
  }