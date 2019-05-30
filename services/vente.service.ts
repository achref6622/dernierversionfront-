import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Vente} from '../model/vente';
import {Action} from '../model/action';


@Injectable({
  providedIn: 'root'
})
export class VenteService {
  private url = Config.BASE_URL + '/vente';
  constructor(private  httpClient: HttpClient) {
  }


  public save(vente: Vente ): Observable<any> {
    return this.httpClient.post(this.url  , vente);
  }

  public getAll(): Observable<any> {
    return this.httpClient.get<any>(this.url);

  }

  public getmyvente(id: any ): Observable <any> {
    let params = new HttpParams();
    params = params.set('id', id) ;
    return this.httpClient.get<any>(this.url + '/myvente' , {params});

  }

}
