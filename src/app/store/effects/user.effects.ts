
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';

import { UserActionTypes } from '../reducers/user.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class UserEffects {

  @Effect()
  someEffect$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.USER_LOGIN), // use the pipeable ofType operator
    map(response => ({ type: UserActionTypes.USER_LOGIN_SUCCESS, user: response }))
  );

  constructor(private actions$: Actions) { }
}
