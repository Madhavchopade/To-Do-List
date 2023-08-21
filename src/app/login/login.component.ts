import { Component } from '@angular/core';
import { User } from '../Utility/User';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 // services:UserServiceService=new UserServiceService();

constructor(private service:UserServiceService,private router:Router,private taskservice:TasksService){
   this.getuser();
}
  user:User=new User();
  userdetails;any;
 
  data2:any;
  getuser(){
    this.service.getuser().subscribe(data=>{
      this.data2=data;
    })
  }

  // userdata(){
  //   this.service.userdata().subscribe(data=>{
  //     this.userdetails=data;


  //     this.taskservice.id=this.userdetails.uid;
      
      
  //     console.log(this.userdetails);

  //   })
  // }

  cnt=0;
  a=0;
  loginmess:any;
  login(){
    this.a=0;
    
    if(this.user.uemail=="")
     this.a=1;
     else if(this.user.upassword=="")
     this.a=2;
     if(this.a==0){

    for(let i=0;i<this.data2.length;i++)
    {
      let a=this.data2[i];
      if(a.uemail===this.user.uemail && a.upassword===this.user.upassword){
        this.router.navigate(["tasks"]);
        this.taskservice.id=a.uid;
        console.log(a.uid)
        this.cnt=0;
        break;

      }
      else{
        this.cnt=1;
      }

    }
  }

    if(this.cnt!=0)
    alert(" Incorrect username/password");



  // let temp={
    
  //     "uemail":this.user.uemail,
  //     "upassword":this.user.upassword
        
  
  // }

  // this.service.login(temp).subscribe(
  //   data=>{
  //     this.service.email=this.user.uemail; 
  //   console.log(this.service.email)
  //   this.userdata();
  //   this.router.navigate(["tasks"]);

  //   }
  // );

    
  }

// async:activeuser(){

// }


}
