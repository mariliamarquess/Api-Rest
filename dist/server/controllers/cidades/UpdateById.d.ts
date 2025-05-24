import { Request, Response } from 'express';
import { ICidade } from '../../database/models';
interface IParamProps {
    id?: number;
}
interface IBodyProps extends Omit<ICidade, 'id'> {
}
export declare const updateByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const updateById: (req: Request<IParamProps, {}, IBodyProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
