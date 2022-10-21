export class AuthService {

  loggedIn: boolean = false;


  login() {
    this.loggedIn = true;
    console.log('login auth services  ' + this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
  }

  IsAuthenticated() {
    console.log('IsAuthenticated ' + this.loggedIn);
    return this.loggedIn;
  }
}
