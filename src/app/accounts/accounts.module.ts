import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { AccountsReducer } from './shared/reducers/accounts.reducer';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountService } from './shared/services/accounts.service';
import { EffectsModule } from '@ngrx/effects';
import { LoadAccountsEffect } from './shared/effects/load-accounts.effect';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsReducer } from './shared';
import { CreateAccountDialogComponent } from './components/create-account-dialog/create-account-dialog.component';
import { CreateAccountEffect } from './shared/effects/create-account.effect';
import { AuthGuard } from '../shared/guards/auth.guard';

@NgModule({
  declarations: [HomeComponent, CreateAccountDialogComponent],
  imports: [
    CommonModule, 
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('accounts', AccountsReducer),
    StoreModule.forFeature('operations', OperationsReducer),
    EffectsModule.forFeature([LoadAccountsEffect]),
    EffectsModule.forFeature([CreateAccountEffect]),
    AccountsRoutingModule
  ], 
  providers: [AccountService, AuthGuard],
  entryComponents: [CreateAccountDialogComponent]
})
export class AccountsModule { }
