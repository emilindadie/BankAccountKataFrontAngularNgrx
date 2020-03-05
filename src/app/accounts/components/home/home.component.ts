import { Component, OnInit } from '@angular/core';
import { IAccountsState } from '../../shared/states/accounts.state.i';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { IAccount } from '../../shared/models/account.i';
import { filteredAccountsSelector } from '../../shared/selectors/accounts.selector';
import { filter, debounceTime, switchMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateAccountDialogComponent } from '../create-account-dialog/create-account-dialog.component';
import { getCurrentUserSelector } from 'src/app/shared/selectors/users.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accounts$: Observable<IAccount[]> = new Observable();
  gridCols : BehaviorSubject<number> = new BehaviorSubject<number>(1);

  form: FormGroup;
  constructor(private store: Store<IAccountsState>,public dialog: MatDialog) {
    this.form = new FormGroup({
      search: new FormControl(''),
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateAccountDialogComponent, {
      width: '40%',
      data: {}
    });

    dialogRef.afterClosed().subscribe((accountName : string) => {
        if(accountName){
          this.store.pipe(filter(user => !!user),select(getCurrentUserSelector)).subscribe(user => {
            const account : IAccount = {
              id: 0, 
              name: accountName,
              solde: 0,
              user: user
            }
            this.store.dispatch({type: 'CREATE_ACCOUNT', payload: account});
          })
        }
    });
  }

  ngOnInit(): void {
    this.form.get('search').valueChanges.pipe(
      debounceTime(300),
      switchMap(pattern => of(this.store.dispatch({type: 'FILTERED_ACCOUNTS', payload: pattern})))
    ).subscribe();
    this.accounts$ = this.store.pipe(select(filteredAccountsSelector));
    this.store.pipe(filter(user => !!user),select(getCurrentUserSelector)).subscribe(user => {
      this.store.dispatch({type: 'LOAD_ACCOUNTS', payload: user.id});
    })
  }
}
