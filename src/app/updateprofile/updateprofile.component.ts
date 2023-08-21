import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../Utility/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {
  constructor(private service:UserServiceService,private router:Router){
    this.getuserbyid();
   
  }

  user:User=new User();
  
  getuserbyid(){ 
    
    return this.service.getuserbyid(this.service.id).subscribe(data=>
      {
        this.user=data;
      })

  }

 
  select(data:any){
    this.user.gender=data.target.value;
  }
  error:any;

  submit(){
    let temp= {
      uid:this.user.uid,
      name: this.user.name,
      phoneno: this.user.phoneno,
      uemail: this.user.uemail,
      upassword: this.user.upassword,
      gender: this.user.gender,
      birthdate:this.user.birthdate
  }

  this.service.save(temp).subscribe(data=>
    {
      alert("update successfully ");
      this.router.navigate(["/tasks"]);
    },
    err=>
    {
     this.error=err.error;

     for (const [key, value] of Object.entries(this.error))
     {
       alert(value); 
     }
    });
 
  
  


   


  }

}
