import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Config} from '../utils/Config';
import {Observable} from 'rxjs';
import {Portefeuille} from '../model/portefeuille';
import {posix} from 'path';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class PortfeuilleService {
  private url = Config.BASE_URL + '/portefeuille';

  constructor(private httpClient: HttpClient) { }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
  public updateportfeuille(portfeuille: Portefeuille): Observable<any> {
    return this.httpClient.put(this.url , portfeuille);
  }
  public getportfeuille( id: any): Observable<Portefeuille> {
    let params = new HttpParams();
    params = params.set('id', id) ;
    return this.httpClient.get<Portefeuille>(this.url + '/', {params});
  }
}
