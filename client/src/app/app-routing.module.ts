import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from "../pages/SignIn/sign-in.component";
import { SignUpComponent} from "../pages/SignUp/sign-up.component";
import { HomeComponent } from "../pages/Home/home.component";
import { MyPostsComponent } from "../pages/MyPosts/my-posts.component";
import { FriendsPostsComponent } from "../pages/FriendsPosts/friends-posts.component";
import { AddPostComponent } from "../pages/AddPost/add-post.component";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./shared/main-layout/main-layout.component";
import { AuthGuard } from "./shared/services/auth.guard";
import {NotFoundComponent} from "../pages/NotFound/not-found.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: SignInComponent},
      { path: 'sign-up', component: SignUpComponent}
    ]
  },
  {
    path: '', component: MainLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'my-posts', component: MyPostsComponent},
      { path: 'friends-posts', component: FriendsPostsComponent},
      { path: 'add-post', component: AddPostComponent}
    ]
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
