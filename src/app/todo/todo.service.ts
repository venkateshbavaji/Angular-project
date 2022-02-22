
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { commonservice } from "../common.service";
import { todoModel } from "./todo.model";


@Injectable({
    providedIn: 'root'
})


export class todoservice extends commonservice{
    constructor(public override httpClient:HttpClient){
        super('https://jsonplaceholder.typicode.com/todos',httpClient);
    }

//     APIBaseURL:string=('https://jsonplaceholder.typicode.com/todos');
//     constructor(private httpClient: HttpClient){

//     }
//     getall(){
//         return this.httpClient.get(this.APIBaseURL);
//     }
//     getbyId(id: number){
//     let url:string= this.APIBaseURL +'/'+ id;
// return this.httpClient.get(url);
//     }
//     delete(id :number){
//     let url:string = this.APIBaseURL + '/'+ id;
//     return this.httpClient.delete(url);
//     }
//     update(id:number , todo:todoModel){
//         let url:string=this.APIBaseURL +'/'+ id;
//         return this.httpClient.put(url,todoModel);
//     }
//     create(todoModel:todoModel){
//         return this.httpClient.post(this.APIBaseURL,todoModel);
//     }
}











