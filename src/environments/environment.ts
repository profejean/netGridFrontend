import { HttpHeaders } from '@angular/common/http';
export const environment = {
  production: false,
  apiURL: 'http://localhost/api/',
  headers: new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization', `Bearer  ${localStorage.getItem('token')}`)
};
