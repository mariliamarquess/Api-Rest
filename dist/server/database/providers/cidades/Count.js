"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const ETableNames_1 = require("../../ETableNames");
const knex_1 = require("../../knex");
const count = async (filter = '') => {
    try {
        const [{ count }] = await (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade)
            .where('nome', 'like', `%${filter}%`)
            .count('* as count');
        if (Number.isInteger(Number(count)))
            return Number(count);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
};
exports.count = count;
