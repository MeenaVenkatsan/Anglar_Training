import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  userName:string="";
  image:string="";
  adoption_type:string=""
  types:string[]=["Self","Adoption Center"]
  content:string=""
  errors:string=""
  post():void{
    alert("Work in Progress")
  }
}
