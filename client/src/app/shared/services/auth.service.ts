import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../interface/user";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";
import {AuthResponse} from "../../../interface/auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    const expiresDate = new Date(localStorage.getItem('expiresIn'));
    if(new Date() > expiresDate){
      this.logout()
      return null
    }
    return localStorage.getItem('authToken')
  }

  register(user: User): Observable<any> {
    return this.http.post(`${environment.baseUrl}register`, user)
  }

  login(user: User): Observable<any> {
    return this.http.post(`${environment.baseUrl}login`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: AuthResponse | null) {
    if(response){
      const expiresDate = new Date(response[2].expiresIn * 1000);
      localStorage.setItem('authToken', response[2].token);
      localStorage.setItem('expiresIn', expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
