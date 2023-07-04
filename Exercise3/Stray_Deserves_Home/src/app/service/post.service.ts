import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
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
  getPosts():Observable<any>{
    return this.http.get("http://localhost:4800/660/posts",this.httpOptions);
  }
}
