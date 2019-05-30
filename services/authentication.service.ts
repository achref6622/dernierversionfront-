import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:9080/login';
  private jwtHelper = new JwtHelperService();
  constructor(private httpClient: HttpClient) { }

  public login(user: Users) {
    return this.httpClient.post(this.baseUrl, user, {observe: 'response'});
  }

  public storeToken(token: string) {
    localStorage.setItem('token', token);
  }
  public getRole(): string {
 const decoded =   this.jwtHelper.decodeToken(localStorage.getItem('token'));

 const role = decoded.roles[0].authority;
 return role;
  }

  public logout() {
    localStorage.removeItem('token');
    location.reload();
  }
}
