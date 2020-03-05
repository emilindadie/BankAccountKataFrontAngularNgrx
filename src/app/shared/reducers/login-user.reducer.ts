import { ILoginUserState } from '..';

const initialState : ILoginUserState = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    hasError: false,
    isLogged: JSON.parse(localStorage.getItem('currentUser'))? true : false
}

export function LoginUserReducer (state : ILoginUserState = initialState, action) : ILoginUserState {
    switch(action.type){
        case 'LOGOUT_USER': 
        return {
            ...state,
            isLogged: false,
            currentUser: null
        }
        case 'SUCCESSFULLY_LOGIN_USER':
        return {
            ...state,
            isLogged: true,
            currentUser: action.payload
        }

        case 'FAILED_LOGIN_USER':
            return state;
    
        default: 
            return state;
    }
}