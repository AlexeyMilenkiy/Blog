import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from '../components/SignIn/sign-in.component';
import { SignUpComponent } from '../components/SignUp/sign-up.component';
import { HomeComponent } from '../components/Home/home.component';
import { MyPostsComponent } from "../components/MyPosts/my-posts.component";
import { FriendsPostsComponent } from "../components/FriendsPosts/friends-posts.component";
import { AddPostComponent } from "../components/AddPost/add-posts.component";
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SideBarComponent } from '../components/SideBar/side-bar.component';
import { HttpClientModule } from "@angular/common/http";

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
    SideBarComponent
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
