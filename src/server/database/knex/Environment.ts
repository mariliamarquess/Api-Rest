import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../../../.env"),
});

import { Knex } from "knex";
import { envDevelopment } from "./Environment.development";
import { envTest } from "./Environment.test";
import { envProduction } from "./Environment.production";

type EnvironmentType = "development" | "test" | "production";

const environments: Record<EnvironmentType, Knex.Config> = {
  development: envDevelopment,
  test: envTest,
  production: envProduction,
};

export default environments[process.env.NODE_ENV! as EnvironmentType] ||
  envDevelopment;