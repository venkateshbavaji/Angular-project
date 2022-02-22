
//import { Component ,OnInit} from '@angular/core';

//@Component({
  //selector: 'app-root',
 //templateUrl:'./app.component.html',
 //styleUrls:['./app.component.css'],
//})
//export class AppComponent{
  //public mycolor= "aqua";
  //public required = true;
  //public mystyles ={
    //color:"gold",
    //fontstyle:"italic",
    //fontsize:"50px",
 // }

//}


 // public mytext ="textcolor";
  //public required= true;
   //public group={
    //"textcolor":this.required,
   //"textsize":this.required,
   //"textstyles":this.required,
   //}
 //}
  

   
//}

 //title = 'facebook';   imgUrl :string="https://www.windowslatest.com/wp-content/uploads/2021/10/Windows-11-ISO-download.jpg"
 //emailaddress: string='bavajivenkatesh307@gmail.com';
// password:string='3072113';
  //mobilenumber:string='6303428439';
   //colspan:number = 4;
   // isactive:boolean=false;
   //login(){
   //console.log(this.emailaddress,this.password,this.mobilenumber);
  // }
// }
  // onchange(Emailaddress:string){
    // console.log(Emailaddress);
      //console.log('you are in on change method');
   //}

//}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topic = 'Firebase Datastorage';
  viewMode: string = 'home';
constructor(private router:Router){

}
logout(){
  localStorage.clear();
  this.router.navigate(['/home']);


}
}