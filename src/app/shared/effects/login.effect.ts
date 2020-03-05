import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/users/shared/services/user.service';
import { ILoginFormState } from '..';

@Injectable()
export class LoginEffect {
      logUser$ = createEffect(() => this.actions$.pipe(
        ofType('VALID_SUBMIT_FORM'),
        mergeMap((data : ILoginFormState) => this.userService.logUser(data.email, data.password)
          .pipe(
            map(user => ({ type: 'SUCCESSFULLY_LOGIN_USER', payload: user })),
            catchError(() => of(({ type: 'FAILED_LOGIN_USER'})))
          ))
        )
      );

      successFullyLogin$ = createEffect(() => this.actions$.pipe(
        ofType('SUCCESSFULLY_LOGIN_USER'), tap((paylod: any) => localStorage.setItem('currentUser', JSON.stringify(paylod)))
        ), {dispatch: false}
      );

      logoutUser$ = createEffect(() => this.actions$.pipe(
        ofType('LOGOUT_USER'), tap(() => localStorage.removeItem('currentUser'))
        ), {dispatch: false}
      );

    constructor(
        private actions$: Actions,
        private userService: UserService,
      ) {}
}