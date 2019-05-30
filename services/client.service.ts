import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Config} from '../utils/Config';
import {Observable} from 'rxjs';
import {Client} from '../model/client';
import {Gestionnaire} from '../model/gestionnaire';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = Config.BASE_URL + '/client';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url);
  }

  public save(client: Client): Observable<any> {
    return this.httpClient.post(Config.BASE_URL + '/register', client);
  }

  public update(client: Client): Observable<any> {
    return this.httpClient.put(this.url, client);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
  public findid(id: any): Observable<Client> {
    let params = new HttpParams();
    params = params.set('id', id) ;
    return this.httpClient.get<Client>(this.url + '/getclient', {params});
  }

  public getclientNotAffected(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url  + '/sansgest ' );
  }
  public affecte(clients: Client[]): Observable<any> {
    return this.httpClient.post(this.url, clients);
  }

  public saveportfeuille(client: Client): Observable<any> {
    return this.httpClient.put(Config.BASE_URL + '/register/addprf', client);
  }

 public deletclient(clients: Client[]): Observable<any> {
    return this.httpClient.put(this.url + '/delet', clients);
  }
}
