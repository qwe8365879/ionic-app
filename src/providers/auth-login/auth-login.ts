import { Env } from './../../env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthLoginProvider {

  constructor(public http: HttpClient) {
  }

  login(username: string, password: string){
    let headers = new HttpHeaders;
    headers.set('Content-Type', 'application/json');
    return this.http.post(Env.site_url+Env.auth_login, {username: username, password: password}, {headers: headers});
  }

}
