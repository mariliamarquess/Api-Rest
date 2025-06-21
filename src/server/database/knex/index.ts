import dotenv from 'dotenv';
import path from "path";
console.log(path.resolve(__dirname, "../../../../.env"))
dotenv.config({
	path: path.resolve(__dirname, "../../../../.env")
})

import { knex } from "knex";
import pg from 'pg';

if (process.env.NODE_ENV === "production") {
  pg.types.setTypeParser(20, "text", parseInt);
}
  const Knex = knex({
  client: "pg",
  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
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
console.log(__dirname);
export default Knex;