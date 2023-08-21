import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Tasks } from '../Utility/Tasks';
import { __values } from 'tslib';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private taskservice:TasksService){
    console.log(taskservice.id)
  }

  task:Tasks=new Tasks();

  data1:any;
  tname:any;
  select(data:any){

    this.data1=data.target.value;
    console.log(this.data1);

  }
 
  errors:any={};
  data3:any;
  addtask()
  {

    let data={
      tname: this.task.tname,
      tdescription: this.task.tdescription,
      tstatus: this.data1,
      date: this.task.date,
      user:{
        uid:this.taskservice.id,
      }
    }
    this.taskservice.addtask(data).subscribe(data=>{
      alert("task added successfully")
      data="";
    },
    err => {
      this.errors=err.error;

      for (const [key, value] of Object.entries(this.errors)) { 

        alert(value); 
  }
  });
  }
  
}





