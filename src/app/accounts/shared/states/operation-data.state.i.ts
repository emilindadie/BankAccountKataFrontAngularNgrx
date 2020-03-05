import { IOperation } from '../models/operation.i';

export interface IOperationDataState {
    itemsCount : number;
    operations : IOperation[];
    hasLoadingError: boolean;
}