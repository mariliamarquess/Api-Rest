"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const ETableNames_1 = require("../../ETableNames");
const knex_1 = require("../../knex");
const getById = async (id) => {
    try {
        const result = await (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade)
            .select('*')
            .where('id', '=', id)
            .first();
        if (result)
            return result;
        return new Error('Registro não encontrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao consultar o registro');
    }
};
exports.getById = getById;
