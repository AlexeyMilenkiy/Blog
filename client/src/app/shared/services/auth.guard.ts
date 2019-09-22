import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate{
  constructor(
    private auth: AuthService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |  Promise<boolean>  | boolean{
    const isToken = this.auth.isAuthenticated();

    switch (state.url) {
      case '/' :
        if(isToken) {
          this.router.navigate(['/home']);
        } else {
          return true
        }
        break;
      case '/sign-up' :
        if(isToken) {
          this.router.navigate(['/home']);
        } else {
          return true
        }
        break;
      default:
        if(!isToken) {
          this.router.navigate(['/']);
        } else {
          return true
        }
    }
  }
}
