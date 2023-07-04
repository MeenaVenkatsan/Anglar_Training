import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stray_Deserves_Home';
  constructor(private log:LoginService,private router:Router){
          
  }

  ngAfterViewInit(){
    if(!this.log.getStatus()){
                
      this.router.navigate(['login'])
   }
   else{
     if(this.log.usertype=="admin")
       this.router.navigate(['admin/home']);
     else
       this.router.navigate(['user/home']);
   }
  }
}
