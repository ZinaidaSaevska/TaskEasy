import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from './AuthService';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  // @ts-ignore
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true
    }

  }

}
