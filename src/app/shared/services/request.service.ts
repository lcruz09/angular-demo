import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operator/map';
import { environment } from './../../../environments/environment';

@Injectable()
export class RequestService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public get(apiUrl: string): Observable<any> {
    const url = `${environment.serverUrl}${apiUrl}`;
    return this.httpClient.get<any>(url);
  }

  public put(apiUrl: string, body: any): Observable<any> {
    const url = `${environment.serverUrl}${apiUrl}`;
    return this.httpClient.put(url, body);
  }
}
