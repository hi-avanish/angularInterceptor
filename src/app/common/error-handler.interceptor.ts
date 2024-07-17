import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {logger} from "../utils/DngLogger";
import {NotificationsService} from "../services/notifications.service";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private notificationsService:NotificationsService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle the error here
          logger.error('OOPS some thing went wrong :', error);
            this.notificationsService.showError(error.message,error.name)
          //throw error as per requirement
           return throwError(() => new Error(error.message));
        })
    );
  }
}
