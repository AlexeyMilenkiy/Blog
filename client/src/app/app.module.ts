import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from '../components/SignIn/sign-in.component';
import { SignUpComponent } from '../components/SignUp/sign-up.component';
import { HomeComponent } from '../components/Home/home.component';
import { MyPostsComponent } from '../components/MyPosts/my-posts.component';
import { FriendsPostsComponent } from '../components/FriendsPosts/friends-posts.component';
import { AddPostComponent } from '../components/AddPost/add-post.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SideBarComponent } from '../components/SideBar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {ModalComponent} from '../components/Modal/modal.component';
import {PostComponent} from "../components/Post/post.component";

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
    PostComponent
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
