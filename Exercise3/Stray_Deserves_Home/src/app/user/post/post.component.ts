import { Component } from '@angular/core';
import { post } from 'src/app/models/type';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post:post[]=[];
  types:string[]=["Self","Adoption Center","All"]
  selected:string="All"
  constructor(private obj:PostService){
  }
  ngOnInit(): void {
    this.obj.getPosts().subscribe(
      {
        next: (data:post[])=>this.post=data,
        error: (error:any)=>this.post=[]
      }
    )
  }
}
