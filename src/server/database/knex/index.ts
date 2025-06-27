import { knex } from "knex";
import pg from "pg";
import environment from "./Environment";

if (process.env.NODE_ENV === "production") {
  pg.types.setTypeParser(20, "text", parseInt);
}

export const Knex = knex(environment);