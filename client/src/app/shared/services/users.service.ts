import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class UsersService {

  constructor(
    private http: HttpClient,
  ) {}

  getUsers(name: string, id: number): Observable<any> {
    return this.http.post(`${environment.baseUrl}get-users`, {name, id})
  }

  setSubscription(userId: number, followerId: number): Observable<any> {
    return this.http.post(`${environment.baseUrl}set-subscription`, {userId, followerId})
  }

  removeSubscription(subscriptionId: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}remove-subscription/${subscriptionId}`)
  }
}
