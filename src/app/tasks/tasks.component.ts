import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Tasks } from '../Utility/Tasks';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {


  constructor(private taskservice:TasksService,private service:UserServiceService){
    this.gettaskbyid();
    this.getuserbyid();
    
     this.alltask();
  }
  updateprofile() {

  }

  task:Tasks=new Tasks();
  data1:any;
  pageno=0;
  page(i:any){

    this.pageno=i;
    console.log(this.pageno)

    this.gettaskbyid();
  }

  gettaskbyid(){
    this.taskservice.gettaskbyidanssize(this.taskservice.id,this.pageno).subscribe(data=>{
      this.data1=data;
      console.log(this.data1);
    })
    this.service.id=this.taskservice.id;
  }
  userdetails:any;
  
  getuserbyid(){
    this.taskservice.getuserbyid(this.taskservice.id).subscribe(data=>{
      this.userdetails=data;
    })
  }
  
  
alltask(){
 this.gettaskbyid();

}
starttask(){
  this.taskservice.gettaskbyisstatus(this.taskservice.id,"Start").subscribe(data=>{
    this.data1=data;
  })

}
runningtask(){

  this.taskservice.gettaskbyisstatus(this.taskservice.id,"Running").subscribe(data=>{
    this.data1=data;
  })

}
pending(){
  this.taskservice.gettaskbyisstatus(this.taskservice.id,"Pending").subscribe(data=>{
    this.data1=data;
  })

}

completedtask(){
  this.taskservice.gettaskbyisstatus(this.taskservice.id,"Completed").subscribe(data=>{
    this.data1=data;
  })

}

delete(id:any){

  this.taskservice.deletetaskbyid(id).subscribe(data=>
    {
      this.gettaskbyid();
    });

}
update(id:any){

  this.taskservice.id2=id;
  console.log(id);

}

}
