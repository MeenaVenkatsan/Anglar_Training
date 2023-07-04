import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email:any="";
  password:string="";
  error:string="";
  status:boolean=false;
  logform:boolean=true;
  rusername:string="";
  rpassword:string="";
  rphone:any="";
  remail:string="";
  rerror?:string;
  rstatus:boolean=false
  constructor(private log:LoginService,private route:Router) { }
  goRegister():void{
    this.logform=this.logform?false:true;
    console.log(this.logform)
    // this.route.navigate(['register']);
  }
  ngOnInit(): void {
    // PubSub.subscribe('log-error',(e,data)=>
    //    this.error="Invalid login credentials"
    // )
  }
  login():void{
    this.error="";
   if(this.email.length==0 || this.password.length==0)
   this.error="Fill all the fields";
   else{
     this.status=true;
     this.log.login(this.email,this.password).subscribe(
        { next:   (response:any)=>{
            sessionStorage.setItem("username",response.user.username);
            sessionStorage.setItem("type",response.user.role);
            sessionStorage.setItem("token",response.accessToken);
            sessionStorage.setItem("email",response.user.email);
            console.log(sessionStorage.getItem("token"))
            this.log.email=response.user.email;
            this.log.usertype=response.user.type;
            this.log.token=response.accessToken;
            this.status=true;
            console.log(response.user.role)
            if(response.user.role=="admin")
                this.route.navigate(['admin/home']);
            else
                this.route.navigate(['user/home']);
          },

          error:()=>{
            this.error="Invalid Credentials";
            this.status=false;
          }}
     )
         }

}
register():void{
  console.log("here")
  this.rerror="";
  let emailregex:RegExp=/^[a-z][a-z0-9_\.]+@[a-z]{2,5}\.[a-z]{3,5}$/
  if(this.rusername.length==0 || this.rpassword.length==0 || this.remail.length==0 ||this.rphone.length==0 )
  this.rerror="Fill all the fields";
  else if(this.rusername.length<4)
  this.rerror="Username should be atleast 4 charectars long"
  else if(this.rpassword.length<6)
  this.rerror="password should be atleast 6 charectars long"
  else if(!emailregex.test(this.remail))
  this.rerror="not in email format" 
  else{
      this.rstatus=true;
               this.rstatus=true;
               console.log(this.rstatus)
               let obj={username:this.rusername,password:this.rpassword,role:"user",email: this.remail,phone:this.rphone}
               this.log.register(obj).subscribe({
                 next: (result:any)=>{
                  console.log(obj)
                      if(result.success == false)
                        alert("User already exists")
                      else{
                      alert("User successfully registered");
                      this.logform=true;
                      this.rstatus=false;
                      }
                  },
                  error: ()=>{
                      alert("There is problem , Please try again or later")
                      this.rstatus=false;
                  }}
               )
           }
       
  }


}

