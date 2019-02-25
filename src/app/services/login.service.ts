import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { TokenAction } from '../store/reducers/token.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

export class LoginService {

    public static instance: LoginService;
    public global: GlobalService;

    // PHP 7.x API
    private apiUrl = 'http://138.197.171.10/fullstack_php/login.php';
   // private apiUrl = 'http://localhost/auth_boilerplate/api/php/login.php';


    // Python 3.x API
    // private apiUrl = 'http://localhost:5000/api';

    constructor(public http: HttpClient, private store: Store<any>, private router: Router) {
        // LoginService.instance = this;
        // if (window.location.href.indexOf('localhost') > -1) {
        //     console.log('is localhost');
        //     this.apiUrl = 'http://localhost/auth_boilerplate/api/php/login.php';
        // }
    }

    public Login(data) {

        const httpHeaders = new HttpHeaders()
            .set('Content', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Cache-Control', 'no-cache');

        let _params = new HttpParams().set('username', data['username']);
        _params = _params.set('password', data['password']);

        const body = _params.toString();

        this.http.post(this.apiUrl, body, { headers: httpHeaders, params: _params, responseType: 'text' })
            .subscribe((val) => {
                val = val.substr(2, val.length - 1);  // fix php 7.23 seems to add \n\n to my returned string
                this.store.dispatch(new TokenAction(val));
            },
            response => {
                console.log('response : ' + JSON.stringify(response));
            },
            () => {
                this.router.navigate(['/dash', { id: '' }]);
            });
    }

}
