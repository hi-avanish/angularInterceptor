import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {logger} from "../utils/DngLogger";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<unknown>> {
    // We need some logging mechanism to have some logs, but its bad practice
    // to use console log as below
    console.log('Outgoing HTTP request', request);
    // have a common service to manage
    logger.info('Outgoing HTTP request', request);
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {

        logger.info('Incoming HTTP response', event);
      })
    );
  }
}
