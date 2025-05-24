import { Request, RequestHandler, Response } from "express";
import { ICidade } from "../../database/models";
export declare const createValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const create: (req: Request<{}, {}, ICidade>, res: Response) => Promise<Response<any, Record<string, any>>>;
