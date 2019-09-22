import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from "../components/SignIn/sign-in.component";
import { SignUpComponent} from "../components/SignUp/sign-up.component";
import { HomeComponent } from "../components/Home/home.component";
import { MyPostsComponent } from "../components/MyPosts/my-posts.component";
import { FriendsPostsComponent } from "../components/FriendsPosts/friends-posts.component";
import { AddPostComponent } from "../components/AddPost/add-posts.component";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./shared/main-layout/main-layout.component";
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: SignInComponent, canActivate: [AuthGuard]},
      { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard]}
    ]
  },
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'my-posts', component: MyPostsComponent, canActivate: [AuthGuard] },
      { path: 'friends-posts', component: FriendsPostsComponent, canActivate: [AuthGuard] },
      { path: 'add-post', component: AddPostComponent, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
