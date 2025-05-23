"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = void 0;
const ETableNames_1 = require("../../ETableNames");
const knex_1 = require("../../knex");
const deleteById = async (id) => {
    try {
        const result = await (0, knex_1.Knex)(ETableNames_1.ETableNames.cidade)
            .where('id', '=', id)
            .del();
        if (result > 0)
            return;
        return new Error('Erro ao apagar o registro');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao apagar o registro');
    }
};
exports.deleteById = deleteById;
