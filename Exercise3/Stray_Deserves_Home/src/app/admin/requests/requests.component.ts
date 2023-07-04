import { Component , OnInit} from '@angular/core';
import { VERSION } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { request } from 'src/app/models/type';
import { AdoptionService } from 'src/app/service/adoption.service';
import { LoginService } from 'src/app/service/login.service';
import { AdoptionComponent } from 'src/app/user/adoption/adoption.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit{
  adoptRequests:request[]=[];
  headimg=["Requester Name","Email","Adoption Status","Pet Image","Action"]
constructor(private obj:AdoptionService,private route:Router,private obj2:LoginService){
  
}
ngOnInit(): void {
  this.obj.getAdoptRequest().subscribe(
    { next:   (data:request[])=>{ 
        this.adoptRequests=data
        console.log(this.adoptRequests)
      },
    error:()=>{
      this.adoptRequests=[]
    }
  })
}
Approval(email:string,userName:string,id:number,petImage:string,adoptPetId:number):void{
  let adoptedStatus="Approved"
  let obj={email: email,userName:userName,petImage:petImage,adoptedStatus:adoptedStatus,adoptPetId:adoptPetId}
  this.obj.deleteApproval(id).subscribe(
    { next:   (data:request[])=>{ 
      this.obj.submitApproval(obj).subscribe(
        { next:   (data:request[])=>{ 
          location.reload();
          },
        error:()=>{
          
        }
      })
      },
    error:()=>{
      
    }
  })
}
decline(email:string,userName:string,id:number,petImage:string,adoptPetId:number):void{
  let adoptedStatus="Declined"
  let obj={email: email,userName:userName,petImage:petImage,adoptedStatus:adoptedStatus,adoptPetId:adoptPetId}
  this.obj.deleteApproval(id).subscribe(
    { next:   (data:request[])=>{ 
      this.obj.submitApproval(obj).subscribe(
        { next:   (data:request[])=>{ 
          location.reload();
          },
        error:()=>{
          
        }
      })
      },
    error:()=>{
      
    }
  })
}
}