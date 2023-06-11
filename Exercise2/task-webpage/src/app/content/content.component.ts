import { Component } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
import { HeadService } from '../service/head.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  navigation:string[]=[]
detail1:any={title:"Content",value:"Asian Paints manufactures wide range of paints for Decorative and Industrial use. In Decorative paints, Asian Paints is present in all the four segments v.i.z Interior Wall Finishes, Exterior Wall Finishes, Enamels and Wood Finishes. It also offers Water proofing, wall coverings and adhesives in its product portfolio."}
detail2:any={title:"Subheader",value:"In the Industrial coatings space, Asian Paints operates through two 50:50 joint ventures with PPG Inc, USA.,  one of the largest automotive coatings manufacturer in the world.  The first Joint Venture  ‘PPG Asian Paints Pvt Ltd’  services the increasing requirements of the Indian automotive coatings market. The second JV  ‘Asian Paints PPG Pvt Ltd’ services the protective, industrial powder, industrial containers and light industrial coatings markets in India."}
constructor(private obj1:HeadService)
{
}
ngOnInit():void{
 this.navigation=this.obj1.getNavigatorValue()
}
}
