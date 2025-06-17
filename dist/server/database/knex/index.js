"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knex = void 0;
const knex_1 = require("knex");
const pg_1 = __importDefault(require("pg"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
if (process.env.NODE_ENV === "production") {
    pg_1.default.types.setTypeParser(20, "text", parseInt);
}
exports.Knex = (0, knex_1.knex)({
    client: "pg",
    migrations: {
        directory: path_1.default.resolve(__dirname, "..", "migrations"),
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, "..", "seeds"),
    },
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
        port: Number(process.env.DATABASE_PORT || 5432),
        ssl: { rejectUnauthorized: false },
    },
});
