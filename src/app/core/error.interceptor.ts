/**
 * @author Marcelo Agustini <agustinimarcelo@gmail.com>
 */

import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status == 404) {
          this.router.navigate(["/"]);
          return throwError(err);
        } else if (err.status == 401 || err.status == 403) {
          this.router.navigate(["/"]);
          return throwError(err);
        } else if (err.status == 500) {
          this.router.navigate(["/"]);
          return throwError(err);
        } else {
          return throwError(err);
        }
      })
    );
  }
}
