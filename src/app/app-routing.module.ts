import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from "../components/SignIn/sign-in.component";
import { SignUpComponent} from "../components/SignUp/sign-up.component";
import { HomeComponent } from "../components/Home/home.component";
import { MyPostsComponent } from "../components/MyPosts/my-posts.component";
import {FriendsPostsComponent} from "../components/FriendsPosts/friends-posts.component";
import {AddPostComponent} from "../components/AddPost/add-posts.component";
import {AuthLayoutComponent} from "./shared/auth-layout/auth-layout.component";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent}
    ]
  },
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'my-posts', component: MyPostsComponent },
      { path: 'friends-posts', component: FriendsPostsComponent },
      { path: 'add-post', component: AddPostComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
