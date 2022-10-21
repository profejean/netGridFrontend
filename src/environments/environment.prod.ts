import { HttpHeaders } from '@angular/common/http';
export const environment = {
  production: true,
  apiURL: 'http://localhost:8000',
  apiCharacterURL: 'https://rickandmortyapi.com/api/character',
  headers: new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', `Bearer  ${localStorage.getItem('token')}`),
  userId: localStorage.getItem('userId'),
  userName: localStorage.getItem('userName')
};
