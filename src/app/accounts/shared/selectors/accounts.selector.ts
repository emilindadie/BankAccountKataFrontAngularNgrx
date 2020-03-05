import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAccountsState } from '../states/accounts.state.i';

export const getAccountsFeatureState = createFeatureSelector<IAccountsState>('accounts');

export const hasSuccessLoadingAccounts = createSelector(
    getAccountsFeatureState,
    state => state.hasSuccessLoadingAccounts
);

export const hasLoadingAccountsErrorSelector = createSelector(
    getAccountsFeatureState,
    state => state.hasLoadingError
);


export const filteredAccountsSelector = createSelector(
    getAccountsFeatureState,
    state => state.filteredAccounts
);

export const accountsSelector = createSelector(
    getAccountsFeatureState,
    state => state.accounts
);





