"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = void 0;
const ETableNames_1 = require("../../ETableNames");
const knex_1 = require("../../knex");
const updateById = async (id, cidade) => {
    try {
        const result = await (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade)
            .update(cidade)
            .where('id', '=', id);
        if (result > 0)
            return;
        return new Error('Erro ao atualizar o registro');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao atualizar o registro');
    }
};
exports.updateById = updateById;
