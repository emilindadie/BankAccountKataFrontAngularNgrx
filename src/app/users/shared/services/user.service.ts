import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.i';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient){}

    logUser(email: string, password: string) : Observable<IUser>{
        //return this.http.post<IUser>('localhost:3001/users/login', {email : email, password: password});
        return of<IUser>({id: 1, name: 'Emilin', address: '14 rue de mulhouse', email: 'dadie.emilin@gmail.com'})
    }
}
