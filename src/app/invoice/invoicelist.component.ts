// import { Component, OnInit } from "@angular/core";
// import { FormControl, FormGroup, Validators } from "@angular/forms";
// import { InvoiceModel } from "../models/invoice.model";
// import { Invoiceservice } from "./invoice.service";
// @Component({
//     selector:'Invoicelist',
//     templateUrl:'./Invoicelist.component.html',
// })
// export class InvoicelistComponent implements OnInit {
//     editIndex:number;
//     modalTitle: string;
//     alertmessage:string;
//     listInvoice: InvoiceModel[];
//     formData = new InvoiceModel();
//     InvoiceForm =new FormGroup({
// invoiceNumber: new FormControl('',[Validators.required, Validators.minLength(3)]),
// amount : new FormControl('', Validators.required),
// createdby: new FormControl('', Validators.required)
//     })
//     constructor(private Invoiceservice:Invoiceservice){

//     }
//     get InvoiceNumber(){
// return this.InvoiceForm.get('InvooiceNumber');
//     }
//     get amount(){
//         return this.InvoiceForm.get('Amount');
//     }
//     get Createdby(){
//         return this.InvoiceForm.get('Createdby');
//     }
//     saveInvoiceDetail(){
//         if(this.formData.Id!=null){
//             this.listInvoice[this.editIndex]=this.formData;
//             this. alertmessage= 'invoice updated successfully......!'
//         }
//         else{
//             this.formData.Id = this.listInvoice.length+1;
//             this.listInvoice.push(this.formData);
//             this.alertmessage=' invoice saved successfully....!';
//         }
//         this.formData = new InvoiceModel();
//         this.InvoiceForm.reset();
    
//     }
//     editInvoice(InvoiceDetail:InvoiceModel,index:number){
//         this.alertmessage='';
//         this.formData= InvoiceDetail;
//         this.editIndex= index;
//         this.modalTitle='update Invoice successfully...1';
//     }
//     addInvoice(){
//         this.alertmessage='';
//         this.formData= new InvoiceModel();
//         this.InvoiceForm.reset();
//         this.modalTitle='addInvoice';
//     }
//     deleteInvoice(index:number){
//         this.listInvoice.splice(index,1);
//     }
//     ngOnInit():void{
//         this.listInvoice=this.Invoiceservice.getInvoices();
    
//     }
// }