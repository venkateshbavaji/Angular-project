import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent  {
title="forms-reactive";

registerForm = new FormGroup ({
  emailaddress: new FormControl('',Validators.required),
  password:new FormControl('',Validators.required),
  mobilenumber:new FormControl('',Validators.required),
  candidatename:new FormControl('',Validators.required),
  dateofbirth:new FormControl('',Validators.required),
  address:new FormControl('',Validators.required),
  fathername:new FormControl('',Validators.required),
});

  register() {

  }
  get fathername(){
    return this.registerForm.get('fathername');
  }
  get candidatename(){
    return this.registerForm.get('candidatename');
  }
get dateofbirth(){
  return this.registerForm.get('dateofbirth');
}
get address(){
  return this.registerForm.get('address');
}
get emailaddress(){
  return this.registerForm.get('emailaddress');
}

get mobilenumber(){

  return this.registerForm.get('mobilenumber');
}
get password(){
  return this.registerForm.get('password');
}
 }
