import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../account.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let token = window.localStorage.getItem('token')
  if (token) {
    return true
  } else {
    router.navigate([''])
    return false
  }
};

export const authResolve: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AccountService).getCredentials()
}
