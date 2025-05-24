import { Request, Response } from 'express';
interface IParamProps {
    id?: number;
}
export declare const getByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getById: (req: Request<IParamProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
