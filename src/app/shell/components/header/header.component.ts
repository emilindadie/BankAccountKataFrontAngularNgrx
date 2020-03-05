import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUsersState } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<IUsersState>, public router: Router) {}

  ngOnInit(): void {
  }

  logOut(){
    this.store.dispatch({type: 'LOGOUT_USER'});
    this.router.navigate(['/']);
  }
}
