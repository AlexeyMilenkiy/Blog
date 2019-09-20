import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../interface/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return ''
  }

  register(user: User) {
    this.http.post('', user)
  }

  login(user: User): Observable<any> {
    return this.http.post('', user)
  }

  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken() {

  }
}
