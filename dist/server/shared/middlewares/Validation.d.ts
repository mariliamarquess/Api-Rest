import { RequestHandler } from "express";
import { AnyObject, Maybe, ObjectSchema } from 'yup';
type TProperty = 'body' | 'header' | 'params' | 'query';
type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<T>;
type TAllSchemas = Record<TProperty, ObjectSchema<any>>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;
type TValidation = (getAllSchema: TGetAllSchemas) => RequestHandler;
export declare const validation: TValidation;
export {};
