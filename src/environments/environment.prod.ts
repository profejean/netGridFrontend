import { HttpHeaders } from '@angular/common/http';
export const environment = {
  production: true,
  apiURL: 'http://localhost:8000',
  headers: new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization', `Bearer  ${localStorage.getItem('token')}`)
};
