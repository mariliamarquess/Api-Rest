"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const ETableNames_1 = require("../../ETableNames");
const knex_1 = require("../../knex");
const getAll = async (page, limit, filter, id = 0) => {
    try {
        const result = await (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade)
            .select('*')
            .where('id', Number(id))
            .orWhere('nome', 'like', `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit);
        if (id > 0 && result.every(item => item.id !== id)) {
            const resultById = await (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade)
                .select('*')
                .where('id', '=', id)
                .first();
            if (resultById)
                return [...result, resultById];
        }
        return result;
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }
};
exports.getAll = getAll;
