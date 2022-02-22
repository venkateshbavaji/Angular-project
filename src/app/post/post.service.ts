import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { postModel } from "./post.model";


@Injectable({
    providedIn: 'root'
})


export class postservice{

    APIBaseURL:string='https://jsonplaceholder.typicode.com/posts';
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
    update(id:number , postModel:postModel){
        let url:string=this.APIBaseURL +'/'+ id;
        return this.httpClient.put(url,postModel);
    }
    create(postModel:postModel){
        return this.httpClient.post(this.APIBaseURL,postModel);
    }
}











