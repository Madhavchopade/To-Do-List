import { Component } from '@angular/core';
import { Tasks } from '../Utility/Tasks';
import { TasksService } from '../tasks.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent {

  constructor(private taskservice:TasksService,private router :Router){
   this.gettaskbyid();
  }
select(data:any) {

  this.task.tstatus=data.target.value;

}

  a=0;
  task:any;

  gettaskbyid(){
    this.taskservice.gettasksbyids(this.taskservice.id2).subscribe(data=>
      {
        this.task=data;
      })
  }
  
  errors:any;
  update(){
 

    let data1={
      id:this.task.id,
      tname: this.task.tname,
      tdescription: this.task.tdescription,
      tstatus: this.task.tstatus,
      date: this.task.date,
      user:{
        uid:this.taskservice.id,
      }
  
    }
  
   
    this.taskservice.addtask(data1).subscribe(data=>{
      alert("update task");
      this.router.navigate(["/tasks"]);
    },
    err=>
    {
     this.errors =err.error;


     for(const[key ,value] of Object.entries(this.errors))
     {
      alert(value);
     }
    });
 
   

  }

}
