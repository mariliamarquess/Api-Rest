import { knex } from "knex";
import pg from 'pg';
import 'dotenv/config';

import { production, development, test } from "./Environment";


if (process.env.NODE_ENV === 'production') {
  pg.types.setTypeParser(20, 'text', parseInt);
}


export const Knex = knex(production);