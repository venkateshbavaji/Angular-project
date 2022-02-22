import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { photoModel } from "./ptoto.model";



@Injectable({
    providedIn: 'root'
})


export class photoserrvice{

    APIBaseURL:string='https://jsonplaceholder.typicode.com/photos';
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
    update(id:number , photoModel:photoModel){
        let url:string=this.APIBaseURL +'/'+ id;
        return this.httpClient.put(url,photoModel);
    }
    create(photoModel:photoModel){
        return this.httpClient.post(this.APIBaseURL,photoModel);
    }
}

