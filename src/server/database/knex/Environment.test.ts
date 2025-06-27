import { Knex } from "knex";
import { envDevelopment } from "./Environment.development";

export const envTest: Knex.Config = {
  ...envDevelopment,
  connection: ":memory:",
};