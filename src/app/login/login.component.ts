import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  title='login page';
 emailaddress:string='bavajivenkatesh2113@gmail.com';
  password:string='12345';
  //imgUrl:string="https://media.gettyimages.com/photos/dhoni-of-the-chennai-super-kings-heads-out-to-field-during-the-indian-picture-id1148625518?s=2048x2048";
  
//imgurl='../assets/profile.png';
constructor(private toastrservice:ToastrService){
}
login(){
  
  let UserInfo = [{ emailaddress:'bavajivenkatesh2113@gmail.com',password:'123',isAdmin:false},
  { emailaddress:'adminvenkat2113@gmail.com',password:'12345',isAdmin:true}];
let filterUser= UserInfo.filter(x =>x.emailaddress===this.emailaddress&&x.password===this.password);
if (filterUser && filterUser.length > 0) {
  localStorage.setItem('isAuthenticated','True');
  if(filterUser[0].isAdmin){
    localStorage.setItem('isAdmin','True');
  }
  this.toastrservice.success('login is successfull....!');
}
else {
  this.toastrservice.error('Invalid credential....!');
}
}


}
