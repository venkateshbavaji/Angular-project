import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { commonservice } from "../common.service";
@Injectable({
    providedIn:'root',
})
export class userservice extends commonservice{
    constructor(public override httpClient:HttpClient){
        super('https://jsonplaceholder.typicode.com/users',httpClient)
    }
}