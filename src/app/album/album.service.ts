import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { commonservice } from "../common.service";
@Injectable({
    providedIn:'root',
})
export class albumservice extends commonservice{
constructor(public override httpClient:HttpClient){
super('https://jsonplaceholder.typicode.com/albums',httpClient);
}
}