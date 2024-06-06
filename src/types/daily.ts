export interface Daily {
   temp: Temp,
   weather:Weather[];
   summary: string;
   date: Date | string;
}

interface Weather {
    id:number;
    main:string;
    description:string;
    icon:string;
 }

interface Temp {
    day:number;
    min:number;
    max:number;
    night:number;
    eve:number;
    morn:number;
 }