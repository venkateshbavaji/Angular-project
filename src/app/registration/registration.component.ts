import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  title='registration';

  emailaddress:string='bavajivenkatesh307@gmail.com';
  mobilenumber:number=6303428439;
  password:string='20132';
  isregister:boolean= true;
  constructor(private router:Router){

  }
  register(){
    console.log(this.emailaddress,this.password,this.mobilenumber)
    this.router.navigate(['/login'])
  }
  
  
  }



