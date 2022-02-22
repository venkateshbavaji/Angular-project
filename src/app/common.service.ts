
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})



export class commonservice {
    constructor(@Inject(String) private APIBaseUrl:string, public httpClient:HttpClient){

    }
    getall(){
        return this.httpClient.get(this.APIBaseUrl);
    }
    getbyId(id:number){
        let url:string= this.APIBaseUrl + '/' + id;
        return this.httpClient.get(url);
    }
    delete(id:number){
        let url:string= this.APIBaseUrl +'/'+ id;
        return this.httpClient.delete(url);
    }
    update(id:number, resource:any){
        let url:string=this.APIBaseUrl + '/'+ id;
        return this.httpClient.get(this.APIBaseUrl,resource)
    }
    create(resource:any){
        return this.httpClient.post(this.APIBaseUrl,resource);
    }
}