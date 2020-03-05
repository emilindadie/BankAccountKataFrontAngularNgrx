import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { IUsersState } from 'src/app/shared';
import { isLoginErrorSelector, isValidFormSelector, isSuccessLoginUser } from 'src/app/shared/selectors/users.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginError$: Observable<boolean> = new Observable();
  invalidSubmitForm$: Observable<boolean> = new Observable();

  constructor(private store: Store<IUsersState>, private router : Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.loginError$ = this.store.pipe(select(isLoginErrorSelector));
    this.invalidSubmitForm$ = this.store.pipe(select(isValidFormSelector));
    this.store.pipe(select(isSuccessLoginUser)).subscribe(isLogged => {
      if(isLogged){
        this.router.navigate(['/home/accounts']);
      }
    });
  }

  logUser(value){
    this.store.dispatch({type: 'VALID_SUBMIT_FORM', payload: value});
  }
}
