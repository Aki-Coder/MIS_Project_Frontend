import { Predmet } from "./predmet.model";
import { Student } from "./student.model";

export interface Ispit{
    idIspit:number;
    datum:Date;
    ocena:number;
    predmet:Predmet;
    studenti:Student[];
    

}