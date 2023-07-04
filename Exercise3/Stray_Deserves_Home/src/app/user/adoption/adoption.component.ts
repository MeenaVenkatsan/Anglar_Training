import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { adopt } from 'src/app/models/type';
import { AdoptionService } from 'src/app/service/adoption.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
  // @Input() adoption:any;
  adoptions:adopt[]=[]
  arrayAdoptions:any=[];
  customIndex:number=-1;
  email:any=sessionStorage.getItem("email");
  username:any=sessionStorage.getItem("username");
  constructor(private obj:AdoptionService,public router:Router,public route:ActivatedRoute) { }
  ngOnInit():void{
    this.obj.getAdopt().subscribe(
      {
      next:(data:adopt[])=>{this.adoptions=data
        // let customIndex:any;
        this.adoptions.forEach((adoption, index) => {
          if(adoption.image=="yes")
          {
            this.customIndex=this.customIndex+1
            console.log(this.customIndex)
          if(this.customIndex % 4 == 0) {
              let row:adopt[] = [];
              row.push(adoption);
              this.arrayAdoptions.push(row);
          } else {
              this.arrayAdoptions[this.arrayAdoptions.length - 1].push(adoption);
          }
          
          // console.log(this.arrayAdoptions)
        }
        }
    )},
      error:(error:any)=>this.adoptions=[] 
      }
    )
  }
  adoptionRequest(adoptId:number,petImage:string):void{
    let obj={email:this.email,userName:this.username,adoptPetId:adoptId,adoptedStatus:"pending",petImage:petImage}
    this.obj.sendadoptionRequest(obj).subscribe(
    { next:   (response:any)=>{
      alert("Your request has been submitted. Please wait for approval")
    },
    error:()=>{
      alert("Facing some trouble raising request. Contact administrator")
    }}
)
   }
}
