import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = environment.apiURL;
  constructor(private http: HttpClient) { }

  register(data: Register): Observable<any>{

    return this.http.post<any>(this.url + 'register', data);
  }
}
