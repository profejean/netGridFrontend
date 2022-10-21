import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = environment.apiCharacterURL;
  url_api = environment.apiURL;
  headers = environment.headers;
  constructor(private http: HttpClient) { }

  index(): Observable<any>{
    return this.http.get<any>(`${this.url}`);
  }

  show(id:any): Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
  }

  store(ref_api:any): Observable<any>{
    return this.http.post<any>(`${this.url_api}favorite_store`, ref_api, { 'headers': this.headers });
  }
}

