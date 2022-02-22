// import { InvoiceModel } from "../models/invoice.model";

// export  class Invoiceservice{
//     lstInvoice:InvoiceModel[]=[
//         { Id: 1,  InvoiceNumber:'Inv_1', Amount:30000, Createdby:'venkateshbavaji'},
//         {Id: 2,  InvoiceNumber:'Inv_2', Amount:60000, Createdby:'charanbavaji'},
//         {Id: 3,  InvoiceNumber:'Inv_3', Amount:90000, Createdby:'prashanth'},
//         {Id: 4,  InvoiceNumber:'Inv_4', Amount:40000, Createdby:'ashok'},
//     ];
//     getInvoices():InvoiceModel[]{
//         return this.lstInvoice;
//     }
//     getInvoiceById(id:number):InvoiceModel{
//         let InvoiceDetail= this.lstInvoice.filter(x =>x.Id==id)[0];
//         return InvoiceDetail;
//     }
// }