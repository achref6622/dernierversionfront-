import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ordre} from '../model/ordre';





@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private url = Config.BASE_URL + '/action';
  constructor(private  httpClient: HttpClient) {
  }

  /*public getAll(): Observable<any[]> {

  }*/

  public get(): Observable<any> {
    return this.httpClient.get<any>(this.url);

  }
}
