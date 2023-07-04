import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes ,RouterModule, RouterOutlet} from '@angular/router';
import { AdoptionComponent } from './adoption/adoption.component';
import { ContextComponent } from './context/context.component';
import { PostComponent } from './post/post.component';
import { PostBoxComponent } from './post/post-box/post-box.component';
import { PostFormComponent } from './post/post-form/post-form.component';
const routes: Routes = [
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: ContextComponent
    },
    {
      path: "adoption",
      component: AdoptionComponent
    },
    {
      path: "post",
      component: PostComponent
    },
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
    ContextComponent,
  ]
})
export class UserModule { }
