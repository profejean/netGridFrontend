import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loggedIn = false;

  ngOnInit() {
    console.log(localStorage.getItem('token'));
    this.loggedIn = localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }


}
