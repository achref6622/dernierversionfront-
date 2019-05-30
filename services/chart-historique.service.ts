import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chart} from '../model/chart';
import {Action} from '../model/action';

@Injectable({
  providedIn: 'root'
})
export class ChartHistoriqueService {


  private url = Config.BASE_URL + '/chart';

  constructor(private  httpClient: HttpClient) { }

  public chartByDay(id): Observable<Chart[]> {

    return this.httpClient.get<Chart[]>(this.url + '/byDay/' + id );
  }
  public chartByWeek(id): Observable<Chart[]> {

    return this.httpClient.get<Chart[]>(this.url + '/byWeek/' + id );
  }
  public chartByMonth(id): Observable<Chart[]> {

    return this.httpClient.get<Chart[]>(this.url + '/byMonth/' + id );
  }
  public chartBySemestre(id): Observable<Chart[]> {

    return this.httpClient.get<Chart[]>(this.url + '/bySemestre/' + id );
  }
}
