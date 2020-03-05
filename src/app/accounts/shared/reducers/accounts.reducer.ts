import { IAccountsState } from '../states/accounts.state.i';

const initialState : IAccountsState = {
    accounts: [],
    accountsItemsCount: 0,
    hasLoadingError: false,
    hasSuccessLoadingAccounts: false,
    filteredAccounts: [],
    filteredAccountsItemsCount: 0,
    serachPattern: '',
    hasCreateAccountError: false,
    hasSuccessCreatingAccounts: false
}

export function AccountsReducer(state : IAccountsState = initialState, action) : IAccountsState{
    switch(action.type){
        case 'LOAD_ACCOUNTS': 
        return {
            ...state,
        }
        case 'SUCCESSFFULLY_LOAD_ACCOUNTS': 
        return {
            ...state,
            accounts: action.payload,
            accountsItemsCount: action.payload.length,
            filteredAccounts: action.payload,
            filteredAccountsItemsCount: action.payload.length,
            hasSuccessLoadingAccounts: true
        }
        case 'FAILED_LOAD_ACCOUNTS': 
        return {
            ...state,
            hasLoadingError: true
        }
        case 'CREATE_ACCOUNT': 
        return {
            ...state,
        }
        case 'SUCCESSFFULLY_CREATE_ACCOUNT': 
        return {
            ...state,
            hasSuccessCreatingAccounts: true,
            accounts: [...state.accounts, ...[action.payload]]
        }
        case 'FAILED_CREATE_ACCOUNT': 
        return {
            ...state,
            hasCreateAccountError: true
        }
        case 'FILTERED_ACCOUNTS': 
        return {
            ...state,
            filteredAccounts: state.accounts.filter(p => p.name.includes(action.payload))
        }
        default: 
        return state;
    }
}