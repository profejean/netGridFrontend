export class AuthService {

  loggedIn: boolean = false;


  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  IsAuthenticated() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }
}
