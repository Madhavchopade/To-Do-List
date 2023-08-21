import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
  { path:"" , component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"tasks",component:TasksComponent},
  {path:"addtask",component:AddTaskComponent},
  {path:"updatetask",component:UpdatetaskComponent},
  {path:"updateprofile",component:UpdateprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
