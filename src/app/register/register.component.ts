import { Component } from '@angular/core';
import { User } from '../Utility/User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname:string;
  blank=0;

  constructor(private service:UserServiceService){
   
  }

  user:User=new User();
  data1:any;
  errors:any;
  d:any;
  select(data:any){
    this.data1=data.target.value;
  }

  a=0;
  submit()
  {
    this.a=0;
    if(this.user.uemail==""){
    alert("please enter email")
    this.a=1;
    }
    else if(this.user.birthdate==""){
      alert("please select your birthdate")
      this.a=2
    }


       if(this.a==0){
      let temp= {
      
        
      name: this.user.name,
        phoneno: this.user.phoneno,
        uemail: this.user.uemail,
        upassword: this.user.upassword,
        gender: this.data1,
        birthdate:this.user.birthdate
    }
  
  
    this.service.save(temp).subscribe(data=>{
    this.d=data;
    if(this.d==true)
    {
    alert("registration successful");

    this.user=new User();
    }
    else{
      alert("user alredy exits") 
    }


    },

    err=>{
   
      this.errors=err.error;
      
      for (const [key, value] of Object.entries(this.errors))
      {
        alert(value);    
    } } );  
  }
 }}

 

  
  
  

    


  
 





