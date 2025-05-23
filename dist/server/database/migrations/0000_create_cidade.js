"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
const ETableNames_1 = require("../ETableNames");
async function up(knex) {
    return knex
        .schema
        .createTable(ETableNames_1.ETableNames.cidade, table => {
        table.bigIncrements('id').primary().index();
        table.string('nome', 150).checkLength('<=', 150).index().notNullable();
        table.comment('Tabela usada para armazenar cidades do sistema.');
    })
        .then(() => {
        console.log(`# Created table ${ETableNames_1.ETableNames.cidade}`);
    });
}
async function down(knex) {
    return knex
        .schema
        .dropTable(ETableNames_1.ETableNames.cidade)
        .then(() => {
        console.log(`# Dropped table ${ETableNames_1.ETableNames.cidade}`);
    });
}
