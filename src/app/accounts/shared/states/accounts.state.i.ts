import { IAccount } from '../models/account.i';

export interface IAccountsState {
    accounts :IAccount[],
    accountsItemsCount: 0,
    serachPattern: string,
    filteredAccounts: IAccount[]
    filteredAccountsItemsCount: 0,
    hasSuccessLoadingAccounts: boolean;
    hasLoadingError: boolean;
    hasSuccessCreatingAccounts: boolean;
    hasCreateAccountError: boolean;
}