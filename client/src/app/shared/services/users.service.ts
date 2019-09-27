import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ResponseUser} from '../../../interface/response-user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(
    private http: HttpClient,
  ) {}

  getUsers(name: string, id: number): Observable<ResponseUser[]> {
    return this.http.post<ResponseUser[]>(`${environment.baseUrl}get-users`, {name, id});
  }

  setSubscription(userId: number, followingId: number): Observable<ResponseUser[]> {
    return this.http.post<ResponseUser[]>(`${environment.baseUrl}change-subscription`, {userId, followingId});
  }

  removeSubscription(userId: number, followingId: number): Observable<any> {
    let headers = new HttpHeaders().set('user_id', `${userId}`);
    headers = headers.set('following_id', `${followingId}`);
    return this.http.delete(`${environment.baseUrl}change-subscription`, {headers});
  }
}
