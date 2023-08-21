import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from './Utility/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  id:any;
  name:String;
  id2:any;

  public gettaskbyid(id:any){
    return this.http.get<Tasks>("http://localhost:8077/gettaskbyid/"+id);
  }

  public getuserbyid(id){
    return this.http.get("http://localhost:8077/getuserbyid/"+id);
  }

  public addtask(data:any){
    return this.http.post("http://localhost:8077/addtask",data);
  }

  public gettaskbyisstatus(id:any,tstatus:any){
    return this.http.get("http://localhost:8077/gettaskbyidstatus/"+id+"/"+ tstatus);

  }
  public deletetaskbyid(id:any){
    return this.http.delete("http://localhost:8077/deletetaskbyid/"+id);

  }
  public gettasksbyids(id:any){
    return this.http.get<Tasks>("http://localhost:8077/getTaskbyId/"+id);
  }

  public gettaskbyidanssize(id:any,pageno:any){
    return this.http.get<Tasks>("http://localhost:8077/gettaskbyidandsize/"+this.id+"?pageno="+pageno+"&pagesize=4");
  }
 
}
