import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule, RouterOutlet} from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { FirstPageComponent } from './first-page/first-page.component';
const routes: Routes = [
  {
  path:"home",
  component: FirstPageComponent,
  children: [
    {
      path: "",
      component: RequestsComponent
    },
     {
      path: "adoption",
      component: RequestsComponent
    }
    // {
    //   path: "adoption",
    //   component: AdoptionComponent
    // },
    // {
    //   path: "adoption",
    //   component: AdoptionComponent
    // }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AdminModule { }