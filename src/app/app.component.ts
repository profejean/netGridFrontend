import { environment } from './../environments/environment';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedIn = false;
  userName = false;
  userId = false;
  name = environment.userName;


  ngOnInit() {
    this.loggedIn = localStorage.getItem('token') !== null;

    this.userName = localStorage.getItem('userName') !== null;

    this.userId = localStorage.getItem('userId') !== null;

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    window.location.reload();
  }




}
