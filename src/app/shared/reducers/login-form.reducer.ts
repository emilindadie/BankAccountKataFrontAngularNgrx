import { ILoginFormState } from '..';

const initialState : ILoginFormState = {
    email: '',
    password: '',
    isValid: true
}

export function LoginFormReducer (state : ILoginFormState = initialState, action){
    switch(action.type){
        case 'VALID_SUBMIT_FORM': 
        return {
            ...state,
            isValid: true 
        }

        case 'INVALID_SUBMIT_FORM': 
        return {
            ...state,
            isValid: false 
        }
        default: 
        return state;
    }
}