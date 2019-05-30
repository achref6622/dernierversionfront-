import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Gestionnaire} from '../model/gestionnaire';
import {Cours} from '../model/cours';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {
  private url = Config.BASE_URL + '/gestionnaire';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Gestionnaire[]> {
    return this.httpClient.get<Gestionnaire[]>(this.url);
  }

  public save(gestionnaire: Gestionnaire): Observable<any> {
    return this.httpClient.post(Config.BASE_URL + '/register/gestion', gestionnaire);
  }

  public update(client: Client): Observable<any> {
    return this.httpClient.put(this.url, client);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  public getByClient(client: Client , gestiona: Gestionnaire): Observable<Gestionnaire> {
    let params = new HttpParams();
    params = params.set('client', 'client').set('gestionaire', ' gesiona ') ;
    return this.httpClient.get<Gestionnaire>(this.url + '/addclient', {params}) ;
  }

  public getclient(id: any): Observable<Client[]> {
    let params = new HttpParams();
    params = params.set('id', id) ;
    return this.httpClient.get<Client[]>(this.url + '/mesclient', {params});
  }
}
