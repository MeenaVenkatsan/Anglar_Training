import { Component, Input } from '@angular/core';
import { post } from 'src/app/models/type';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})
export class PostBoxComponent {
  @Input("posts") current:post={
    userId: "",
    username: "",
    adoption_type: "",
    image: "",
    content: ""
  }
}
