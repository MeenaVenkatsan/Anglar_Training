import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions:any;
 username:String='';
 usertype:String='';
 token:any='';
 email:any='';
 status:boolean=false;
  constructor(private http:HttpClient) {
      let username=sessionStorage.getItem("username");
      let usertype=sessionStorage.getItem("usertype");
      let token=sessionStorage.getItem("token");
      let email=sessionStorage.getItem("email");
      console.log(token)
      if(username&&usertype){
        this.status=true;
        this.username=username;
        this.usertype=usertype;
        this.token=token;
        this.email=email;
      }
  }
  getStatus():boolean{
    return this.status;
  }
  login(email:any,password:any):Observable<object>{

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post("http://localhost:4800/login",
    {email:email,password:password},
    this.httpOptions);
  }
  register(obj:any):Observable<object>{
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
          })
      }
      return this.http.post("http://localhost:4800/register",obj,this.httpOptions);
  }
}
