import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

    private apiHost = 'https://jsonbin.io';

    constructor(public http: HttpClient) {
    }

    public login(email: string, password: string): any {
        return this.http.get(this.apiHost + '/59e560b708be13271f7df4ff')
        .subscribe((response) => {
            return response;
        },
        response => {
            throw Observable.throw('err');
        });
    }
}
