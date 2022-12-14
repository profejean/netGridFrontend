import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    if(this.authService.IsAuthenticated()){
      return true;
    } else {
      this.router.navigate(['login']);
      localStorage.removeItem('token');
      return false;
    }
  }

}
