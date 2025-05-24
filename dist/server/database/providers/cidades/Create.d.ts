import { ICidade } from "../../models";
export declare const create: (cidade: Omit<ICidade, "id">) => Promise<number | Error>;
