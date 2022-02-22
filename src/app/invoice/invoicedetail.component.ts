// import { Component } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";
// import { InvoiceModel } from "../models/invoice.model";
// import { Invoiceservice } from "./invoice.service";
// @Component({
//     selector:'Invoicedetail',
//     templateUrl:'./invoicedetail.component.html',
// })
// export class Invoicedetailcomponent{
//     invoicedetail:InvoiceModel;
//     constructor(private route:ActivatedRoute, private Invoiceservice:Invoiceservice){
//         route.paramMap.subscribe((param)=>{
//             let id= param.get('id');
//             this.invoicedetail = Invoiceservice.getInvoiceById(parseInt(id));
//         })
//     }
// }