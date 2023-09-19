import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AccountService } from './account.service';

@Injectable()
export class AccountInterceptor implements HttpInterceptor {

  constructor(
    private accountService: AccountService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = window.localStorage.getItem('token')
    let authreq = request
    authreq = request.clone({
      setHeaders: {
          Authorization: `Bearer ${accessToken}`
      }
    });

    return next.handle(authreq).pipe(
      catchError(
        (error) => {
          if(error.status === 401 && window.localStorage.getItem('token')) {
            return this.accountService.refreshToken().pipe(
              switchMap(
                (response: any) => {
                  window.localStorage.setItem('token', response.access_token)
                  if (window.localStorage.getItem('token')) {
                    authreq = request.clone({
                      setHeaders: {
                          Authorization: `Bearer ${window.localStorage.getItem('token')}`
                      }
                    });
                  }

                  return next.handle(authreq)
                }
              ),
              catchError(
                (error) => {
                  return throwError(() => error)
                }
              )
            )
          }
          return throwError(() => error)
        }
      )
    )

  }
}
