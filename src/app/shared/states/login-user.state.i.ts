import { IUser } from 'src/app/users/shared/models/user.i';

export interface ILoginUserState {
    isLogged: boolean,
    currentUser: IUser,
    hasError: boolean,
}