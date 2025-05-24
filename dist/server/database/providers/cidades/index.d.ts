export declare const CidadesProvider: {
    count: (filter?: string) => Promise<number | Error>;
    getAll: (page: number, limit: number, filter: string, id?: number) => Promise<import("../../models").ICidade[] | Error>;
    create: (cidade: Omit<import("../../models").ICidade, "id">) => Promise<number | Error>;
    getById: (id: number) => Promise<import("../../models").ICidade | Error>;
    updateById: (id: number, cidade: Omit<import("../../models").ICidade, "id">) => Promise<void | Error>;
    deleteById: (id: number) => Promise<void | Error>;
};
