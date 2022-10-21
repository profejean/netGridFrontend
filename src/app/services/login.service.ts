import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

import { environment } from '../../environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.apiURL;
  constructor(private http: HttpClient) { }

  login(data: Login): Observable<any>{

    return this.http.post<any>(this.url + 'login', data);
  }
}
