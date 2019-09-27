import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPage } from '../pages/SignIn/sign-in.page';
import { SignUpPage } from '../pages/SignUp/sign-up.page';
import { HomePage } from '../pages/Home/home.page';
import { MyPostsPage } from '../pages/MyPosts/my-posts.page';
import { FriendsPostsPage } from '../pages/FriendsPosts/friends-posts.page';
import { AddPostPage } from '../pages/AddPost/add-post.page';
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
    SignInPage,
    SignUpPage,
    HomePage,
    MyPostsPage,
    FriendsPostsPage,
    AddPostPage,
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
