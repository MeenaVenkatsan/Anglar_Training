import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  httpOptions:any;
  constructor(private http:HttpClient) { 
      let token =sessionStorage.getItem("token")
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization":  "Bearer "+token
      })
   }
  }
  public getAdopt():Observable<any>{
  
    return this.http.get("http://localhost:4800/660/adoption",this.httpOptions);
  }
  public sendadoptionRequest(obj:any):Observable<object>{
    
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    }
    return this.http.post("http://localhost:4800/adoption_request",obj,this.httpOptions);
  }
  public getAdoptRequest():Observable<any>{
    return this.http.get("http://localhost:4800/660/adoption_request",this.httpOptions);
  }
  
  public deleteApproval(id:number):Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    }
    
    console.log("http://localhost:4800/adoption_request/"+id)
    let url="http://localhost:4800/adoption_request/"+id
    let status=this.http.delete(url);
    console.log(status)
    return this.http.delete(url);
    // 
  }
  public submitApproval(obj:any):Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    }
    return this.http.post("http://localhost:4800/adoption_request",obj,this.httpOptions);
  }
}
