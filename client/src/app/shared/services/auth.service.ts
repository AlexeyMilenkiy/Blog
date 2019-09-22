import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../../../interface/user";
import {Observable, Subject, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {AuthResponse} from "../../../interface/auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public error$: Subject<string> = new Subject<string>()

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
      .pipe(
        catchError(this.checkError.bind(this))
      )
  }

  login(user: User): Observable<any> {
    return this.http.post(`${environment.baseUrl}login`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.checkError.bind(this))
      )
  }

  checkError(error: HttpErrorResponse) {
    switch(error.error){
      case 'invalid_email':
        this.error$.next('Such an email does not exist');
        break;
      case 'invalid_password':
        this.error$.next('Wrong password');
        break;
      case 'validation_error':
        this.error$.next('Such email address is registered');
    }
    return throwError(error)
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
