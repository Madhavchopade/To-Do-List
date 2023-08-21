import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    AddTaskComponent,
    UpdatetaskComponent,
    UpdateprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
