import { Profesor } from "./profesor.model";

export class Predmet{
    constructor(public idPredmet : number,
                public espb: number,
                public naziv : string,
                public semestar: number) {

    }
}