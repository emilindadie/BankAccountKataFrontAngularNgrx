import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAccountsState } from 'src/app/accounts/shared';
import {mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { isSuccessLoginUser } from '../selectors/users.selector';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<IAccountsState>, public router: Router) {}
  canActivate(): Observable<boolean> {
   return this.store.pipe(select(isSuccessLoginUser), mergeMap((isLogged) => {
       if(!isLogged){
           this.router.navigate(['/']);
       }
       return of(isLogged)
    }))
  }
}