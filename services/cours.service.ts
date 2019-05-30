import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cours} from '../model/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private url = Config.BASE_URL + '/cours';
  constructor(private  httpClient: HttpClient) {
  }
  public getAll(): Observable<Cours[]> {
    return this.httpClient.get<Cours[]>(this.url);

}
  public findHistory(id: any, date1: any, date2: any): Observable<Cours[]> {
    let params = new HttpParams();
    params = params.set('id', id).set('date1', date1).set('date2', date2);
    return this.httpClient.get<Cours[]>(this.url + '/historique', {params});
  }
}
