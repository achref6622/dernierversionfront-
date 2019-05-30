import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cours} from '../model/cours';
import {Ordre} from '../model/ordre';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class OrdreService {
  private url = Config.BASE_URL + '/Order';

  constructor(private  httpClient: HttpClient) { }

  public getAll(): Observable<Ordre[]> {
    return this.httpClient.get<Ordre[]>(this.url);

  }

  public gerordre(id: any): Observable<Ordre> {
    let params = new HttpParams();
    params = params.set('id', id) ;
    return this.httpClient.get<Ordre>(this.url + '/findbyid', {params});

}

  public update(ordre: Ordre): Observable<any> {
    return this.httpClient.put(this.url, ordre);
  }
  public annuler(ordre: Ordre): Observable<any> {
    return this.httpClient.put(this.url + '/annuler', ordre);
  }

}
