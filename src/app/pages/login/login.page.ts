import { GlobalService } from './../../services/global.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Store } from '@ngrx/store';
import { LoginAction } from './../../store/reducers/user.reducer';
import { Observable } from 'rxjs';
import { TokenAction } from './../../store/reducers/token.reducer';
import { Router } from '@angular/router';
import { ModalController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  public username = 'youremail@youremail.com';
  public password = '12345';

  public global: GlobalService;
  public token = '';
  public user = '';

  constructor(public modalController: ModalController,
    public http: HttpClient,
    private store: Store<any>,
    private router: Router) {
    this.global = new GlobalService();
  }

  ionViewDidEnter() {

    this.store.subscribe(data => {
      if (!!data.tokenState && !!data.tokenState.token && data.tokenState.token !== undefined) {
        // console.log('storage: ' + data.tokenState.token);
        this.user = 'Access Token ' + data.tokenState.token;
      } else if (!!data.userState && !!data.userState.user && data.userState.user !== undefined) {
        this.user = 'User Name ' + (data.userState.user as LoginAction).username;
      }
    });
  }

  public login(form: NgForm) {

    if (!!form.value.username) {
      this.username = form.value.username;
    }

    if (!!form.value.password) {
      this.password = form.value.password;
    }
    console.log(form.value.username);
    const loginService = new LoginService(this.http, this.store, this.router);
    loginService.Login({ username: this.username, password: this.password });

    this.store.dispatch(new LoginAction(this.username, this.password));
  }

  public getFromNgRx() {

    // this.store.subscribe(data => {
    //   this.user = 'From Store :: ';
    //   this.user += (data.userState.user as LoginAction).username;
    // });
  }

}
