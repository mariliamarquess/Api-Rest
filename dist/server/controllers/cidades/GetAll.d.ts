import { Request, Response } from 'express';
interface IQueryProps {
    id?: number;
    page?: number;
    limit?: number;
    filter?: string;
}
export declare const getAllValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getAll: (req: Request<{}, {}, {}, IQueryProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
