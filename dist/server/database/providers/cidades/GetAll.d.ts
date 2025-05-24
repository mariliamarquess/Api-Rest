import { ICidade } from '../../models';
export declare const getAll: (page: number, limit: number, filter: string, id?: number) => Promise<ICidade[] | Error>;
