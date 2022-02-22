import { Pipe, PipeTransform } from "@angular/core";
@Pipe({name:'summary'})
export  class SummaryPipe implements PipeTransform{
    transform(value: string, length?:number) {
     if(!value) {
         return null;
     }   
     else {
         let actuallength:number;
         actuallength=length? length:20;
         return value.substring(0,actuallength)+'......';

     }
    }

}