import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './Utility/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  id:any;
  email:String;
  
 // login:any;

  public save(data:any){
    return this.http.post("http://localhost:8077/adduser",data);
  }

  public getuser(){
    return this.http.get("http://localhost:8077/getuser");
  }

  public getuserbyid(id:any){
    return this.http.get<User>("http://localhost:8077/getuserbyid/"+id);

  }
  public login(data:any){
    return this.http.post("http://localhost:8077/login",data);
  }
  public userdata(){
    return this.http.get("http://localhost:8077/data/"+this.email)
  }

 
}
