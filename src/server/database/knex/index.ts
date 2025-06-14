import { knex } from "knex";
import pg from 'pg';
import 'dotenv/config';

import { production, development, test } from "./Environment";


if (process.env.NODE_ENV === 'production') {
  pg.types.setTypeParser(20, 'text', parseInt);
}

const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case 'production': return production;
    case 'test': return test;

    default: return development;
  }
}

export const Knex = knex(getEnvironment());