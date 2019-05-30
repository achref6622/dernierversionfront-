import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient} from '@angular/common/http';
import {Gestionnaire} from '../model/gestionnaire';
import {Observable} from 'rxjs';
import {Admin} from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = Config.BASE_URL + '/admin';

  constructor(private httpClient: HttpClient) { }
  public save(admin: Admin): Observable<any> {
    return this.httpClient.post(Config.BASE_URL + '/register/admin' , admin);
  }
}
