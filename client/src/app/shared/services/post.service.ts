import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Post} from "../../../interface/post";

@Injectable ({providedIn: "root"})

export class PostService {

  constructor(
    private http: HttpClient,
  ) {}

  getDate() {
    let date  = new Date();
    let time = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()
      .replace(/\..+/, '').split('T')[1];
    let day: number | string = date.getDate();
    let month: number | string= date.getMonth() + 1;
    let year: number | string = date.getFullYear();

    if (day < 10) day = '0' + day;

    if (month < 10) month = '0' + month;

    if (year < 10) year = '0' + year;

    return `${day}-${month}-${year} ${time}`;
  }

  addPost(post: Post): Observable<any> {
    return this.http.post(`${environment.baseUrl}posts`, {...post})
  }
}
