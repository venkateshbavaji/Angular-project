
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { commentModel } from "./comment.model";



@Injectable({
    providedIn: 'root'
})


export class commentserrvice{

    APIBaseURL:string='https://jsonplaceholder.typicode.com/comments';
    constructor(private httpClient: HttpClient){

    }
    getall(){
        return this.httpClient.get(this.APIBaseURL);
    }
    getbyId(id: number){
    let url:string= this.APIBaseURL +'/'+ id;
return this.httpClient.get(url);
    }
    delete(id :number){
    let url:string = this.APIBaseURL + '/'+ id;
    return this.httpClient.delete(url);
    }
    update(id:number , commentModel: commentModel){
        let url:string=this.APIBaseURL +'/'+ id;
        return this.httpClient.put(url,commentModel);
    }
    create(commentModel:commentModel){
        return this.httpClient.post(this.APIBaseURL,commentModel);
    }
}