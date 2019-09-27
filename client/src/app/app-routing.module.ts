import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPage } from "../pages/SignIn/sign-in.page";
import { SignUpPage} from "../pages/SignUp/sign-up.page";
import { HomePage } from "../pages/Home/home.page";
import { MyPostsPage } from "../pages/MyPosts/my-posts.page";
import { FriendsPostsPage } from "../pages/FriendsPosts/friends-posts.page";
import { AddPostPage } from "../pages/AddPost/add-post.page";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./shared/main-layout/main-layout.component";
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: SignInPage},
      { path: 'sign-up', component: SignUpPage}
    ]
  },
  {
    path: '', component: MainLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomePage },
      { path: 'my-posts', component: MyPostsPage},
      { path: 'friends-posts', component: FriendsPostsPage},
      { path: 'add-post', component: AddPostPage}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
