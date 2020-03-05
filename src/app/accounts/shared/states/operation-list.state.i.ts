import { IOperation } from '../models/operation.i';
import { IOperationDateFilter } from '../models/operation-date.filter.i';

export interface IOperationListState {
    operationFilter: IOperationDateFilter;
    selectedOperation : IOperation;
    filteredresult : IOperation[];
}