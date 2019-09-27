import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from '../pages/SignIn/sign-in.component';
import { SignUpComponent } from '../pages/SignUp/sign-up.component';
import { HomeComponent } from '../pages/Home/home.component';
import { MyPostsComponent } from '../pages/MyPosts/my-posts.component';
import { FriendsPostsComponent } from '../pages/FriendsPosts/friends-posts.component';
import { AddPostComponent } from '../pages/AddPost/add-post.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SideBarComponent } from '../components/SideBar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {ModalComponent} from '../components/Modal/modal.component';
import {PostComponent} from "../components/Post/post.component";
import {UserComponent} from "../components/User/user.component";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MyPostsComponent,
    FriendsPostsComponent,
    AddPostComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    SideBarComponent,
    ModalComponent,
    PostComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
