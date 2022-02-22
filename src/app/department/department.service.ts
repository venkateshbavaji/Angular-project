import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { DepartmentModel } from "../models/department.model";
@Injectable({
    providedIn:'root',
})
export class DepartmentService {
    constructor(private firestore:AngularFirestore){

    }
    getall(){
        return this.firestore.collection('department').snapshotChanges();
    }
    getById(departmenttId:string){
        return this.firestore.doc<DepartmentModel>('department/'+ departmenttId).valueChanges();
    }
    create(departmentModel:DepartmentModel){
        return this.firestore.collection('department').add({...DepartmentModel});
    }
    update(departmentId:string,departmentModel:DepartmentModel){
        return this.firestore.doc('department/'+ departmentId).update({...departmentModel});  
    };
    delete(departmenttId:string){
        return this.firestore.doc('department/'+ departmenttId).delete();
    }

}