import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountService } from '../services/accounts.service';

@Injectable()
export class LoadAccountsEffect {
      loadAccounts$ = createEffect(() => this.actions$.pipe(
        ofType('LOAD_ACCOUNTS'),
        mergeMap((action : any) => this.accountService.loadAccounts(action.payload)
          .pipe(
            map(accounts => ({ type: 'SUCCESSFFULLY_LOAD_ACCOUNTS', payload: accounts })),
            catchError(() => of(({ type: 'FAILED_LOAD_ACCOUNTS'})))
          ))
        )
      );

    constructor(
        private actions$: Actions,
        private accountService: AccountService,
      ) {}
}