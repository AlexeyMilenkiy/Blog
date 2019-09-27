import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  setSubscription(userId: number, followerId: number): Observable<ResponseUser[]> {
    return this.http.post<ResponseUser[]>(`${environment.baseUrl}set-subscription`, {userId, followerId});
  }

  removeSubscription(subscriptionId: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}delete-subscription/${subscriptionId}`);
  }
}
