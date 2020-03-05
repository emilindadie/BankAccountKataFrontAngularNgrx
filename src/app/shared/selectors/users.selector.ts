import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoginUserState, ILoginFormState } from '../states';

export const getLoginUserSelector = createFeatureSelector<ILoginUserState>('loginUser');
export const getLoginFormSelector = createFeatureSelector<ILoginFormState>('loginForm');

export const isSuccessLoginUser = createSelector(
    getLoginUserSelector,
    state => state.isLogged
);

export const isValidFormSelector = createSelector(
    getLoginFormSelector,
    state => state.isValid
);

export const isLoginErrorSelector = createSelector(
    getLoginUserSelector,
    state => state.hasError
);

export const getCurrentUserSelector = createSelector(
    getLoginUserSelector,
    state => state.currentUser
);


