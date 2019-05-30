import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Config} from '../utils/Config';
import {Users} from '../model/users';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = Config.BASE_URL + '/user';
  constructor(private httpClient: HttpClient) { }

  public updateProfil(user: Users): Observable<any> {
    return this.httpClient.put(this.url + '/profil', user);
  }
  public changePassword(pwd: any): Observable<any> {
    return this.httpClient.put(this.url + '/pwd', pwd);
  }

  public getUser(): Observable<any> {
    const jwtHelper = new JwtHelperService();
    const decoded =   jwtHelper.decodeToken(localStorage.getItem('token'));
    const email = decoded.sub;
    return this.httpClient.get<any>('http://localhost:9080/user/' + email);

  }
}
