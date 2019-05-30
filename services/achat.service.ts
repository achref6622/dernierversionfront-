import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ordre} from '../model/ordre';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  private url = Config.BASE_URL + '/achat';
  constructor(private  httpClient: HttpClient) {
  }

  public save(achat): Observable<any> {
    return this.httpClient.post(this.url , achat);
  }
  public getAll(): Observable<any> {
    return this.httpClient.get<any>(this.url);

  }
  public getmycachat(id: any ): Observable <any> {
    let params = new HttpParams();
    params = params.set('id', id) ;
    return this.httpClient.get<any>(this.url + '/myachat' , {params});

}
}

