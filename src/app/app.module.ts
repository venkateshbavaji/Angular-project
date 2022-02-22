import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { coursesservice } from './courses.service';
import { coursescomponent } from './coursess/coursess.component';

import { LoginComponent } from './login/login.component';

import { surveyComponent } from './survey/survey.component';
import { TestService } from './test.service';
import { CourseDetailComponent } from './coursess/course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildOutComponent } from './child-out/child-out.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SummaryPipe } from './summary.pipe';
import { FeedbackComponent } from './feedback/feedback.component';

import { ReactiveFormsModule } from '@angular/forms';


import { RegistrationComponent } from './registration/registration.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http'
import {commentserrvice} from './comment/comment.service'
import {commentcomponent} from './comment/comment.component';
import { postservice} from './post/post.service';
import { PhotoComponent } from './photo/photo.component';
import {photoserrvice} from './photo/photo.service';
import { TodoComponent } from './todo/todo.component'
import { commonservice } from './common.service';
import { AlbumComponent } from './album/album.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { AuthGuard } from './auth-guard.service';
import { AdminAuthGuard } from './admin-auth-guardservice';
import { AlbumdetailComponent } from './albumdetail/albumdetail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminguardGuard } from './adminguard.guard';
import { DepartmentModule } from './department/department.module';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component'










@NgModule({
 
  declarations: [
 AppComponent,
HomeComponent,
     LoginComponent,
     surveyComponent,
     coursescomponent,
     CourseDetailComponent,
     ParentComponent,
     ChildComponent,
     ChildOutComponent,
     InputFormatDirective,
     ContactFormComponent,
    SummaryPipe,
    FeedbackComponent,
    RegistrationComponent,
     ReactiveformComponent,
     PostComponent,
     commentcomponent,
     PhotoComponent,
     TodoComponent,
     AlbumComponent,
     UserComponent,
     NotfoundComponent,
     PostdetailsComponent,
     CommentDetailComponent,
     AlbumdetailComponent,
     AdminComponent,
     UnauthorizedComponent,
     


  
     
    
    
  
    

  

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
     NgxPaginationModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot({positionClass :'toast-bottom-right'}),
    
    
  RouterModule.forRoot([ 
    { path:'', component:HomeComponent},
    { path:'admin', component:AdminComponent,canActivate:[AdminguardGuard]},
    { path:'home', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'registration', component:RegistrationComponent},
    { path:'parent', component:ParentComponent,canActivate:[AuthGuard]},
    { path:'post/:id', component:PostdetailsComponent},
    { path:'post', component:PostComponent,canActivate:[AuthGuard]},
    { path:'comment/:id', component:CommentDetailComponent},
    { path:'comment', component:commentcomponent,canActivate:[AuthGuard]},
    { path:'album/:id', component:AlbumdetailComponent},
    { path:'album', component:AlbumComponent,canActivate:[AuthGuard]},
    { path:'photo', component:PhotoComponent,canActivate:[AuthGuard] },
    { path:'todo', component:TodoComponent,canActivate:[AuthGuard]},
    { path:'user', component:UserComponent,canActivate:[AuthGuard,AdminAuthGuard]},
    { path:'department',loadChildren:()=>DepartmentModule,canActivate:[AuthGuard]},
    {path:'un-authorized',component:UnauthorizedComponent},
    
    { path:'**', component:NotfoundComponent},
  ]),
    
  ],
  providers: [coursesservice,TestService,postservice, photoserrvice,commentserrvice, commonservice, AuthGuard, AdminAuthGuard,AdminguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
