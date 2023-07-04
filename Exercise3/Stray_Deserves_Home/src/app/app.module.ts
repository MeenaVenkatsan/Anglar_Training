
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './user/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AdoptionComponent } from './user/adoption/adoption.component';
import { Injector, NgModule } from '@angular/core'; 
import { LoginService } from './service/login.service';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequestsComponent } from './admin/requests/requests.component';
import { FirstPageComponent } from './admin/first-page/first-page.component';
import { PostComponent } from './user/post/post.component';
import { PostBoxComponent } from './user/post/post-box/post-box.component';
import { PostFilterPipe } from './pipes/post-filter.pipe';
import { PostFormComponent } from './user/post/post-form/post-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    AdoptionComponent,
    RequestsComponent,
    FirstPageComponent,
    PostComponent,
    PostBoxComponent,
    PostFilterPipe,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    FirstPageComponent
  ],
  providers: [
    // AuthInterceptorService,{
    //   provide: HTTP_INTERCEPTORS,
    //   useFactory: function(injector: Injector) {
    //     return new AuthInterceptorService(injector);
    //   },
    //   multi: true,
    //   deps: [Router]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
