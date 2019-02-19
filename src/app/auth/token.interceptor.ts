import { GlobalService } from './../services/global.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Store } from '@ngrx/store';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    public auth: GlobalService;
    public token: string;

    constructor(private store: Store<any>) {
        this.store.subscribe(data => {
            if (!!data.tokenState && !!data.tokenState.token && data.tokenState.token !== undefined) {
                this.token = data.tokenState.token;
            }
        });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // if (this.token !== undefined && this.token !== '') {
        //     console.log('token : ' + this.token);
        //     const autReturnVal: string = 'Bearer ' + this.token;
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: autReturnVal
        //         }
        //     });
        // }

        return next.handle(request);
    }
}
