import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from "../components/SignIn/sign-in.component";
import { SignUpComponent} from "../components/SignUp/sign-up.component";

const routes: Routes = [
  {
    path:'sign-in', component: SignInComponent
  },
 {
    path:'sign-up', component: SignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
