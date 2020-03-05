import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAccount } from '../models/account.i';
import { mockAccounts } from '../fake-data/fake-data';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient){}

    loadAccounts(userId: number) : Observable<IAccount[]>{
       // return this.http.get<IAccount[]>('localhost:3001/accounts', {params : { 'userId' : userId}});
        return of<IAccount[]>(mockAccounts);
    }

    createAccount(account: IAccount) : Observable<IAccount>{
        // return this.http.post<IAccount[]>('localhost:3001/accounts', {params : { 'userId' : userId}});
        mockAccounts.push(account);
        return of(account);
     }
}
