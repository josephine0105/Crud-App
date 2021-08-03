import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  create(user){
    return this._http.post("http://localhost:3000/users",user)
  }
  getalluser(){
    return this._http.get("http://localhost:3000/users")
  }
  update(user){
    return this._http.put("http://localhost:3000/users/" +user.id, user )
  }
  delete(user){ 
    return this._http.delete("http://localhost:3000/users/" +user.id);
  }
}
