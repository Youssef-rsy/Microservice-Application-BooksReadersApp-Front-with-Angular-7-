import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedDataService } from './shared-data.service';
import { Injectable } from '@angular/core';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authToken:SharedDataService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.authToken.getToken()}`
            }
          });
          console.log(request);
      
          return next.handle(request);
    }
}