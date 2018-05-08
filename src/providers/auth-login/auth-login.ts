import { Observable } from 'rxjs/Observable';
import { Env } from './../../env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../../class/user';

/*
  Generated class for the AuthLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthLoginProvider {

  constructor(public http: HttpClient) {
  }

  login(username: string, password: string): Observable<User>{
    let headers = new HttpHeaders;
    headers.set('Content-Type', 'application/json');
    return this.http.post(Env.site_url+Env.auth_login, {username: username, password: password}, {headers: headers}).map((rawJson: any)=>{
      return {
        id: rawJson.user.ID,
        userLogin: rawJson.user.user_login,
        userNickName: rawJson.user.user_nicename,
        userDisplayName: rawJson.user.display_name,
        userEmail: rawJson.user.user_email,
        token: rawJson.token
      } as User;
    });
  }

}
