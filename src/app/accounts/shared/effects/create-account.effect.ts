import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountService } from '../services/accounts.service';

@Injectable()
export class CreateAccountEffect {

      createAccounts$ = createEffect(() => this.actions$.pipe(
        ofType('CREATE_ACCOUNT'),
        mergeMap((action : any) => this.accountService.createAccount(action.payload)
          .pipe(
            map(account => ({ type: 'SUCCESSFFULLY_CREATE_ACCOUNT', payload: account })),
            catchError(() => of(({ type: 'FAILED_CREATE_ACCOUNT'})))
          ))
        )
      );

    constructor(
        private actions$: Actions,
        private accountService: AccountService,
      ) {}
}