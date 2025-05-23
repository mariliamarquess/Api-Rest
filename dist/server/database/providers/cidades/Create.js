"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const ETableNames_1 = require("../../ETableNames");
const knex_1 = require("../../knex");
const create = async (cidade) => {
    try {
        const [result] = await (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade).insert(cidade).returning('id');
        if (typeof result === 'object') {
            return result.id;
        }
        else if (typeof result === 'number') {
            return result;
        }
        return new Error('Erro ao cadastrar o registro');
    }
    catch (error) {
        console.log(error);
        return Error('Erro ao cadastrar o registro');
    }
};
exports.create = create;
