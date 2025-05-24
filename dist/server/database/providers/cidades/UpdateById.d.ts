import { ICidade } from '../../models';
export declare const updateById: (id: number, cidade: Omit<ICidade, "id">) => Promise<void | Error>;
