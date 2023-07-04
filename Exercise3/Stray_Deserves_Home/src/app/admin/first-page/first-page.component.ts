import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  constructor(private log:LoginService,private router:Router,private route:ActivatedRoute){

  }
  ngOnInit(): void {
  }
  navigate(url:string){
    
    if(url=="")
    window.location.reload()
    else
    this.router.navigate([url], {relativeTo:this.route});
  }
}
