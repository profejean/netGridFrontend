import { UpdateUser } from './../models/updateUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  url = environment.apiURL;
  headers = environment.headers;
  constructor(private http: HttpClient) { }

  update(data: UpdateUser,id:any): Observable<any>{

    return this.http.patch<any>(`${this.url}user_update/${id}`, data, { 'headers': this.headers });
  }
}
