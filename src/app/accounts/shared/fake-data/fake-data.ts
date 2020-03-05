import { IAccount } from '../models';

export const mockAccounts : IAccount[] =[
        {
            id: 1,
            solde: 400,
            name: 'Livret A',
            user: {
                id: 1, 
                name: 'Emilin', 
                address: '14 rue de mulhouse', 
                email: 'dadie.emilin@gmail.com'
            }
        },
        {
            id: 2,
            solde: 400,
            name: 'Livret B',
            user: {
                id: 1, 
                name: 'Emilin', 
                address: '14 rue de mulhouse', 
                email: 'dadie.emilin@gmail.com'
            }
        }
    ];